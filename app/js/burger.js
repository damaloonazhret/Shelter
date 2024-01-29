const burgerBtn = document.querySelector('.head-burger-block');
const bgBurger = document.querySelector('.head-right-block');
const burger = document.querySelector('.head-right-block-wrapper');
const body = document.querySelector('body');
burgerBtn.addEventListener('click', function () {
        toggleBurger(bgBurger, burger, body);
        burgerBtn.classList.toggle('rotate');
});
bgBurger.addEventListener('click', function (e) {
    if (bgBurger.classList.contains('active')) {
        const target = e.target;
        if (target.tagName === 'DIV') {
            return;
        }
        if (target.tagName === 'NAV' || 'A') {
            toggleBurger(bgBurger, burger, body);
            burgerBtn.classList.toggle('rotate');
        }
    }
});
const toggleBurger = (...item) => {
    item.forEach(el => {
        el.classList.toggle('active');
    });
};