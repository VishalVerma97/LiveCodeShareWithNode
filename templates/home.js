(function() {

  let homeForm = document.querySelector('#homeForm');
  let loginForm = document.querySelector('#loginForm');
  let registerForm = document.querySelector('#registerForm');
  let contactForm = document.querySelector('#contactForm');

  // Adding Event Listerners to nav items
  const login = document.querySelector('#loginItem');
  login.addEventListener('click', () => {
    showForm(loginForm);
  });

  const register = document.querySelector('#registerItem');
  register.addEventListener('click', () => {
    showForm(registerForm);
  });

  const contact = document.querySelector('#contactItem');
  contact.addEventListener('click', () => {
    showForm(contactForm);
  });

  const home = document.querySelector('#homeItem');
  home.addEventListener('click', () => {
    showForm(homeForm);
  });

  const app = document.querySelector('#appItem');
  app.addEventListener('click', () => {
    showForm(homeForm);
  });
  // Adding event listeners end

  // show form
  function showForm(form) {
    form.setAttribute('style', 'display: block');
    hideForm(form.id);
  }

  // hide other form
  function hideForm(form) {

    switch(form) {

      case 'loginForm':
          homeForm.setAttribute('style', 'display: none');
          registerForm.setAttribute('style', 'display: none');
          contactForm.setAttribute('style', 'display: none');
        break;

      case 'registerForm':
        homeForm.setAttribute('style', 'display: none');
        loginForm.setAttribute('style', 'display: none');
        contactForm.setAttribute('style', 'display: none');
        break;

      case 'contactForm':
        homeForm.setAttribute('style', 'display: none');
        registerForm.setAttribute('style', 'display: none');
        loginForm.setAttribute('style', 'display: none');
        break;

      case 'homeForm':
        loginForm.setAttribute('style', 'display: none');
        registerForm.setAttribute('style', 'display: none');
        contactForm.setAttribute('style', 'display: none');
        break;
    }

  }

})();