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
const slides = [
    {
        "name": "Jennifer",
        "img": "../assets/slider/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "1",
    }, {
        "name": "Sophia",
        "img": "../assets/slider/sofia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "2",
    }, {
        "name": "Woody",
        "img": "../assets/slider/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"],
        "id": "3",
    }, {
        "name": "Scarlett",
        "img": "../assets/slider/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "4",
    }, {
        "name": "Katrine",
        "img": "../assets/slider/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "5",
    }, {
        "name": "Timmy",
        "img": "../assets/slider/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"],
        "id": "6",
    }, {
        "name": "Freddie",
        "img": "../assets/slider/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "7",
    }, {
        "name": "Charly",
        "img": "../assets/slider/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"],
        "id": "8",
    }];

const paginationWrapper = document.querySelector('.our-friends__rows');
const btnLeftStart = document.querySelector('#left-start');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnRightEnd = document.querySelector('#right-end');
const btnCount = document.querySelector('#count');

//функция по генерирации рандомного набора чисел от min, до max
function generateArrayRandomNumber(min, max) {
    let totalNumbers = max - min + 1,
        arrayTotalNumbers = [],
        arrayRandomNumbers = [],
        tempRandomNumber;
    while (totalNumbers--) {
        arrayTotalNumbers.push(totalNumbers + min);
    }

    while (arrayTotalNumbers.length) {
        tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
        arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
        arrayTotalNumbers.splice(tempRandomNumber, 1);
    }

    return arrayRandomNumbers;
}

//функция проверки уникальности
function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

//функкция по разбивке массива на подмассивы заданной длинны
function spliceIntoChunks(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}


// let z = 0;
let l = 0;
//промежуточный массив с карточками животных
let globalArrayCard = [];
//массив с уникальными наборами id для 3 карточек на странице
let globalArraySix = [];
//массив с уникальными наборами id для 6 карточек на странице
let globalArrayThree = [];
//массив с уникальными наборами id
let globalArray = [];
//итоговый уникальный массив
let endArray = [];

while (l < 1) {
    //пушим 8 рандомных массивов в массив
    for (let i = 0; i < 6; i++) {
        globalArray.push(generateArrayRandomNumber(0, 7));
    }
    globalArraySix = spliceIntoChunks(globalArray.flat(1), 6);
    globalArrayThree = spliceIntoChunks(globalArray.flat(1), 3);
    //сюда пушим 0, если подмассив массива уникален
    let numOfUniq = [];
    for (let i = 0; i < 8; i++) {
        if (unique(globalArraySix[i]).length == globalArraySix[i].length) {
            numOfUniq.push(0);
        }
    }
    for (let i = 0; i < 16; i++) {
        if (unique(globalArrayThree[i]).length == globalArrayThree[i].length) {
            numOfUniq.push(0);
        }
    }
    let uniquePrevAndNext = [];
    for (let i = 0; i < 15; i++) {
        if (JSON.stringify(globalArrayThree[i]) === JSON.stringify(globalArrayThree[i + 1])) {
            uniquePrevAndNext.push(0);
        }
    }
    for (let i = 0; i < 7; i++) {
        if (JSON.stringify(globalArraySix[i]) === JSON.stringify(globalArraySix[i + 1])) {
            uniquePrevAndNext.push(0);
        }
    }
    // необходимое число для уникальности 24
    if (numOfUniq.length == 24 && uniquePrevAndNext.length == 0) {
        let k = 0;
        while (k < 8) {
            for (let i = 0; i < 6; i++) {
                globalArrayCard.push(slides[globalArraySix[k][i]]);
            }
            k++;
        }
        if (k == 8) {
            l = 1;
            endArray = spliceIntoChunks(globalArrayCard, 8);
            createListWithInnerHTML();
        }
    } else {
        l = 0;
        globalArrayCard = [];
        globalArray = [];
    }
}


let counter = endArray.length;

function mapCards(animal) {
    return `<div id="${animal.id}" class="our-friends__slides-card">
                <img class="our-friends__slides-img" src="${animal.img}" alt="${animal.name}">
                    <p class="our-friends__slides-name">${animal.name}</p>
                <button class="our-friends__slides-btn">Learn more</button>
            </div>`;
}

let q = 0;

function createListWithInnerHTML(k = 0) {
    const rowWrapper = endArray[k].map(mapCards);
    const html = `${rowWrapper.join(' ')}`;
    paginationWrapper.innerHTML = html;
}

btnRight.addEventListener('click', () => {
    q++;
    btnCount.innerHTML = q + 1;
    if (q == (counter - 1)) {
        btnRight.classList.add('inactive');
        btnRightEnd.classList.add('inactive');
    }
    createListWithInnerHTML(q);
    btnLeft.classList.remove('inactive');
    btnLeftStart.classList.remove('inactive');

});
btnLeft.addEventListener('click', () => {
    q--;
    btnCount.innerHTML = q + 1;
    if (q == 0) {
        btnLeft.classList.add('inactive');
        btnLeftStart.classList.add('inactive');
    }
    btnRight.classList.remove('inactive');
    btnRightEnd.classList.remove('inactive');
    createListWithInnerHTML(q);
});
btnRightEnd.addEventListener('click', () => {
    q = counter - 1;
    btnCount.innerHTML = q + 1;
    btnLeft.classList.remove('inactive');
    btnLeftStart.classList.remove('inactive');
    btnRight.classList.add('inactive');
    btnRightEnd.classList.add('inactive');
    createListWithInnerHTML(q);
});
btnLeftStart.addEventListener('click', () => {
    q = 0;
    btnCount.innerHTML = q + 1;
    btnLeft.classList.add('inactive');
    btnLeftStart.classList.add('inactive');
    btnRight.classList.remove('inactive');
    btnRightEnd.classList.remove('inactive');
    createListWithInnerHTML(q);
});

let countValue = 0;



const mediaQueryMobileMin = window.matchMedia('(min-width: 650px)');
const mediaQueryPC = window.matchMedia('(min-width: 1279px)');
function handleTabletChangePC(e) {
    if (e.matches) {
        const arrayFlat = endArray.flat(1);
        const arraySplice = spliceIntoChunks(arrayFlat, 8);
        endArray = arraySplice;
        counter = endArray.length;
        if (btnCount.innerHTML > 6) {
            btnCount.innerHTML = '6';
            countValue = 5;
            q = 5;
            createListWithInnerHTML(countValue);
        }
        if (btnCount.innerHTML == 6) {
            btnRight.classList.add('inactive');
            btnRightEnd.classList.add('inactive');
        }
        if(btnCount.innerHTML < 6){
            countValue = btnCount.innerHTML - 1;
        }
        createListWithInnerHTML(countValue);
    }
}

mediaQueryPC.addListener(handleTabletChangePC);
handleTabletChangePC(mediaQueryPC);

const mediaQueryTablet = window.matchMedia('(max-width: 1278px)');

function handleTabletChangeTablet(e) {
    if (e.matches && mediaQueryMobileMin.matches) {

        const arrayFlat = endArray.flat(1);
        const arraySplice = spliceIntoChunks(arrayFlat, 6);
        endArray = arraySplice;
        counter = endArray.length;
        if (btnCount.innerHTML > 8) {
            btnCount.innerHTML = '8';
            countValue = 7;
            q = 7;
        }
        if(btnCount.innerHTML < 7){
            countValue = btnCount.innerHTML - 1;
        }
        if (btnCount.innerHTML == 6) {
            btnRight.classList.remove('inactive');
            btnRightEnd.classList.remove('inactive');
        }




        createListWithInnerHTML(countValue);
    }
}

mediaQueryTablet.addListener(handleTabletChangeTablet);
handleTabletChangeTablet(mediaQueryTablet);

const mediaQueryMobile = window.matchMedia('(max-width: 650px)');

function handleTabletChangeMobile(e) {
    if (e.matches) {
        const arrayFlat = endArray.flat(1);
        const arraySplice = spliceIntoChunks(arrayFlat, 3);
        endArray = arraySplice;
        counter = endArray.length;

        if (btnCount.innerHTML == 8 || btnCount.innerHTML == 6) {
            btnRight.classList.remove('inactive');
            btnRightEnd.classList.remove('inactive');
        }
        if(btnCount.innerHTML < 9){
            countValue = btnCount.innerHTML - 1;
        }
        createListWithInnerHTML(countValue);
    }
    if (mediaQueryTablet.matches && mediaQueryMobileMin.matches) {
        const arrayFlat = endArray.flat(1);
        const arraySplice = spliceIntoChunks(arrayFlat, 6);
        endArray = arraySplice;
        counter = endArray.length;
        if (btnCount.innerHTML > 8) {
            btnCount.innerHTML = '8';
            countValue = 7;
            q = 7;
        }
        if (btnCount.innerHTML == 8) {
            btnRight.classList.add('inactive');
            btnRightEnd.classList.add('inactive');
        }
        if(btnCount.innerHTML <= 8){
            countValue = btnCount.innerHTML - 1;
        }
        createListWithInnerHTML(countValue);
    }
}

mediaQueryMobile.addListener(handleTabletChangeMobile);
handleTabletChangeMobile(mediaQueryMobile);











const rowsPopup = document.querySelector('.rows-popup');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const bodys = document.querySelector('body');


//функкция по разбивке массива на подмассивы заданной длинны
function spliceIntoChunksPopup(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

const sliders = spliceIntoChunksPopup([...slides], 1);
rowsPopup.addEventListener('click', (e) => {
    let target = e.target;

    if (target.tagName == 'BUTTON' ||
        target.tagName == 'IMG' ||
        target.tagName == 'P' ||
        target.className == 'our-friends__slides-card') {
        let title = target.closest('div');
        popupOpen();
        createListWithInner(sliders, title.id - 1);

    }
});
popup.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList.contains('popup') ||
        target.classList.contains('popup__info-close') ||
        target.tagName == 'SPAN'
    ) {
        popupClose();
    }
});

const popupClose = () => {
    popup.classList.remove('active');
    bodys.classList.remove('active');
};
const popupOpen = () => {
    popup.classList.add('active');
    bodys.classList.add('active');
};


function popupCards(animal) {
    return `
        <img class="popup__img" src="${animal.img}"></img>
        <div class="popup__info">
            <div class="popup__info-top">
                <div class="popup__name">${animal.name}</div>
                <div class="popup__species">${animal.type} - ${animal.breed}</div>
                <div class="popup__text">${animal.description}
                </div>
            </div>
            <div class="popup__info-bottom">
                <ul>
                    <li><span>Age:</span>&nbsp;${animal.age}</li>
                    <li><span>Inoculations:</span>&nbsp;${animal.inoculations}</li>
                    <li><span>Diseases:</span>&nbsp;${animal.diseases}</li>
                    <li><span>Parasites:</span>&nbsp;${animal.parasites}</li>
                </ul>
            </div>
            <div class="popup__info-close"><span></span><span></span></div>
        </div>
`;
};


function createListWithInner(slides, k = 4) {
    const popupCard = slides[k].map(popupCards);
    const htmlPopup = `${popupCard.join(' ')}`;
    popupContainer.innerHTML = htmlPopup;
}


document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        popupClose();
    }
});






console.log('100/100\n' +
    'Реализация burger menu на обеих страницах: +26\n' +
    'при ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка: +2\n' +
    'при нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов: +4\n' +
    'высота адаптивного меню занимает всю высоту экрана: +2\n' +
    'при повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно: +4\n' +
    'бургер-иконка создана при помощи html+css, без использования изображений: +2\n' +
    'ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню: +2\n' +
    'при клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно: +2\n' +
    'расположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая: +2\n' +
    'область, свободная от бургер-меню, затемняется: +2\n' +
    'страница под бургер-меню не прокручивается: +4\n' +
    'Реализация слайдера-карусели на странице Main: +36\n' +
    'при нажатии на стрелки происходит переход к новому блоку элементов: +4\n' +
    'смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется): +4\n' +
    'слайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек: +4\n' +
    'при переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана (3 для 1280px, 2 для 768px, 1 для 320px): +4\n' +
    'каждый новый слайд содержит псевдослучайный набор карточек животных, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:\n' +
    'в текущем блоке слайда карточки с питомцами не повторяются: +4\n' +
    'в следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде: +4\n' +
    'сохраняется только одно предыдущее состояние. Т.е. при последовательном переходе два раза влево, а потом два раза вправо, мы получим набор карточек, отличный от исходного: +4\n' +
    'при каждой перезагрузке страницы формируется новая последовательность карточек: +2\n' +
    'генерация наборов карточек происходит на основе 8 объектов с данными о животных: +2\n' +
    'при изменении ширины экрана (от 1280px до 320px и обратно), слайдер перестраивается и работает без перезагрузки страницы (набор карточек при этом может как изменяться, так и оставаться тем же, скрывая лишнюю или добавляя недостающую, и сохраняя при этом описанные для слайдера требования): +4\n' +
    'Реализация пагинации на странице Pets: +36\n' +
    'при перезагрузке страницы всегда открывается первая страница пагинации: +2\n' +
    'при нажатии кнопок > или < открывается следующая или предыдущая страница пагинации соответственно: +2\n' +
    'при нажатии кнопок >> или << открывается последняя или первая страница пагинации соответственно: +2\n' +
    'при открытии первой страницы кнопки << и < неактивны: +2\n' +
    'при открытии последней страницы кнопки > и >> неактивны: +2\n' +
    'в кружке по центру указан номер текущей страницы. При переключении страниц номер меняется на актуальный: +2\n' +
    'каждая страница пагинации содержит псевдослучайный набор питомцев, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:\n' +
    'при загрузке страницы формируется массив из 48 объектов питомцев. Каждый из 8 питомцев должен встречаться ровно 6 раз: +4\n' +
    'при каждой перезагрузке страницы формируется новый массив со случайной последовательностью: +4\n' +
    'карточки питомцев не должны повторяться на одной странице: +4\n' +
    'при переключении страницы данные меняются (для >1280px меняется порядок карточек, для остальных - меняется набор и порядок карточек): +4\n' +
    'при неизменных размерах области пагинации, в том числе размерах окна браузера, и без перезагрузки страницы, возвращаясь на страницу под определенным номером, контент на ней всегда будет одинаков. Т.е. карточки питомцев будут в том же расположении, что и были до перехода на другие страницы: +2\n' +
    'общее количество страниц при ширине экрана 1280px - 6, при 768px - 8, при 320px - 16 страниц: +2\n' +
    'при изменении ширины экрана (от 1280px до 320px и обратно), пагинация перестраивается и работает без перезагрузки страницы (страница может оставаться той же или переключаться, при этом сформированный массив - общая последовательность карточек - не обновляется, сохраняются все остальные требования к пагинации): +4\n' +
    'Реализация попап на обеих страницах: +12\n' +
    'попап появляется при нажатии на любое место карточки с описанием конкретного животного: +2\n' +
    'часть страницы вне попапа затемняется: +2\n' +
    'при открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным: +2\n' +
    'при нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается, при этом при нажатии на сам попап ничего не происходит: +2\n' +
    'кнопка с крестиком интерактивная: +2\n' +
    'окно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом: +2')