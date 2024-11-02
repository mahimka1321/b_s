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
        "name": "Сетевая инфраструктура", 
        "description": [
            "- Планирование ЛВС (слаботочные системы) (не включая кабель-каналов и протяжки)" + "\n" + 
            "- Подбор и настройка коммутаторов (L2, L2+, L3)" + "\n" + 
            "- Маршрутизаторы" + "\n" +
            "- Беспроводные технологии (Wi-Fi, Роуминг)"
        ]
    },
    {
        "id": 1, 
        "name": "IP-телефония", 
        "description": [
            "- Подбор и настройка IP телефонии" + "\n" + 
            "- Физическая АТС" + "\n" + 
            "- Облачная АТС (Ростелеком и прочие)" + "\n" +
            "- Виртуальная АТС (на базе Asterisk и прочие)" + "\n" +
            "- Подбор и настройка телефонных аппаратов"
        ]
    },
    {
        "id": 2, 
        "name": "Вычислительные комплексы", 
        "description": [
            "- Подборка ПК/Ноутбуков под ключ" + "\n" + 
            "- Подборка серверов и серверных платформ под ключ" + "\n" + 
            "- Сборка вычислительной техники" + "\n" +
            "- Тестирование вычислительной техники"
        ]
    },
    {
        "id": 3, 
        "name": "Системы хранения данных", 
        "description": [
            "- Подбор СХД под ключ" + "\n" + 
            "- Сборка СХД под ключ" + "\n" + 
            "- Настройка прав доступа и файловой системы" + "\n" +
            "- Установка FREENAS/TRUNAS на оборудование"
        ]
    },
    {
        "id": 4, 
        "name": "Платформы Виртуализации", 
        "description": [
            "- Установка и настройка Hyper-V" + "\n" + 
            "- Установка и настройка XenServer" + "\n" + 
            "- Установка и настройка ESXI и VmWare" + "\n" +
            "- Установка и настройка KVM (Linux)"
        ]
    },
    {
        "id": 5, 
        "name": "Резервирование (бэкапы)", 
        "description": [
            "- Резервирование по расписанию стандартными средствами" + "\n" + 
            "- Резервирование БД" + "\n" + 
            "- Резервирование ОС" + "\n" +
            "- Резервирование хранилищ и файлообменников" + "\n" +
            "- Резервирование критически важной инфраструктуры"
        ]
    },
    {
        "id": 6, 
        "name": "Мониторинг", 
        "description": [
            "- Мониторинг для централизованного отслеживания инцидентов в вашей фирме или на отдельных системах " + "\n" + 
            "- PRTG" + "\n" + 
            "- Zabbix" + "\n" +
            "- Grafana" + "\n" +
            "- Прочие (отдельно написать)" + "\n" +
            "- Уведомления на вашу почту или на прямую в соц.сети"
        ]
    },
    {
        "id": 7, 
        "name": "Информационная безопасность", 
        "description": [
            "- Разработка локальных актов по информационной безопасности" + "\n" + 
            "- Настройка пограничного оборудования от внешних атак (DOS, DDOS, DNS Amplification, SYN-flood, http-flood, brute-force и прочих)" + "\n" + 
            "- Консультации в области планирования и расширения информационной безопасности" + "\n" +
            "- Инструктаж для персонала (обсуждается заранее)" + "\n" +
            "- Построение защищённых линий связи для обеспечения целостности и конфиденциальности передаваемых данных (к примеру объединение офис между городами или подключение удалённых сотрудников к ресурсам компании)" + "\n" +
            "- Работа с КИИ (критическая информационная инфраструктура)"
        ]
    },
    {
        "id": 8, 
        "name": "Компьютерно-техническая экспертиза", 
        "description": [
            "- Участие эксперта в независимом расследовании по различным спорам и инцидентам в IT тематике" + "\n" + 
            "- Подготовка независимого экспертного заключения" + "\n" + 
            "- Консультации по различным вопросам в рамках расследования"
        ]
    },
    {
        "id": 9, 
        "name": "Облачные сервисы", 
        "description": [
            "- Использование ваших ресурсов и создание тестового полигона для тестирования и прочих нужд" + "\n" + 
            "- Использование облачной инфраструктуры для вашего бизнеса в замен физических серверам" + "\n" + 
            "- VK CLOUD" + "\n" +
            "- YANDEX CLOUD" + "\n" +
            "- Прочие облачные провайдеры/хостинги)"
        ]
    },
    {
        "id": 10,
        "name": "Видеонаблюдение", 
        "description": [
            "- Подбор и настройка камер видеонаблюдения (IP камеры)" + "\n" + 
            "- Подбор и настройка видеорегистраторов (+ система хранения)" + "\n" + 
            "- Настройка удалённого доступа для просмотра (облачный сервис/ проброс портов)" + "\n" +
            "- Внутреннее и наружное расположение" + "\n" +
            "- Настройка детекторов движения, ночной режим и т.д."
        ]
    }
    ]
  };
  
  const name = document.getElementById('name')
  const description = document.getElementById('description')
  const container = document.getElementById('btnCont');
  
  myObject.catalogo.forEach((elem, index) => {
    const btn = document.createElement('button');
    btn.innerText = elem.name;


    btn.addEventListener('click', function() {
        name.innerText = elem.name; 
        description.innerText = elem.description 
    })
    container.appendChild(btn);
  })

