document.addEventListener('DOMContentLoaded', () => {
    async function loadMenu(category) {
        const menuData = await fetch("products.json");
        menu = await menuData.json();
        category()
      }

        function showCoffee() {
        let coffee = [];
        for (let i = 0; i < 8; i += 1) {
            coffee.push(menu[i])
        }
        coffee.forEach((item, index) => {
            createMenuItem(item.name, item.description, item.price, index)
        })
        
    }
    
    if (document.querySelector('.menu_content')) {
        loadMenu(showCoffee);
    }

    function createMenuItem(name, descr, price, index) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu_item');

        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('img_wrapper');

        const img = document.createElement('img');
        img.src = `img/menu/coffee/coffee-${index + 1}.jpg`
        img.alt = name;

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item_info');

        const itemTitle = document.createElement('div');
        itemTitle.classList.add('item_title');
        itemTitle.textContent = name;

        const itemDescr = document.createElement('div');
        itemDescr.classList.add('item_descr');
        itemDescr.textContent = descr;

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('item_price');
        itemPrice.textContent = '$' + price; 

        imgWrapper.append(img);
        itemInfo.append(itemTitle);
        itemInfo.append(itemDescr);
        itemInfo.append(itemPrice);
        menuItem.append(imgWrapper);
        menuItem.append(itemInfo);
        document.querySelector('.menu_content').append(menuItem);
    }
})

//week3
//animation burger menu on click
const burgerBtn = document.querySelector('.menu_button_touch');
burgerBtn.addEventListener('click', () => {
    toggleBurgerIcon();
    toggleNav();
    toggleEventListenerToBurgerMenuitems()
});

function toggleBurgerIcon () {
    burgerBtn.classList.toggle('open_burger_icon');
}

//open nav

function toggleNav () {
    const nav = document.querySelector('.header_nav');
    if (getComputedStyle(nav).display == 'none') {
        toggleBurgerMenu();
        disableScroll();
    } else {
        toggleBurgerMenu();
        enableScroll();
    }
    
}

function toggleBurgerMenu () {
    const nav = document.querySelector('.header_nav');
    if (!nav.classList.contains('open_burger_menu')) {
        nav.classList.toggle('open_burger_menu');
        if (!document.querySelector('.open_burger_menu .menu_button')) {
            nav.append(createMenuLink());
        }
        setTimeout(() => nav.classList.toggle('shown_burger_menu'), 100);
    } else {
        setTimeout(() => {
            if (document.querySelector('.open_burger_menu .menu_button')) {
                document.querySelector('.open_burger_menu .menu_button').remove();}
            nav.classList.toggle('open_burger_menu');
        }, 600);
        nav.classList.toggle('shown_burger_menu');
    }
}

function disableScroll () {
    document.body.style.overflow = "hidden";
}

function enableScroll () {
    document.body.style.overflow = "auto";
    
}

function createMenuLink () {
    const menuButton = document.createElement('div');
    menuButton.classList.add('menu_button');
    const a = document.createElement('a');
    a.href = 'menu.html';
    a.append(document.createElement('span').textContent = 'Menu');
    const coffeeCup = document.createElement('img');
    coffeeCup.src = 'img/coffee-cup.svg';
    coffeeCup.alt = 'coffee';
    a.append(coffeeCup);
    menuButton.append(a);
    return menuButton;
}

function toggleEventListenerToBurgerMenuitems () {
    const nav = document.querySelector('nav');
    if (nav.getAttribute('listener') !== 'true') {
        nav.addEventListener('click', toggleNavWraper);
        nav.setAttribute('listener', 'true');
   } else {
        nav.removeEventListener('click', toggleNavWraper);
        nav.setAttribute('listener', 'false');
   }
}

function toggleNavWraper (event) {
    if (event.target.tagName === 'A') {
        toggleNav();
        toggleBurgerIcon();
        const nav = document.querySelector('nav');
        if (nav.getAttribute('listener') === 'true') {
        nav.removeEventListener('click', toggleNavWraper);
        nav.setAttribute('listener', 'false');
        }
    }
}