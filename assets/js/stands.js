let standOne = document.getElementById('standOne');
let standTwo = document.getElementById('standTwo');
let standThree = document.getElementById('standThree');

let cardST1 = document.getElementById('cardST1');
let cardST2 = document.getElementById('cardST2');
let cardST3 = document.getElementById('cardST3');

let buttonClean1 = document.getElementById('buttonClean1');
let buttonClean2 = document.getElementById('buttonClean2');
let buttonClean3 = document.getElementById('buttonClean3');


let wrapperCard = document.getElementById('wrapperCard');

standOne.addEventListener("click", function() {
    cardST1.classList.remove('noneCard')
    wrapperCard.classList.add('noneCard')
});

standTwo.addEventListener("click", function() {
    cardST2.classList.remove('noneCard')
    wrapperCard.classList.add('noneCard')
});

standThree.addEventListener("click", function() {
    cardST3.classList.remove('noneCard')
    wrapperCard.classList.add('noneCard')
});

buttonClean1.addEventListener("click", function() {
    wrapperCard.classList.remove('noneCard')
    cardST1.classList.add('noneCard')
});
buttonClean2.addEventListener("click", function() {
    wrapperCard.classList.remove('noneCard')
    cardST2.classList.add('noneCard')
});
buttonClean3.addEventListener("click", function() {
    wrapperCard.classList.remove('noneCard')
    cardST3.classList.add('noneCard')
});