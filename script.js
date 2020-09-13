addEventListener('click', function (ev) {
    if (ev.target.classList.contains('nav-item')) {
        ev.preventDefault();
        document.querySelector(ev.target.getAttribute('href')).scrollIntoView(true);
    }
});

// document.body.addEventListener('activate.bs.scrollspy', function() {
//     var el = document.querySelector('#navbar-list .nav-item.active');
//     el.previousSibling.style.borderColor = white;
//     el.nextSibling.style.borderColor = white;
//     console.log('yuh %s %s', el.previousSibling, el.nextSibling);
// });
