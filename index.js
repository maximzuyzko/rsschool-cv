const projects = document.querySelectorAll('.projects__item');

function addOpen() {
    this.classList.add('open');
}

function removeOpen() {
    this.classList.remove('open');
}

function toggleActive(e) {
    console.log(e.propertyName)
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

projects.forEach(project => project.addEventListener('mouseenter', addOpen));
projects.forEach(project => project.addEventListener('mouseleave', removeOpen));
projects.forEach(project => project.addEventListener('transitionend', toggleActive));

hljs.initHighlightingOnLoad();