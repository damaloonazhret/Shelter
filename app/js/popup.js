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




