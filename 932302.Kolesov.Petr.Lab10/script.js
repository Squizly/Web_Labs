const background = document.querySelector('.scene__background');

background.addEventListener('click', () => {
    background.classList.add('remove');
});

const lamp = document.querySelector('.lamp__container');
const light = document.querySelector('.scene__light');
const figures = document.querySelector('.scene__figures');

lamp.addEventListener('mousedown', () => {
    lamp.classList.add('mousedown');
});

lamp.addEventListener('mouseup', () => {
    lamp.classList.remove('mousedown');
});

lamp.addEventListener('click', () => {
    light.classList.toggle('on');
    figures.classList.toggle('display');
});

const rabbit = document.querySelector('.prop__rabbit');
const bird = document.querySelector('.prop__bird');

rabbit.addEventListener('click', () => {
    rabbit.classList.add('hide');
    bird.classList.remove('hide');
});

bird.addEventListener('click', () => {
    bird.classList.add('hide');
    rabbit.classList.remove('hide');
});
