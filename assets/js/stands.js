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
    photoSlid1.src = 'assets/imges/st1/01_Dozor_01.png';
    photoSlid2.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid3.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid4.src = 'assets/imges/st2/02_Kluch_01.png';
    photoSlid5.src = 'assets/imges/st2/02_Kluch_01.png';

    nameStand.innerHTML = 'УТСВК "<span>Д</span>озор"';
    aboutStand.innerText = 'В основе конструкции лежит листовой металл и алюминиевый профиль.  Такое решение позволяет обеспечить высокую жёсткость и организовать полноценный кабель-менеджмент, скрыв лишние провода. Тем самым минимизируем случайные повреждения при эксплуатации, как зачастую происходит у сторонних производителей. Подчеркнуть внешний вид конструкции и ее индивидуальность позволяет фирменный логотип с подсветкой. В рамках возможностей стенда можно выполнять следующие мероприятия.'+
                        '\r\n' + '\r\n' +    '1 Настройка видеорегистратора по сетевым параметрам'+
                        '\r\n' +    '2 Синхронизация времени по протоколу NTP'+
                        '\r\n' +    '3 Работа с облаками вендора с дальнейшим удалённым администрированием'+
                        '\r\n' +    '4 Учетные данные и разделение прав доступа к устройству (чтение, изменение, запись)'+
                        '\r\n' +    '5 Работа с параметрами IP камер (разрешение, битрейт, кадры, кодеки и прочее)'+
                        '\r\n' +    '6 Анализ сетевого трафика исходящего от видеорегистратора с целью изучения протокола RTSP с помощью программы Wireshark'+
                        '\r\n' +    '7 Работа с исходными файлами записи камер'+
                        '\r\n' +    '8 Работа с резервными копиями данных'+
                        '\r\n' +    '9 Интеграция с системами мониторинга событий'+
                        '\r\n' +    '10 Изучение логирования событий на предмет ошибок в системе'+
                        '\r\n' +    '11 Обнаружение объектов (лиц, автомобилей, движения и прочее)'+
                        '\r\n' + '\r\n' +   'По мимо перечисленных функций, изучение и использование возможностей данного стенда ограничена лишь вашей фантазией. Можно изучать как каждое отдельное устройство по глубокой специфике, так и комплексно с целью понимаю логики работы полноценных систем видеонаблюдении на реальном производстве.';

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