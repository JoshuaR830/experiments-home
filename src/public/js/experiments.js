window.addEventListener('load', function() {
    var buttons = document.querySelectorAll('.button');

    var menu = document.getElementById("menu");
    menu.addEventListener('click', function(event) {
        console.log("menu clicked");
        
        var foreground = document.getElementById('foreground');
        foreground.classList.add('animated-scroll');
        var container = document.querySelector('.card-container');
        container.style.display = 'none';
        // root = document.documentElement;
        // root.style.setProperty('--height', 'calc(100% - 56px)');
    });

    buttons.forEach(element => {
        console.log(element);
        element.addEventListener('mouseenter', function() {
            element.querySelector('.image-container').classList.add('button-enter');
            element.querySelector('.image-container').classList.remove('button-leave');
        });

        element.addEventListener('mouseleave', function() {
            element.querySelector('.image-container').classList.remove('button-enter');
            element.querySelector('.image-container').classList.add('button-leave');
        });
    });
});