const nav = document.querySelector('#nav');
const contentContainers = document.querySelectorAll('.content');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const footerlink = document.querySelectorAll('.footerLink');
const explore = document.querySelector('#explore');
const about = document.querySelector('#about');

nav.addEventListener('click', (event) => {
  if (event.target.matches('[data-target]')) {
    event.preventDefault();

    // Remove the active class from all content containers
    contentContainers.forEach(container => container.classList.remove('active'));

    // Get the ID of the content container to display
    const targetId = event.target.getAttribute('data-target');

    // Add the active class to the selected content container
    const targetContainer = document.querySelector(targetId);
    targetContainer.classList.add('active');
  }
});

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  mobileNav.classList.toggle('active');
});



mobileNav.addEventListener('click', (event) => {
  if (event.target.matches('[data-target]')) {
    event.preventDefault();

    // Remove the active class from all content containers
    contentContainers.forEach(container => container.classList.remove('active-sm'));

    // Get the ID of the content container to display
    const targetId = event.target.getAttribute('data-target');

    // Add the active class to the selected content container
    const targetContainer = document.querySelector(targetId);
    targetContainer.classList.add('active-sm');

    //close navbar
    mobileNav.classList.remove('active');
    menuToggle.classList.remove('active')
  }
});

explore.addEventListener('click', () => {
  contentContainers.forEach(container => container.classList.remove('active-sm'));
  about.classList.add('active-sm')
});

// footer nav
footerlink.forEach(link => {
  link.addEventListener('click', (event) => {
    if (event.target.matches('[data-target]')) {
      event.preventDefault();
  
      // Remove the active class from all content containers
      contentContainers.forEach(container => container.classList.remove('active-sm'));
  
      // Get the ID of the content container to display
      const targetId = event.target.getAttribute('data-target');
  
      // Add the active class to the selected content container
      const targetContainer = document.querySelector(targetId);
      targetContainer.classList.add('active-sm');
    }
  })
});



