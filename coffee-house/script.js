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
burgerBtn.addEventListener('click', () => burgerBtn.classList.toggle('open_burger_icon'));