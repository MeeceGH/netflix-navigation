const btnClose = document.querySelector('.close');
const btnOpen = document.querySelector('.nav-btn');
const navbar = document.querySelector('.navbar');

btnOpen.addEventListener('click', () => {
    navbar.classList.add('show');
    navbar.classList.remove('closed');
});

btnClose.addEventListener('click', () => {
    navbar.classList.remove('show');
    navbar.classList.add('closed');
});