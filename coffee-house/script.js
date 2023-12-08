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
            createMenuItem(item.name, item.description, item.price, index, 'coffee',  itemID = index + 1)
        })        
    }

    function showTea () {
        let tea = [];
        for (let i = 8; i < 12; i +=1) {
            tea.push(menu[i])
        }
        tea.forEach((item, index) => {
            createMenuItem(item.name, item.description, item.price, index, 'tea', itemID = index + 9)
        }) 
    }


    function showDesserts () {
        let desserts = [];
        for (let i = 12; i < 20; i +=1) {
            desserts.push(menu[i])
        }
        desserts.forEach((item, index) => {
            createMenuItem(item.name, item.description, item.price, index, 'dessert', itemID = index + 13)
        }) 
    }
    
    if (document.querySelector('.menu_content')) {
        loadMenu(showCoffee);
    }

    function createMenuItem(name, descr, price, index, category, itemID) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu_item');
        menuItem.setAttribute('data-ID', itemID)

        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('img_wrapper');

        const img = document.createElement('img');
        img.src = `img/menu/${category}/${category}-${index + 1}.png`
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
    if (!document.querySelector('.menu_wrapper')) {
        a.href = 'menu.html';
    }
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

//close burger-menu when window size more than 768px
window.addEventListener('resize', () => {
    const nav = document.querySelector('.header_nav');
    if (window.innerWidth > 768 && nav.classList.contains('open_burger_menu')) {
        enableScroll();
        burgerBtn.classList.remove('open_burger_icon');
        nav.classList.remove('open_burger_menu');
        nav.classList.remove('shown_burger_menu');
        document.querySelector('.menu_button').remove();
        toggleEventListenerToBurgerMenuitems();
    }
    //load_more_btn
    if (window.innerWidth > 1100 && document.querySelector('.load_more_btn').classList.contains('hidden')) {
        collapseMenuBoard();
    }
})

function collapseMenuBoard() {
        document.querySelector('.load_more_btn').classList.remove('hidden');
        document.querySelector('.menu_content').classList.remove('show_all');
}
//menu

if(document.querySelector('.menu_category')) {
    const categoryControls = document.querySelectorAll('.menu_category input');
    categoryControls.forEach((item) => {
        item.addEventListener('click', (e) => {
            deleteCurrentCategoryItems();
            if (e.target.id === 'coffee') {
                loadMenu(showCoffee);
                collapseMenuBoard();
            }
            if (e.target.id === 'tea') {
                loadMenu(showTea);
                document.querySelector('.load_more_btn').classList.add('hidden');
                document.querySelector('.menu_content').classList.add('show_all');
            }
            if (e.target.id === 'dessert') {
                loadMenu(showDesserts);
                collapseMenuBoard();
            }
        })
    })
   
}


function deleteCurrentCategoryItems () {
    document.querySelector('.menu_content').innerHTML = '';
}


//load more products

const moreBtn = document.querySelector('.load_more_btn');
    moreBtn.addEventListener('click', () => {
        document.querySelector('.menu_content').classList.add('show_all');
        moreBtn.classList.add('hidden');
    })



    async function loadItemInfo(itemID) {
        const menuData = await fetch("products.json");
        menu = await menuData.json();
        const itemInfo = menu[itemID];
        createModal(itemInfo, itemID);
      }
    
    function createModal (itemInfo, itemID) {
        const modal = document.createElement('div');
        modal.classList.add('menu_item_modal');
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('img_wrapper');
        const img = document.createElement('img');
            img.src = `img/menu/${itemInfo.category}/${itemInfo.category}-${getPhotoNumber(itemInfo.category, itemID) + 1}.png`
            img.alt = itemInfo.name;
        imgWrapper.append(img);
        

        const modalDescr = document.createElement('div');
        modalDescr.classList.add('modal_descr');


        const modalTitle = document.createElement('div');
        modalTitle.classList.add('modal_title');
        modalTitle.textContent = itemInfo.name;

        const modalItemDescr = document.createElement('div');
        modalItemDescr.classList.add('modal_item_descr');
        modalItemDescr.textContent = itemInfo.description;

        const modalWrapper = document.createElement('div');
        modalWrapper.classList.add('modal_wrapper');
        modalWrapper.append(modalTitle, modalItemDescr);

        const modalSizes = document.createElement('div');
        modalSizes.classList.add('modal_sizes');
        modalSizes.textContent = 'Size';
        modalSizes.innerHTML = `
        <span>Size</span>
        <div class="menu_category">
                    <input type='radio' name="menu_category" id="size_S" checked>
                    <label for="size_S">
                        <span class="icon_wrapper">S</span>
                        ${itemInfo.sizes.s.size}
                        </label>

                    <input type='radio' name="menu_category" id="size_M">
                    <label for="size_M">
                        <span class="icon_wrapper">
                            M
                        </span>
                        ${itemInfo.sizes.m.size}</label>

                    <input type='radio' name="menu_category" id="size_L">
                    <label for="size_L">
                        <span class="icon_wrapper">
                            L
                        </span>
                        
                        ${itemInfo.sizes.l.size}</label>
                </div>
        
        `
        const modalAdd = document.createElement('div');
        modalAdd.classList.add('modal_add');
        modalAdd.innerHTML = `
        <span>Additeves</span>
        <div class="menu_category">
                    <input type='radio' name="menu_category" id="add_1">
                    <label for="add_1">
                        <span class="icon_wrapper">1</span>
                        ${itemInfo.additives[0].name}
                        </label>

                    <input type='radio' name="menu_category" id="add_2">
                    <label for="add_2">
                        <span class="icon_wrapper">
                            2
                        </span>
                        ${itemInfo.additives[1].name}</label>

                    <input type='radio' name="menu_category" id="add_3">
                    <label for="add_3">
                        <span class="icon_wrapper">
                            3
                        </span>
                        
                        ${itemInfo.additives[2].name}</label>
                </div>
        
        `
        

        const modalPrice = document.createElement('div');
        modalPrice.classList.add('modal_price');

        modalDescr.append(modalWrapper, modalSizes, modalAdd, modalPrice );
        modal.append(imgWrapper, modalDescr);
        document.body.append(modal);
        disableScroll();
        showOverlay()
    }
    
    document.querySelector('.menu_content').addEventListener('click', (e) => {
        if (e.target.closest('.menu_item')) {
          const itemID = e.target.closest('.menu_item').getAttribute('data-id');
          loadItemInfo(itemID - 1)
        }
    })

    function getPhotoNumber(category, itemID) {
        if (category == 'coffee') {
            return itemID;
        }

        if (category == 'tea') {
            return itemID - 8;
        }

        if (category == 'dessert') {
            return itemID - 12;
        }
    }

    function showOverlay() {
        document.querySelector('.overlay').style.display = 'block';
    }
})


//menu modals

