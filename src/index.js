const description = document.querySelector('.description');
const photoOne = description.querySelector('.description__photo_one');
const photoTwo = description.querySelector('.description__photo_two');

const headerMenu = document.querySelector('.header__menu');
const menuButton = document.querySelector('.header__menu-button');
const headerLinks = document.querySelector('.header__links');
const listOfLinks = headerLinks.cloneNode(true);
const menuLinks = Array.from(listOfLinks.childNodes);

const servicesList = document.querySelector('.list');
const servicesArray = Array.from(servicesList.querySelectorAll('.list__item'));
const classes = [
    'list__item-content',
    'list__item-services',
    'list__item-text',
    'list__item-image'
]

// функция анимации переключения блока description
function photoToggle() {
    photoTwo.classList.toggle('description__photo_active');
    photoOne.classList.toggle('description__photo_active');
    setTimeout(photoToggle, 5000);
}

// первое переключение блока description при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(photoToggle, 3000)
});

// слушатель клика на каждом элементе блока services
servicesArray.forEach(item => {
    item.addEventListener('click', (e) => {
        let serviceItem = item.firstElementChild;
        serviceItem.classList.toggle('list__item-content_active');
        if (e.target.classList.contains(classes)) {
            serviceItem.classList.toggle('list__item-content_active');
        }
    })
})

// закрытие меню при нажатии на ссылку
menuLinks.forEach(link => {
    headerMenu.prepend(link);
    link.addEventListener('click', () => {
        headerMenu.classList.remove('header__menu_active');
        menuButton.classList.remove('header__menu-button_active');
    })
})

// открытие и закрытие меню
menuButton.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu_active');
    menuButton.classList.toggle('header__menu-button_active');
    if (headerMenu.classList.contains('header__menu_active')) {
        description.addEventListener('click', () => {
            headerMenu.classList.remove('header__menu_active');
            menuButton.classList.remove('header__menu-button_active');
        })
    }
})

