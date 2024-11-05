const toggleBtn = document.querySelector("#toggle-theme");
const darknessSlider = document.querySelector("#darknessSlider");



document.addEventListener("DOMContentLoaded", () => {
    init()
})

  function init() {
    if(localStorage.getItem('theme')) {
      document.documentElement.setAttribute("theme", "dark");
    }
        else {
            document.documentElement.removeAttribute("theme");
        }
}

toggleBtn.addEventListener("click", function() {
    if(document.documentElement.hasAttribute("theme")){
        document.documentElement.removeAttribute("theme");
        toggleBtn.value = "темная"
        localStorage.removeItem('theme');
    }
        else{
            document.documentElement.setAttribute("theme", "dark");
            toggleBtn.value = "светлая"
            localStorage.setItem('theme', 1);
        }
});
       



(() => {
    const activeBtn = document.getElementById('activePopup')
    const containerPopup = document.getElementById('containerPopup')

    function toggle() { 
        containerPopup.classList.toggle('container__active_popup'); 
    }
    function remove() { 
        containerPopup.classList.remove('container__active_popup'); 
    }

    document.addEventListener('click', e => {
        const target = e.target;
        target === activeBtn ? toggle() : target !== containerPopup ? remove() : false;
    });
})();


const myObject = {
    "catalogo": [
    {
        "id": 0, 
        "name":  "<span>C</span>етевая инфраструктура", 
        "namebtn": "Cетевая инфраструктура",
        "description": [
            "<p><span>-</span> Планирование ЛВС (слаботочные системы) (не включая кабель-каналов и протяжки)</p>" +
            "<p><span>-</span> Подбор и настройка коммутаторов (L2, L2+, L3)" +
            "<p><span>-</span> Маршрутизаторы</p>" +
            "<p><span>-</span> Беспроводные технологии (Wi-Fi, Роуминг)</p>"
        ]
    },
    {
        "id": 1, 
        "name": "<span>I</span>P-телефония", 
        "namebtn": "IP-телефония", 
        "description": [
            "<p><span>-</span> Подбор и настройка IP телефонии</p>" +
            "<p><span>-</span> Физическая АТС</p>" +
            "<p><span>-</span> Облачная АТС (Ростелеком и прочие)</p>" +
            "<p><span>-</span> Виртуальная АТС (на базе Asterisk и прочие)</p>" +
            "<p><span>-</span> Подбор и настройка телефонных аппаратов</p>"
        ]
    },
    {
        "id": 2, 
        "name": "<span>В</span>ычислительные комплексы", 
        "namebtn": "Вычислительные комплексы", 
        "description": [
            "<p><span>-</span> Подборка ПК/Ноутбуков под ключ</p>" +
            "<p><span>-</span> Подборка серверов и серверных платформ под ключ</p>" +
            "<p><span>-</span> Сборка вычислительной техники</p>" +
            "<p><span>-</span> Тестирование вычислительной техники</p>"
        ]
    },
    {
        "id": 3, 
        "name": "<span>С</span>истемы хранения данных", 
        "namebtn": "Системы хранения данных",
        "description": [
            "<p><span>-</span> Подбор СХД под ключ</p>" +
            "<p><span>-</span> Сборка СХД под ключ</p>" +
            "<p><span>-</span> Настройка прав доступа и файловой системы</p>" +
            "<p><span>-</span> Установка FREENAS/TRUNAS на оборудование</p>"
        ]
    },
    {
        "id": 4, 
        "name": "<span>П</span>латформы Виртуализации", 
        "namebtn": "Платформы Виртуализации",
        "description": [
            "<p><span>-</span> Установка и настройка Hyper-V</p>" +
            "<p><span>-</span> Установка и настройка XenServer</p>" +
            "<p><span>-</span> Установка и настройка ESXI и VmWare</p>" +
            "<p><span>-</span> Установка и настройка KVM (Linux)</p>"
        ]
    },
    {
        "id": 5, 
        "name": "<span>Р</span>езервирование (бэкапы)",
        "namebtn": "Резервирование (бэкапы)",
        "description": [
            "<p><span>-</span> Резервирование по расписанию стандартными средствами</p>" +
            "<p><span>-</span> Резервирование БД</p>" +
            "<p><span>-</span> Резервирование ОС</p>" +
            "<p><span>-</span> Резервирование хранилищ и файлообменников</p>" +
            "<p><span>-</span> Резервирование критически важной инфраструктуры</p>"
        ]
    },
    {
        "id": 6, 
        "name": "<span>М</span>ониторинг",
        "namebtn": "Мониторинг",
        "description": [
            "<p><span>-</span> Мониторинг для централизованного отслеживания инцидентов в вашей фирме или на отдельных системах</p>" + 
            "<p><span>-</span> PRTG</p>" + 
            "<p><span>-</span> Zabbix</p>" + 
            "<p><span>-</span> Grafana</p>" + 
            "<p><span>-</span> Прочие (отдельно написать)</p>" + 
            "<p><span>-</span> Уведомления на вашу почту или на прямую в соц.сети</p>"
        ]
    },
    {
        "id": 7, 
        "name": "<span>И</span>нформационная безопасность", 
        "namebtn": "Информационная безопасность", 
        "description": [
            "<p><span>-</span> Разработка локальных актов по информационной безопасности</p>" +
            "<p><span>-</span> Настройка пограничного оборудования от внешних атак (DOS, DDOS, DNS Amplification, SYN-flood, http-flood, brute-force и прочих)</p>" +
            "<p><span>-</span> Консультации в области планирования и расширения информационной безопасности</p>" +
            "<p><span>-</span> Инструктаж для персонала (обсуждается заранее)</p>" +
            "<p><span>-</span> Построение защищённых линий связи для обеспечения целостности и конфиденциальности передаваемых данных (к примеру объединение офис между городами или подключение удалённых сотрудников к ресурсам компании)</p>" +
            "<p><span>-</span> Работа с КИИ (критическая информационная инфраструктура)</p>"
        ]
    },
    {
        "id": 8, 
        "name": "<span>К</span>омпьютерно-техническая экспертиза", 
        "namebtn": "Компьютерно-техническая экспертиза", 
        "description": [
            "<p><span>-</span> Участие эксперта в независимом расследовании по различным спорам и инцидентам в IT тематике</p>" +
            "<p><span>-</span> Подготовка независимого экспертного заключения</p>" +
            "<p><span>-</span> Консультации по различным вопросам в рамках расследования</p>"
        ]
    },
    {
        "id": 9, 
        "name": "<span>О</span>блачные сервисы",
        "namebtn": "Облачные сервисы", 
        "description": [
            "<p><span>-</span> Использование ваших ресурсов и создание тестового полигона для тестирования и прочих нужд</p>" +
            "<p><span>-</span> Использование облачной инфраструктуры для вашего бизнеса в замен физических серверам</p>" +
            "<p><span>-</span> VK CLOUD</p>" +
            "<p><span>-</span> YANDEX CLOUD</p>" +
            "<p><span>-</span> Прочие облачные провайдеры/хостинги)</p>"
        ]
    },
    {
        "id": 10,
        "name": "<span>В</span>идеонаблюдение", 
        "namebtn": "Видеонаблюдение",
        "description": [
            "<p><span>-</span> Подбор и настройка камер видеонаблюдения (IP камеры)</p>" +
            "<p><span>-</span> Подбор и настройка видеорегистраторов (+ система хранения)</p>" +
            "<p><span>-</span> Настройка удалённого доступа для просмотра (облачный сервис/ проброс портов)</p>" +
            "<p><span>-</span> Внутреннее и наружное расположение</p>" +
            "<p><span>-</span> Настройка детекторов движения, ночной режим и т.д.</p>"
        ]
    }
    ]
  };
  
  const name = document.getElementById('name')
  const description = document.getElementById('description')
  const container = document.getElementById('btnCont');
  
  myObject.catalogo.forEach((elem, index) => {
    const btn = document.createElement('button');
    btn.innerText = elem.namebtn;


    btn.addEventListener('click', function() {
        name.innerHTML = elem.name; 
        description.innerHTML = elem.description 
    })
    container.appendChild(btn);
  })


  