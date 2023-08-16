import createHomepage from "./homepage";
import './stylesheet.css';
const page = document.querySelector('.content');
const header = document.createElement('header');
const footer = document.createElement('footer');
const restaurantName = document.createElement('h1')


restaurantName.textContent = 'Restaurant Name';
restaurantName.classList.add('restaurantName');

const headerNav = document.createElement('nav');
const footerNav = document.createElement('nav');
headerNav.classList.add('nav');
footerNav.classList.add('nav');

header.appendChild(headerNav);
footer.appendChild(footerNav);

function createNav(navName) {
    const navElement = document.createElement('a');
    navElement.href = '';
    navElement.textContent = (navName);
    return navElement;
};
    headerNav.appendChild(createNav('Home'));
    headerNav.appendChild(createNav('About'));
    headerNav.appendChild(createNav('Contacts'));

    footerNav.appendChild(createNav('Contacts'));
page.appendChild(restaurantName);
page.appendChild(header);

createHomepage();

page.appendChild(footer);
