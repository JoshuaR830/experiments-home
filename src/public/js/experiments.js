window.addEventListener('load', function() {
    var buttons = document.querySelectorAll('.button');
    var foreground = document.getElementById('foreground');
    var menuReveal = document.getElementById("menu-reveal");
    var menuHide = document.getElementById('menu-hide');
    var container = document.querySelector('.card-container');
    var reveal = document.querySelector('.reveal-foreground');



    menuReveal.addEventListener('click', function(event) {
        console.log("menu clicked");
        menuRevealed();
        foreground.classList.add('animated-scroll-forwards');
        foreground.classList.remove('animated-scroll-backwards');
        container.style.display = 'none';
        reveal.style.display = 'inline-block';
    });

    var menuHide = document.getElementById('menu-hide')
    menuHide.addEventListener('click', function(event) {
        displayForeground();
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

    var revealForeground = document.querySelector('.reveal-foreground'); 
    revealForeground.addEventListener('click', function() {
        displayForeground();
    });

    function displayForeground() {
        revealForeground.style.display = 'none';
        foreground.classList.add('animated-scroll-backwards');
        foreground.classList.remove('animated-scroll-forwards');
        container.style.display = 'inline-block';
        menuHidden();
    }

    function menuRevealed() {
        menuHide.style.display = 'inline-block';
        menuReveal.style.display = 'none';
    }

    function menuHidden() {
        menuHide.style.display = 'none';
        menuReveal.style.display = 'inline-block';
    }

});