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






