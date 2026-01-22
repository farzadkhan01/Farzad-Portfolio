class commonFunctionality {
    constructor() {
        this.#init();
    }

    #toggle() {
        const btn = document.getElementById('toggle');
        const bars = document.querySelectorAll('.bar');
        const toggleContent = document.querySelector('.toggle-content');

        // navbar toggle button click
        btn.addEventListener('click', function () {
            bars.forEach(bar => {
                toggling(bar);
            });
            toggling(toggleContent);
        });
    }

    #projectLink() {
        const projectImage = document.querySelectorAll('.project-img');

        projectImage.forEach(imageEl => {
            imageEl.addEventListener('mouseenter', () => {
                const image = imageEl.closest('div');
                image.classList.add('show');
            });
        });

        projectImage.forEach(imageEl => {
            imageEl.addEventListener('mouseleave', () => {
                const image = imageEl.closest('div');
                image.classList.remove('show');
            });
        });


    }

    #navbar() {
        const space = document.querySelector('.spacing');
        const navbar = document.querySelector('.navbar-fixing');
        const largeNavbar = document.querySelector('.large-navbar');

        window.addEventListener('scroll', () => {

            if (window.scrollY > 30) {
                space.classList.add('active');
                navbar.classList.add('active');
                largeNavbar.classList.add('active');
            } else {
                space.classList.remove('active');
                navbar.classList.remove('active');
                largeNavbar.classList.remove('active');
            }

        });
    }

    #init() {
        window.addEventListener('DOMContentLoaded', () => {
            this.#toggle();
            this.#navbar();
            this.#projectLink();
        });
    }
}
const features = new commonFunctionality();