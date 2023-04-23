let navbar = document.getElementById('navbar');
let hamburger_menu = document.getElementById('hamburger_menu');

hamburger_menu.addEventListener('click', function () {
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }


});

document.onscroll = function () {
    if (window.screen.width < 768) {
        navbar.style.display = 'none';
    }
}
