const dropdown = document.querySelector('#dropdown-menu');
const dropdownLinks = document.querySelector('.navbar__menu');
const logo = document.querySelector('#navbar__logo');

const phoneMenu = () => {
    dropdown.classList.toggle('is-active');
    dropdownLinks.classList.toggle('active');
};

dropdown.addEventListener('click', phoneMenu);
/* Highlights which section of the page is currently being displayed to the user */
const highlightIndicator = () => {
    const ele = document.querySelector('.highlight');
    const home = document.querySelector('#home-page');
    const about = document.querySelector('#about-page');
    const contact = document.querySelector('#contact-page');

    let scrollPos = window.scrollY;

    if (window.innerWidth > 960 && scrollPos < 500){
        home.classList.add('highlight');
        about.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400){
        about.classList.add('highlight');
        home.classList.remove('highlight');
        contact.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345){
        contact.classList.add('highlight');
        about.classList.remove('highlight');
        return;
    }
    if ((ele && window.innerWidth < 960 && scrollPos < 600) || ele){
        ele.classList.remove('highlight')
    } 
};

window.addEventListener('scroll', highlightIndicator);
window.addEventListener('click', highlightIndicator);

/* Hides the dynamic dropdown menu upon user clicking on one of the options */
const hideDropdown = () => {
    const toggler = document.querySelector('.is-active');
    if (window.innerWidth <= 960 && toggler){
        dropdown.classList.toggle('is-active');
        dropdownLinks.classList.toggle('active');
    }
}

dropdownLinks.addEventListener('click', hideDropdown);
logo.addEventListener('click', hideDropdown);