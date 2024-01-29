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

