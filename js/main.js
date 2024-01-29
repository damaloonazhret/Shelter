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
        "img": "./assets/slider/jennifer.png",
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
        "img": "./assets/slider/sofia.png",
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
        "img": "./assets/slider/woody.png",
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
        "img": "./assets/slider/scarlett.png",
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
        "img": "./assets/slider/katrine.png",
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
        "img": "./assets/slider/timmy.png",
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
        "img": "./assets/slider/freddie.png",
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
        "img": "./assets/slider/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"],
        "id": "8",
    }];

const animalPlaceholder = document.querySelector('.our-friends__slides-wrapper');
const BTN_LEFT = document.querySelector('#btn-left');
const BTN_RIGHT = document.querySelector('#btn-right');
const carousel = document.querySelector('.our-friends__slides-wrapper');
//счетчик количества карточек на текущем разрешении
let k = 0;
//заготовка под карточку животного
const mapCards = (animal) => {
    return `<div id="${animal.id}" class="our-friends__slides-card">
                <img class="our-friends__slides-img" src="${animal.img}" alt="${animal.name}">
                    <p class="our-friends__slides-name">${animal.name}</p>
                <button class="our-friends__slides-btn">Learn more</button>
            </div>`;
};
//функция по перемешиванию массива чисел
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
//функкция по разбивке массива на подмассивы заданной длинны
function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}
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
//будущий набор уникальных карточек
let arr1 = [];
let arr2 = [];
let arr3 = [];
// цикл для проверки повторения карточек животных
let l = 0;
let countPlus = 0;
// функиция по динамической вставке html кода
function createListWithInnerHTML() {
    const rowsLeft = arr1.map(mapCards);
    const rowInit = arr2.map(mapCards);
    const rowsRight = arr3.map(mapCards);
    const html = `<div id="item-left" class="our-friends__slides-item" >${rowsLeft.join(' ')}</div>
	              <div id="item-active" class="our-friends__slides-item our-friends__rows" >${rowInit.join(' ')}</div>
                  <div id="item-right" class="our-friends__slides-item" >${rowsRight.join(' ')}</div>`;
    animalPlaceholder.innerHTML = html;

}
//функция проверки и генерации рандомных и не совпадающих карточек
function sliderDesktop() {
    while (l < 1) {
        //генерируем рандомные 8 чисел
        const arrInit = generateArrayRandomNumber(0, 7);
        // добавляем рандомное 9е число
        arrInit.push(Math.floor(Math.random() * 8));
        //перемешиваем это все дело
        shuffle(arrInit);
        //разбиваем массив на 3 подмассива по 3 элемента
        const chunks = sliceIntoChunks(arrInit, 3);
        shuffle(chunks[0]);
        //сортируем каждый подмассив в порядке возрастания
        const chunks1 = [...chunks[0]].sort();
        const chunks2 = [...chunks[1]].sort();
        const chunks3 = [...chunks[2]].sort();

        if (
            chunks2[0] !== chunks1[0] &&
            chunks2[0] !== chunks1[1] &&
            chunks2[0] !== chunks1[2] &&
            chunks2[1] !== chunks1[0] &&
            chunks2[1] !== chunks1[1] &&
            chunks2[1] !== chunks1[2] &&
            chunks2[2] !== chunks1[0] &&
            chunks2[2] !== chunks1[1] &&
            chunks2[2] !== chunks1[2] &&
            chunks2[0] !== chunks3[0] &&
            chunks2[0] !== chunks3[1] &&
            chunks2[0] !== chunks3[2] &&
            chunks2[1] !== chunks3[0] &&
            chunks2[1] !== chunks3[1] &&
            chunks2[1] !== chunks3[2] &&
            chunks2[2] !== chunks3[0] &&
            chunks2[2] !== chunks3[1] &&
            chunks2[2] !== chunks3[2] &&
            chunks2[0] !== chunks2[1] &&
            chunks2[1] !== chunks2[2] &&
            chunks1[0] !== chunks1[1] &&
            chunks1[1] !== chunks1[2] &&
            chunks3[0] !== chunks3[1] &&
            chunks3[1] !== chunks3[2]
        ) {
            for (let i = 0; i < 3; i++) {
                arr1.push(slides[chunks[0][i]]);
            }
            for (let i = 0; i < 3; i++) {
                arr2.push(slides[chunks[1][i]]);
            }
            for (let i = 0; i < 3; i++) {
                arr3.push(slides[chunks[2][i]]);
            }
            l = 1;
            createListWithInnerHTML();
        } else {
            l = 0;
        }
    }
};
//медиа запрос для изменения набора карточек
const mediaQueryMin = window.matchMedia('(min-width: 1170px)');
function handleTabletChangeMin(e) {
    if (e.matches) {
        arr1 = [];
        arr2 = [];
        arr3 = [];
        l = 0;
        sliderDesktop();
        k = 3;
    }
}
mediaQueryMin.addListener(handleTabletChangeMin);
handleTabletChangeMin(mediaQueryMin);







//функция проверки и генерации рандомных и не совпадающих карточек
function sliderTablet() {
    while (l < 1) {
        //генерируем рандомные 8 чисел
        const arrInit = generateArrayRandomNumber(0, 7);
        //перемешиваем это все дело
        shuffle(arrInit);
        //разбиваем массив на 3 подмассива по 2 элемента
        const chunks = sliceIntoChunks(arrInit, 2);
        //сортируем каждый подмассив в порядке возрастания
        const chunks1 = [...chunks[0]].sort();
        const chunks2 = [...chunks[1]].sort();
        const chunks3 = [...chunks[2]].sort();
        if (
            chunks2[0] !== chunks1[0] &&
            chunks2[0] !== chunks1[1] &&
            chunks2[1] !== chunks1[0] &&
            chunks2[1] !== chunks1[1] &&
            chunks2[0] !== chunks3[0] &&
            chunks2[0] !== chunks3[1] &&
            chunks2[1] !== chunks3[0] &&
            chunks2[1] !== chunks3[1] &&
            chunks2[0] !== chunks2[1] &&
            chunks1[0] !== chunks1[1] &&
            chunks3[0] !== chunks3[1]
        ) {
            for (let i = 0; i < 2; i++) {
                arr1.push(slides[chunks[0][i]]);
            }
            for (let i = 0; i < 2; i++) {
                arr2.push(slides[chunks[1][i]]);
            }
            for (let i = 0; i < 2; i++) {
                arr3.push(slides[chunks[2][i]]);
            }
            l = 1;
            createListWithInnerHTML();
        } else {
            l = 0;
        }
    }
};
//медиа запрос для изменения набора карточек
const mediaQueryMax = window.matchMedia('(max-width: 1170px)');
const mediaQueryMaxT = window.matchMedia('(min-width: 650px)');

function handleTabletChangeMax(e) {
    if (e.matches) {
        arr1 = [];
        arr2 = [];
        arr3 = [];
        l = 0;
        sliderTablet();
        k = 2;
    }
}
mediaQueryMax.addListener(handleTabletChangeMax);
handleTabletChangeMax(mediaQueryMax);


//функция проверки и генерации рандомных и не совпадающих карточек
function sliderMobile() {
    while (l < 1) {
        //генерируем рандомные 8 чисел
        const arrInit = generateArrayRandomNumber(0, 7);
        //перемешиваем это все дело
        shuffle(arrInit);
        //разбиваем массив на 3 подмассива по 2 элемента
        const chunks = sliceIntoChunks(arrInit, 1);
        //сортируем каждый подмассив в порядке возрастания
        const chunks1 = [...chunks[0]].sort();
        const chunks2 = [...chunks[1]].sort();
        const chunks3 = [...chunks[2]].sort();
        if (
            chunks2[0] !== chunks1[0] &&
            chunks2[0] !== chunks3[0]
        ) {
            for (let i = 0; i < 1; i++) {
                arr1.push(slides[chunks[0][i]]);
            }
            for (let i = 0; i < 1; i++) {
                arr2.push(slides[chunks[1][i]]);
            }
            for (let i = 0; i < 1; i++) {
                arr3.push(slides[chunks[2][i]]);
            }
            l = 1;
            createListWithInnerHTML();
        } else {
            l = 0;
        }
    }
};
//медиа запрос для изменения набора карточек
const mediaQueryMobile = window.matchMedia('(max-width: 650px)');
const mediaQueryMobileT = window.matchMedia('(min-width: 650px)');
const mediaQueryMobileTablet = window.matchMedia('(max-width: 1170px)');
function handleChangeMobile(e) {
    if (e.matches) {
        arr1 = [];
        arr2 = [];
        arr3 = [];
        l = 0;
        sliderMobile();
        k = 1;
    } if (mediaQueryMobileT.matches && mediaQueryMobileTablet.matches){
        arr1 = [];
        arr2 = [];
        arr3 = [];
        l = 0;
        sliderTablet();
        k = 2;
    }
}
mediaQueryMobile.addListener(handleChangeMobile);
handleChangeMobile(mediaQueryMobile);
//работа с анимациями
const moveLeft = () => {
    carousel.classList.add('transition-left');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
};
const moveRight = () => {
    carousel.classList.add('transition-right');
    BTN_RIGHT.removeEventListener('click', moveRight);
    BTN_LEFT.removeEventListener('click', moveLeft);
};
BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);
carousel.addEventListener('animationend', function (animationEvent) {
        // for slider to left
        // находим активный элемент
        const leftItems = document.querySelector('#item-left').innerHTML;
        //создаем его версию в виде html кода
        const uniqueActiveItem = new DOMParser()
            .parseFromString(leftItems, "text/html")
            .getElementsByTagName("DIV");
        // получаем порядковые номера его эллементов, соответствующих исходному массиву
        let uniqueLeftItems = [];
        for (let i = 0; i < k; i++) {
            uniqueLeftItems.push(Number(uniqueActiveItem[i].id) - 1);
        }
        //создаем рандомнаый массив чисел и убираем из него уникальные элементы активного item
        //после чего перемешиваем его
        const arrSh = generateArrayRandomNumber(0, 7);
        const s = new Set(uniqueLeftItems);
        const arrShUnique = arrSh.filter(e => !s.has(e));
        shuffle(arrShUnique);
        //создаем массив уникальных новых карточек
        const arrayWithNewItem = [];
        const card = slides.map(mapCards);
        for (let i = 0; i < k; i++) {
            arrayWithNewItem.push(new DOMParser()
                .parseFromString(card, "text/html")
                .getElementsByTagName("DIV")[arrShUnique[i]]);
        }
        // for slider to right
        const rightItems = document.querySelector('#item-right').innerHTML;
        const uniqueActiveItemRight = new DOMParser()
            .parseFromString(rightItems, "text/html")
            .getElementsByTagName("DIV");
        let uniqueRightItems = [];
        for (let i = 0; i < k; i++) {
            uniqueRightItems.push(Number(uniqueActiveItemRight[i].id) - 1);
        }
        const arrShRight = generateArrayRandomNumber(0, 7);
        const sRight = new Set(uniqueRightItems);
        const arrShUniqueRight = arrShRight.filter(e => !sRight.has(e));
        shuffle(arrShUniqueRight);
        const arrayWithNewItemRight = [];
        const cardRight = slides.map(mapCards);
        for (let i = 0; i < k; i++) {
            arrayWithNewItemRight.push(new DOMParser()
                .parseFromString(cardRight, "text/html")
                .getElementsByTagName("DIV")[arrShUniqueRight[i]]);
        }
        // проверка направления слайдера... влево
        if (animationEvent.animationName === "move-left" ||
            animationEvent.animationName === "move-left1170" ||
            animationEvent.animationName === "move-left650") {
            carousel.classList.remove('transition-left');
            const leftItems = document.querySelector('#item-left').innerHTML;
            const activeItems = document.querySelector('#item-active').innerHTML;
            document.querySelector('#item-active').innerHTML = leftItems;
            document.querySelector('#item-right').innerHTML = activeItems;
            document.querySelector('#item-left').innerHTML = "";
            for (let i = 0; i < k; i++) {
                document.querySelector('#item-left').appendChild(arrayWithNewItem[i]);
            }
        }
        // вправо
        else {
            carousel.classList.remove('transition-right');
            const rightItems = document.querySelector('#item-right').innerHTML;
            const activeItems = document.querySelector('#item-active').innerHTML;
            document.querySelector('#item-active').innerHTML = rightItems;
            document.querySelector('#item-left').innerHTML = activeItems;
            document.querySelector('#item-right').innerHTML = "";
            for (let i = 0; i < k; i++) {
                document.querySelector('#item-right').appendChild(arrayWithNewItemRight[i]);
            }
        }
        carousel.classList.remove('transition-right');
        BTN_LEFT.addEventListener('click', moveLeft);
        BTN_RIGHT.addEventListener('click', moveRight);
    }
);

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
    'окно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом: +2');