window.addEventListener('DOMContentLoaded', event => {
    /**
    *General Animations.
    */
    var navbarAnimationToggler = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            //Check if navbar is here
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    //Check Y position and shrink or not
    navbarAnimationToggler();

    //Check Y position and shrink or not when user scroll
    document.addEventListener('scroll', navbarAnimationToggler);

    // Smaller Navigation bar
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Make the picture roll
    let image = document.getElementById("MainImage");

    window.onscroll = function () {
        if (image != null) {
            scrollRotate();
        }
    };

    function scrollRotate() {
        image.style.transform = "rotate(" + window.pageYOffset / 15 + "deg)";
    }
});






