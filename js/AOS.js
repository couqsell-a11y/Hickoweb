document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 700, // 1 second fade duration
    once: true,     // animations happen only once
    offset: 100,    // start animation slightly before in view
    easing: 'ease-in-out'
  });
});
