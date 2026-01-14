class commonFunctionality {
    constructor() {
        this.#init();
    }

    #toggle() {
        const btn = document.getElementById('toggle');
        const bars = document.querySelectorAll('.bar');
        const toggleContent = document.querySelector('.toggle-content');
        const subDropdownIcon = document.querySelector('.dropdown-icon-small');
        const subdropdownContent = document.querySelector('.subdropdown-content');

        const toggling = eventOn => {
            eventOn.classList.toggle('active');
        };

        // navbar toggle button click
        btn.addEventListener('click', function () {
            bars.forEach(bar => {
                toggling(bar);
            });
            toggling(toggleContent);
        });

        // sub toggle contect of services button click
        subDropdownIcon.addEventListener('click', () => {
            toggling(subDropdownIcon);
            toggling(subdropdownContent);
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
        });
    }
}
const features = new commonFunctionality();