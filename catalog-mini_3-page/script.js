let sec0_main_right_inside_bottom1 = document.getElementById('sec0_main_right_inside_bottom1');
let sec0_main_right_inside_bottom2 = document.getElementById('sec0_main_right_inside_bottom2');
let sec0_main_right_inside_bottom3 = document.getElementById('sec0_main_right_inside_bottom3');
let catalogToggles = document.querySelectorAll('[data-target="sec0"]');
let catalogImgDesktop = document.getElementById('catalog_btn_img');
let catalogImgTablet = document.getElementById('catalog_btn_tablet');
let catalogImgMenu = document.querySelector('img[src*="menu.png"]');
let catalogImgMobile = document.getElementById('catalog_btn_img_mobile');
let sec2_main_mid = document.getElementById("sec2_main_mid");
const leftbutton = document.getElementById('sec2_main_bot_left');
const rightbutton = document.getElementById('sec2_main_bot_right');
let sec1__catalog_block = document.getElementById('sec1__catalog_block');
const dots = document.querySelectorAll('.dot');
let sec0 = document.querySelector('.sec0');
let currentIndex = 0;

eda = [
    {
        img: "images/sec1/image1.png",
        title: "Молочная продукция"
    },
    {
        img: "images/sec1/image2.png",
        title: "Мясная продукция"
    },
    {
        img: "images/sec1/image3.png",
        title: "Овощи"
    },
    {
        img: "images/sec1/image4.png",
        title: "Ягоды"
    },
    {
        img: "images/sec1/image3.png",
        title: "Овощи"
    },
    {
        img: "images/sec1/image4.png",
        title: "Ягоды"
    },
    {
        img: "images/sec1/image1.png",
        title: "Молочная продукция"
    },
    {
        img: "images/sec1/image2.png",
        title: "Мясная продукция"
    },
    {
        img: "images/sec1/image2.png",
        title: "Мясная продукция"
    },
    {
        img: "images/sec1/image1.png",
        title: "Молочная продукция"
    },
    {
        img: "images/sec1/image4.png",
        title: "Ягоды"
    },
    {
        img: "images/sec1/image3.png",
        title: "Овощи"
    }
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

tovari = [
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    },
    {
        sale1: "-40%",
        sale2: "Новинка",
        sale3: "Хит",
        img: "images/sec2/morkovka.png",
        title: "Морковь мытая 0.7-1.0 кг",
        skidka1: "99,90 ₽/кг",
        skidka2: "59,90 ₽/кг",
        minus: "-",
        equals: "1",
        plus: "+"
    }
] 

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

sec1__catalog_block.innerHTML = eda.map(
    item => `<article onclick="window.open('../kartochka_5-page/index.html')">
                <img src="${item.img}">
                <p>${item.title}</p>
            </article>`
).join('');

sec2_main_mid.innerHTML = tovari.map(
    item => `<article onclick="window.open('../kartochka_5-page/index.html')">
                <div class="sec2_main_art_top">
                    <div class="sec2_main_art_top_ins" style="background-image: url('${item.img}')">
                    <div class="sec1_main_mid_right_karta_inside1">
                        <div class="sec1_main_mid_right_karta_inside1_sale1">
                                <p>${item.sale1}</p>
                            </div>
                            <div class="sec1_main_mid_right_karta_inside1_sale2">
                                <p>${item.sale2}</p>
                            </div>
                            <div class="sec1_main_mid_right_karta_inside1_sale3">
                                <p>${item.sale3}</p>
                            </div>
                        </div>
                    </div>    
                        
                </div>
                <div class="sec2_main_art_bot">
                    <div class="sec2_main_art_bot_ins">
                        <h2>${item.title}</h2>
                        <p>${item.skidka1}</p>
                        <h4>${item.skidka2}</h4>
                        <div class="sec2_main_art_bot_ins_buttons">
                            <div class="sec1_main_mid_right_karta_inside3_price2">
                                <button class="counter_btn_minus">${item.minus}</button>
                                <div class="counter_btn_number">${item.equals}</div>
                                <button class="counter_btn_plus">${item.plus}</button>
                            </div>
                            <button class="sec2_main_art_bot_ins_buttons_shop">В корзину</button>
                        </div>
                    </div>
                </div>
            </article>`
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

function updateSlider() {
    const articles = sec2_main_mid.querySelectorAll('article');
    if (articles.length === 0) return;

    const cardWidth = articles[0].offsetWidth;
    const gap = parseInt(window.getComputedStyle(sec2_main_mid).gap) || 0;

    let cardsPerPage = 4;
    if (window.innerWidth <= 768 && window.innerWidth > 480) {
        cardsPerPage = 2;
    } else if (window.innerWidth <= 480) {
        cardsPerPage = 1;
    }

    const maxIndex = Math.ceil(articles.length / cardsPerPage) - 1;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const translateX = currentIndex * cardsPerPage * (cardWidth + gap);
    sec2_main_mid.style.transform = `translateX(-${translateX}px)`;

    if (dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
}

rightbutton.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
});

leftbutton.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
});

setTimeout(updateSlider, 100);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target && target.classList.contains('counter_btn_plus')){
    const parent = target.parentElement;
    const numberDiv = parent.querySelector('.counter_btn_number');
    if (numberDiv){
        let count = parseInt(numberDiv.textContent) || 1;
        numberDiv.textContent = count + 1;
    }
  }
  if (target && target.classList.contains('counter_btn_minus')){
    const parent = target.parentElement;
    const numberDiv = parent.querySelector('.counter_btn_number');
    if (numberDiv){
        let count = parseInt(numberDiv.textContent) || 1;
        if (count > 1){
            numberDiv.textContent = count - 1;
        }
    }
  }
});

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