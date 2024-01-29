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










