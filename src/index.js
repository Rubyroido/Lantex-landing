const description = document.querySelector('.description');
const photoOne = description.querySelector('.description__photo_one');
const photoTwo = description.querySelector('.description__photo_two');

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
        if(e.target.classList.contains(classes)) {
            serviceItem.classList.toggle('list__item-content_active');
        }
    })
})