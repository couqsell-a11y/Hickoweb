document.addEventListener('DOMContentLoaded', function () {
  const searchToggle = document.getElementById('mobileSearchToggle');
  const mobileSearch = document.querySelector('.mobile-search');

  // Mobile search toggle
  searchToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileSearch.classList.toggle('show');
  });

  // Click outside to close mobile search
  document.addEventListener('click', (e) => {
    const clickedInsideSearch = mobileSearch.contains(e.target) || searchToggle.contains(e.target);
    if (!clickedInsideSearch) {
      mobileSearch.classList.remove('show');
    }
  });
});






// Check if user has a saved preference first
const savedLang = localStorage.getItem('preferredLang');

if (!savedLang) {
  // Get browser language
  const userLang = navigator.language || navigator.userLanguage; // e.g., "nl-NL" or "en-US"
  
  // Map to your site’s language URLs
  let langURL = '/index.html'; // default English
  if (userLang.startsWith('nl')) langURL = '/nl/Home.html';
  if (userLang.startsWith('fr')) langURL = '/fr/index.html';
  
  // Save for future visits
  localStorage.setItem('preferredLang', langURL);
  
  // Redirect to appropriate page
  if (window.location.pathname !== langURL) {
    window.location.href = langURL;
  }
}

function changeLanguage(url) {
  // Save selected language
  localStorage.setItem('preferredLang', url);
  // Redirect
  window.location.href = url;
}


// Change language and save preference
function changeLanguage(url) {
  localStorage.setItem('preferredLang', url);
  window.location.href = url;
}

// Highlight current language
const currentPath = window.location.pathname.toLowerCase(); // lowercase to avoid casing issues
const buttons = document.querySelectorAll('.lang-btn');

buttons.forEach(btn => {
  if(currentPath.endsWith(btn.dataset.url.toLowerCase())) {
    btn.classList.add('current');
  }
});


