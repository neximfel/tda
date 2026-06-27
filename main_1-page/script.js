let sec0_main_right_inside_bottom1 = document.getElementById('sec0_main_right_inside_bottom1');
let sec0_main_right_inside_bottom2 = document.getElementById('sec0_main_right_inside_bottom2');
let sec0_main_right_inside_bottom3 = document.getElementById('sec0_main_right_inside_bottom3');
let catalogToggles = document.querySelectorAll('[data-target="sec0"]');
let catalogImgDesktop = document.getElementById('catalog_btn_img');
let catalogImgTablet = document.getElementById('catalog_btn_tablet');
let catalogImgMenu = document.querySelector('img[src*="menu.png"]');
let catalogImgMobile = document.getElementById('catalog_btn_img_mobile');
let sec0 = document.querySelector('.sec0');
let sec1_main_mid_right_karta_inside5_desc = document.getElementById('sec1_main_mid_right_karta_inside5_desc');
let sec2_main_mid = document.getElementById("sec2_main_mid");
const leftbutton = document.getElementById('sec2_main_bot_left');
const rightbutton = document.getElementById('sec2_main_bot_right');
const dot = document.querySelectorAll('.dot');
let articles = document.getElementById('articles')
let malinka = document.getElementById('malinka')
let sec1__top_listalka = document.getElementById('sec1__top_listalka')
let right_butt = document.getElementById('malina_right')
let left_butt = document.getElementById('malina_left')
let currentIndex = 0;

malina = [
    
]

popular = [
    {
        img: "images/sec2/image1.png",
        title:"Молочная продукция"
    },
    {
        img: "images/sec2/image2.png",
        title:"Мясная продукция"
    },
    {
        img: "images/sec2/image3.png",
        title:"Овощи"
    },
    {
        img: "images/sec2/image4.png",
        title:"Ягоды"
    },
    {
        img: "images/sec2/image1.png",
        title:"Молочная продукция"
    },
    {
        img: "images/sec2/image2.png",
        title:"Мясная продукция"
    },
    {
        img: "images/sec2/image3.png",
        title:"Овощи"
    },
    {
        img: "images/sec2/image4.png",
        title:"Ягоды"
    },
]

banki = [
    {
        img: "images/sec1/img1.png"
    },
    {
        img: "images/sec1/img2.png"
    },
    {
        img: "images/sec1/img3.png"
    },
    {
        img: "images/sec1/img4.png"
    },
    {
        img: "images/sec1/img5.png"
    },
    {
        img: "images/sec1/img6.png"
    },
    {
        img: "images/sec1/img7.png"
    },
    {
        img: "images/sec1/img8.png"
    },
    {
        img: "images/sec1/img9.png"
    },
    {
        img: "images/sec1/img0.png"
    },
]

menu_left_top = [
    {
        img: "images/sec0/arrow_r.png",
        title: "Новинки",
    },
    {
        img: "images/sec0/arrow_r.png",
        title: "Овощи, фрукты, ягоды, зелень, грибы",
    },
    {
        img: "images/sec0/arrow_r.png",
        title: "Кулинария",
    },
    {
        img: "images/sec0/arrow_r.png",
        title: "Молоко, сыр, яйцо",
    },
    {
        img: "images/sec0/arrow_r.png",
        title: "Мясо, птица, колбасы",
    },
    {
        img: "images/sec0/arrow_r.png",
        title: "Рыба, икра, морепродукты",
    },
    {
        img: "images/sec0/arrow_r.png",
        title: "Крупы, масло, консервы, соусы, орехи",
    },
    {
        img: "images/sec0/arrow_r.png",
        title: "Вода, соки, напитки",
    },
    {
        img: "images/sec0/arrow_r.png",
        title: "Хлеб, хлебцы, выпечка",
    },
    {
        img: "images/sec0/arrow_r.png",
        title: "Сладости, торты, пирожные",
    },
    {
        img: "images/sec0/arrow_r.png",
        title: "Чай, кофе, какао",
    },
    {
        img: "images/sec0/arrow_r.png",
        title: "Десткие товары",
    },
    {
        img: "images/sec0/arrow_r.png",
        title: "Замороженные продукты",
    },
    {
        img: "images/sec0/arrow_r.png",
        title: "Здоровое питание",
    },
];

menu_left_bot1_inside = [
    {
        pun: "Новости",
    },
    {
        pun: "Контакты",
    },
    {
        pun: "Пользовательское соглашение",
    },
    {
        pun: "Политика обработки персональных данных",
    },
];

menu_left_bot2_inside = [
    {
        pun: "Доставка и оплата",
    },
    {
        pun: "Как вернуть",
    },
    {
        pun: "Как заказать",
    },
    {
        pun: "Программа лояльности",
    },
    {
        pun: "Вопросы и ответы",
    },
    {
        pun: "Юридическим лицам",
    },
];

right_col1 = [
    {
        title: "Орехи, сухофрукты, семечки",
        links: []
    },
    {
        title: "Макаронные изделия",
        links: []
    },
    {
        title: "Мука, всё для выпечки",
        links: ["Смеси для выпечки", "Мука", "Всё для выпечки"]
    },
    {
        title: "Соусы, майонез",
        links: ["Майонез", "Кетчуп, томатная паста", "Соусы", "Заправки для салата", "Горчица, хрен", "Уксус"]
    }
];
right_col2 = [
    {
        title: "Растительное масло",
        links: ["Подсолнечное", "Оливковое", "Льняное", "Кукурузное", "Тыквенное", "Другие масла"]
    },
    {
        title: "Сухие завтраки, каши, хлопья",
        links: ["Сухие завтраки", "Геркулес, хлопья, отруби", "Гранола, мюсли", "Каши быстрого приготовления", "Без сахара"]
    }
];
right_col3 = [
    {
        title: "Крупы, бобовые",
        links: ["Крупы", "Бобовые"]
    },
    {
        title: "Консервы, варенье, мёд",
        links: ["Овощные, грибные", "Оливки, маслины", "Мясные", "Рыбные, морепродукты", "Готовые блюда", "Мёд", "Фрукты в сиропе", "Варенье, джем", "Сиропы", "Сгущёнка"]
    }
];

articles.innerHTML = popular.map(
    item => `<article class="artMove"  onclick="window.open('../kartochka_5-page/index.html')">
                <img src="${item.img}">
                <div>
                    <h3>${item.title}</h3>
                </div>
            </article>`,
).join('');

sec0_main_left_top.innerHTML = menu_left_top.map(
    item => `<a href="">
                <p>${item.title}</p>
                <img src="${item.img}"
            </a>`
).join('');

sec0_main_left_bot1_inside.innerHTML = menu_left_bot1_inside.map(
    item => `<a href="">${item.pun}</a>`
).join('');

sec0_main_left_bot2_inside.innerHTML = menu_left_bot2_inside.map(
    item => `<a href="">${item.pun}</a>`
).join('');

sec0_main_right_inside_bottom1.innerHTML = right_col1.map(
    item => `<div class="sub_category_group">
                <h3>${item.title}</h3>
                ${item.links.map(link => `<a href="">${link}</a>`).join('')}
              </div>`
).join('');

sec0_main_right_inside_bottom2.innerHTML = right_col2.map(
    item => `<div class="sub_category_group">
                <h3>${item.title}</h3>
                ${item.links.map(link => `<a href="">${link}</a>`).join('')}
              </div>`
).join('');

sec0_main_right_inside_bottom3.innerHTML = right_col3.map(
    item => `<div class="sub_category_group">
                <h3>${item.title}</h3>
                ${item.links.map(link => `<a href="">${link}</a>`).join('')}
              </div>`
).join('');



sec1__top_listalka.innerHTML = banki.map(
    item => `<article>
                <div class="art-inside">
                    <img src="${item.img}">
                    <p class="art-text">Кетчуп «Томатный „Кубаночка“ 310 г. дойпак 1/20</p>
                    <div>
                        <p class="art-skidka1">55,90 ₽</p>
                        <p class="art-skidka2">42,30 ₽</p>
                    </div>
                    <button><img src="images/sec1/shopping_bag.png"></button>
                </div>
            </article>`
).join('');


catalogToggles.forEach(function(btn){
    btn.addEventListener('click', function(){
        sec0.classList.toggle('active');
        const isActive = sec0.classList.contains('active');
        if (catalogImgDesktop){
            if (isActive){
                catalogImgDesktop.src = "images/nav/list1.png";
            } else {
                catalogImgDesktop.src = "images/nav/list.png";
            }
        }
        if (catalogImgMenu){
            if (isActive){
                catalogImgMenu.src = "images/sec1/menu1.png";
            } else{
                catalogImgMenu.src = "images/sec1/menu.png";
            }
        }
        if (catalogImgMobile){
            if (isActive){
                catalogImgMobile.src = "images/nav/list1.png";
            } else{
                catalogImgMobile.src = "images/sec3/list.png";
            }
        }
    });
});

function toggleColor(element){
  element.classList.toggle('active');
}
