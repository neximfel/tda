let sec0_main_right_inside_bottom1 = document.getElementById('sec0_main_right_inside_bottom1');
let sec0_main_right_inside_bottom2 = document.getElementById('sec0_main_right_inside_bottom2');
let sec0_main_right_inside_bottom3 = document.getElementById('sec0_main_right_inside_bottom3');
let catalogToggles = document.querySelectorAll('[data-target="sec0"]');
let catalogImgDesktop = document.getElementById('catalog_btn_img');
let catalogImgTablet = document.getElementById('catalog_btn_tablet');
let catalogImgMenu = document.querySelector('img[src*="menu.png"]');
let catalogImgMobile = document.getElementById('catalog_btn_img_mobile');
let sec0 = document.querySelector('.sec0');
let sec1__news_block = document.getElementById('sec1__news_block');
let currentIndex = 0;


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
news = [
    {
        img: "images/sec1/image1.png",
        date: "15.12.2021",
        title: "«Самое ценное в нашем мире — овощи»"
    },
    {
        img: "images/sec1/image2.png",
        date: "15.12.2021",
        title: "Чувство вкуса"
    },
    {
        img: "images/sec1/image3.png",
        date: "15.12.2021",
        title: '"TDA" установил новый мировой рекорд Гиннесса' 
    },
    {
        img: "images/sec1/image2.png",
        date: "15.12.2021",
        title: "Чувство вкуса"
    },
    {
        img: "images/sec1/image3.png",
        date: "15.12.2021",
        title: '"TDA" установил новый мировой рекорд Гиннесса' 
    },
    {
        img: "images/sec1/image1.png",
        date: "15.12.2021",
        title: "«Самое ценное в нашем мире — овощи»"
    },
    {
        img: "images/sec1/image3.png",
        date: "15.12.2021",
        title: '"TDA" установил новый мировой рекорд Гиннесса' 
    },
    {
        img: "images/sec1/image1.png",
        date: "15.12.2021",
        title: "«Самое ценное в нашем мире — овощи»"
    },
    {
        img: "images/sec1/image2.png",
        date: "15.12.2021",
        title: "Чувство вкуса"
    },
    {
        img: "images/sec1/image1.png",
        date: "15.12.2021",
        title: "«Самое ценное в нашем мире — овощи»"
    },
    {
        img: "images/sec1/image2.png",
        date: "15.12.2021",
        title: "Чувство вкуса"
    },
    {
        img: "images/sec1/image3.png",
        date: "15.12.2021",
        title: '"TDA" установил новый мировой рекорд Гиннесса' 
    }
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

sec1__news_block.innerHTML = news.map(
    item => `<article>
                <img src="${item.img}">
                <div>
                    <p>${item.date}</p>
                    <h2>${item.title}</h2>
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