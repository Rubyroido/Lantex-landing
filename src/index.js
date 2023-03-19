const description = document.querySelector('.description');
const photoOne = description.querySelector('.description__photo_one');
const photoTwo = description.querySelector('.description__photo_two');

function photoToggle() {
    photoTwo.classList.toggle('description__photo_active');
    photoOne.classList.toggle('description__photo_active');
    setTimeout(photoToggle,5000);
}

document.addEventListener('DOMContentLoaded', (evt)=>{
    setTimeout(photoToggle,3000)
}); 