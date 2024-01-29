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
