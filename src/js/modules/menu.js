function hamburgerNenu() {
    const hamburger = document.querySelector('.header__gamburger'),
          closeElem = document.querySelector('.menu__toggle'),
          menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
}); 
} 

export default hamburgerNenu;
 