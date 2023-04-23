let navbar = document.getElementById('navbar');
let hamburger_menu = document.getElementById('hamburger_menu');

hamburger_menu.addEventListener('click', function () {
    if(navbar.style.display === 'none') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
});

document.onscroll = function () {
    navbar.style.display = 'none';
}
