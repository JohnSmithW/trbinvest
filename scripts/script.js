function faqMenu() {
    let links = document.querySelectorAll('.faq__nav-js');
    if (links) {
        links.forEach(link => link.addEventListener('click', function (e) {
            e.preventDefault();
            let nameBlock = this.dataset.block;
            let block = document.querySelector('.faq__body[data-block="' + nameBlock + '"]');
            let blocks = document.querySelectorAll('.faq__body');
            blocks.forEach(blocks => blocks.classList.remove('faq__body_open'));
            links.forEach(links => links.classList.remove('faq__nav-link_active'));
            block.classList.add('faq__body_open');
            this.classList.add('faq__nav-link_active');
        }))
    }
}
faqMenu()

function answerMenu() {
    let questions = document.querySelectorAll('.faq__list-js');

    if (questions) {
        questions.forEach(elem => elem.addEventListener('click', function () {
            let answers = document.querySelectorAll('.faq__answer');
            let next = this.nextElementSibling;

            if (next.classList.contains('faq__answer_open')) {
                answers.forEach(answer => answer.classList.remove('faq__answer_open'));
                next.classList.remove('faq__answer_open');
            } else {
                answers.forEach(answer => answer.classList.remove('faq__answer_open'));
                next.classList.add('faq__answer_open');
            }
        }))
    }
}
answerMenu()


function mainMenu() {
    let menu = document.querySelectorAll('.nav-js');

    if (menu) {
        menu.forEach(menu => menu.addEventListener('click', function (e) {
            e.preventDefault();

            let block = this.href.replace(/.*#/, '');
            block = document.getElementById(block);
            if (block) {
                block.scrollIntoView({block: "center", behavior: "smooth"})
            }
        }))
    }
}
mainMenu()

function mobileMenu() {
    let button = document.querySelector('.mobile-button');
    let close = document.querySelector('.header__nav-close');
    let menu = document.querySelector('.header__nav');

    if (button) {
        button.addEventListener('click', function () {
            menu.classList.add('header__nav_open')
        })
    }

    if (close) {
        close.addEventListener('click', function () {
            menu.classList.remove('header__nav_open')
        })
    }

    if (menu) {
        document.body.addEventListener('click', function (e) {
            if (e.target !== menu && !e.target.closest('.main-header__nav') && e.target !== button) {
                menu.classList.remove('header__nav_open')
            }
        })
    }
}
mobileMenu()

function accountMenu() {
    let button = document.querySelector('.header__account-btn');
    if (button) {
        let close = document.querySelector('.header__account-close');
        close.addEventListener('click', function () {
            let menu = this.closest('.header__account-menu')
            menu.classList.remove('header__account-menu_open')
        })

        button.addEventListener('click', function (e) {
            e.preventDefault();
            let menu = this.nextElementSibling
                if (menu.classList.contains('header__account-menu_open')) {
                    menu.classList.remove('header__account-menu_open')
                } else {
                    menu.classList.add('header__account-menu_open')
                }
        })
    }
}
accountMenu()