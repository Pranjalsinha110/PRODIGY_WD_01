
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('menu-toggle');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(to right, #ff0000, #ff00ff)';
        } else {
            navbar.style.background = 'linear-gradient(to right, #0000ff, #00ffff)';
        }
    });

    const menuItems = document.querySelectorAll('nav ul li a');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.color = '#ff0000';
        });

        item.addEventListener('mouseout', function() {
            item.style.color = 'white';
        });
    });

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});
