document.body.classList.add('js-loading');

window.addEventListener("load", showPage, false);

function showPage() {
  document.body.classList.remove('js-loading');
}


let standOne = document.getElementById('standOne');
let standTwo = document.getElementById('standTwo');
let standThree = document.getElementById('standThree');

let cardST1 = document.getElementById('cardST1');

let photoSlid1 = document.getElementById('photoSlid1');
let photoSlid2 = document.getElementById('photoSlid2');
let photoSlid3 = document.getElementById('photoSlid3');
let photoSlid4 = document.getElementById('photoSlid4');
let photoSlid5 = document.getElementById('photoSlid5');

let nameStand = document.getElementById('nameStand');
let aboutStand = document.getElementById('aboutStand');

let buttonClean1 = document.getElementById('buttonClean1');


let wrapperCard = document.getElementById('wrapperCard');

function opnen() {
    cardST1.classList.remove('noneCard')
    wrapperCard.classList.add('noneCard')
}

standOne.addEventListener("click", function() {
    opnen()
    photoSlid1.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid2.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid3.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid4.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid5.src = 'assets/imges/st2/02_Kluch_01.png';

    nameStand.innerHTML = '<span>Д</span>озор';
    aboutStand.innerText = 'Это дозор';

});

standTwo.addEventListener("click", function() {
    opnen()
    photoSlid1.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid2.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid3.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid4.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid5.src = 'assets/imges/st2/02_Kluch_01.png';

    nameStand.innerHTML = '<span>П</span>арус';
    aboutStand.innerText = 'Это парус';
});

standThree.addEventListener("click", function() {
    opnen()
    photoSlid1.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid2.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid3.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid4.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid5.src = 'assets/imges/st2/02_Kluch_01.png';

    nameStand.innerHTML = '<span>К</span>люч';
    aboutStand.innerText = 'Это ключ';
});


buttonClean1.addEventListener("click", function() {
    wrapperCard.classList.remove('noneCard')
    cardST1.classList.add('noneCard')
});