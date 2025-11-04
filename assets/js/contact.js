(function($) {
    "use strict"; // Start of use strict

    let form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      console.log("Preparing data");
      let form = this;

      // Show Sending & Disable Send button
      form.querySelector('#validation').classList.remove('text-error');
      form.querySelector('#validation').classList.add("text-primary");     
      form.querySelector("#validation").innerHTML = "<i class=\"fa fa-envelope-o\"></i> Bezig met verzenden...";
      form.querySelector("#verzendenButton").disabled = true;
      
      let action = form.getAttribute('action');
      let recaptcha = form.getAttribute('recaptcha-site-key');
      let formData = new FormData( form );

      if ( recaptcha ) {
        if(typeof grecaptcha !== "undefined" ) {
          grecaptcha.ready(function() {
            try {
              grecaptcha.execute(recaptcha, {action: 'contact'})
              .then(token => {
                formData.set('recaptcha_response', token);
                form_submit(form, action, formData);
              })
            } catch(error) {
              displayError(form, error)
            }
          });
        } else {
          displayError(form, 'The reCaptcha javascript API url is not loaded!')
        }
      } else {
        form_submit(form, action, formData);
      }
	});

  function form_submit(form, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
    .then(response => {
      if( response.ok ) {
        return response.text();
      } else {
        throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
      }
    })
    .then(data => {
      data = JSON.parse(data);
        if(data.status)
        {
          // herladen base pagina
          form.reset();
          form.querySelector('#validation').classList.remove('text-error');
          form.querySelector('#validation').classList.add("text-primary");

          let bedankturl = formData.get("originurl") + "bedankt/";
          window.location.replace(bedankturl);
        }
        else
        {
          form.querySelector('#validation').classList.remove("text-primary");     
          form.querySelector('#validation').classList.add('text-error');
          form.querySelector('#validation').innerHTML = "<i class=\"fa fa-exclamation-triangle\"></i> " + data.message;
        }
    })
    .catch((error) => {
      displayError(form, error);
    });
      form.querySelector("#verzendenButton").disabled = false;
  }

  function displayError(form, error) {
    form.querySelector('#validation').classList.remove('d-block');
    form.querySelector('#validation').innerHTML = error;
    form.querySelector('#validation').classList.add('d-block');
  }

})();