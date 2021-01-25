addEventListener('click', function (ev) {
    if (ev.target.classList.contains('nav-item')) {
        ev.preventDefault();
        document.querySelector(ev.target.getAttribute('href')).scrollIntoView(true);
    }
});
