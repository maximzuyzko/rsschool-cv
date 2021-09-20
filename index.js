const projects = document.querySelectorAll('.projects__item');
const burgerButton = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.body');
const links = document.querySelectorAll('.navigation__link');
const header = document.querySelector('.header');

//open and compress projects preview
function addOpen() {
    this.classList.add('open');
}

function removeOpen() {
    this.classList.remove('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

projects.forEach(project => project.addEventListener('mouseenter', addOpen));
projects.forEach(project => project.addEventListener('mouseleave', removeOpen));
projects.forEach(project => project.addEventListener('transitionend', toggleActive));

//burger menu and overlay
function toggleMenuAndOverlay() {
    burgerButton.classList.toggle('burger__active');
    overlay.classList.toggle('overlay__active');
    body.classList.toggle('hidden');
    header.classList.toggle('header__active');
}

function closeMenuAndOverlay() {
    burgerButton.classList.remove('burger__active');
    overlay.classList.remove('overlay__active');
    body.classList.remove('hidden');
    header.classList.remove('header__active');
}

burgerButton.addEventListener('click', toggleMenuAndOverlay);
overlay.addEventListener('click', toggleMenuAndOverlay);
links.forEach(link => link.addEventListener('click', closeMenuAndOverlay));

//highlight.js
hljs.initHighlightingOnLoad();

console.log('1-вёрстка валидная +10\n'+
    '2-вёрстка семантическая(article, figure, footer, header, main, nav, section, time, h1-h3) +20\n'+
    '3-используются css-стили +10\n'+
    '4-контент в блоке, который горизонтально центрируется на странице. Фоновый цвет, тянется во всю ширину страницы +10\n'+
    '5-вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10\n'+
    '6-есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. +10\n'+
    '7-фото и alt +10\n'+
    '8-контакты для связи и перечень навыков оформлены в виде списка ul > li +10\n'+
    '9-CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10\n'+
    '11-CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода +10\n'+
    '12-CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10\n'+
    '13-CV выполнено на английском языке +10\n'+
    '14-выполнены требования к Pull Request +10\n'+
    '15-нет резюме 0\n'+
    '16-дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10\n'+
    'Итого: 140 или 150 баллов на Ваше усмотрение');