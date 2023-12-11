document.body.click();
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
    if (document.querySelector('.load_more_btn')) {
        if (window.innerWidth > 1100 && document.querySelector('.load_more_btn').classList.contains('hidden')) {
            collapseMenuBoard();
        }
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
if (document.querySelector('.load_more_btn')) {
    const moreBtn = document.querySelector('.load_more_btn');
    moreBtn.addEventListener('click', () => {
        document.querySelector('.menu_content').classList.add('show_all');
        moreBtn.classList.add('hidden');
    })
}


    async function loadItemInfo(itemID) {
        const menuData = await fetch("products.json");
        menu = await menuData.json();
        const itemInfo = menu[itemID];
        createModal(itemInfo, itemID);
      }
    

    function createModal (itemInfo, itemID) {
        showOverlay();  
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
                    <input type='checkbox'  class="size" name="menu_category" id="size_S" checked>
                    <label for="size_S">
                        <span class="icon_wrapper">S</span>
                        ${itemInfo.sizes.s.size}
                        </label>

                    <input type='checkbox' class="size" name="menu_category" id="size_M">
                    <label for="size_M">
                        <span class="icon_wrapper">
                            M
                        </span>
                        ${itemInfo.sizes.m.size}</label>

                    <input type='checkbox' class="size" name="menu_category" id="size_L">
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
        <span>Additives</span>
        <div class="menu_category">
                    <input type='checkbox'  id="add_1">
                    <label for="add_1">
                        <span class="icon_wrapper">1</span>
                        ${itemInfo.additives[0].name}
                        </label>

                    <input type='checkbox' id="add_2">
                    <label for="add_2">
                        <span class="icon_wrapper">
                            2
                        </span>
                        ${itemInfo.additives[1].name}</label>

                    <input type='checkbox' id="add_3">
                    <label for="add_3">
                        <span class="icon_wrapper">
                            3
                        </span>
                        
                        ${itemInfo.additives[2].name}</label>
                </div>
        
        `
        modalAdd.addEventListener('click', ()=> {
            changePrice(itemInfo)
        })

        modalSizes.addEventListener('click', ()=> {
            changePrice(itemInfo)
        })

        const modalPrice = document.createElement('div');
        modalPrice.classList.add('modal_price');
        modalPrice.innerHTML = `
        <span>Total:</span>
        <div>$<span id='price'>${itemInfo.price}</span></div>
        `



        const modalWarning = document.createElement('div');
        modalWarning.classList.add('modal_warning');
        modalWarning.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_268_12877)">
          <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_268_12877">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <div>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</div>
        `

        const modalButton = document.createElement('button');
        modalButton.classList.add('modal_button');
        modalButton.textContent = 'Close'
        modalButton.addEventListener('click', hidePopUp);

        modalDescr.append(modalWrapper, modalSizes, modalAdd, modalPrice, modalWarning, modalButton);

       

        modal.append(imgWrapper, modalDescr);
        document.body.append(modal);
        disableScroll();
        showOverlay()
    }
    
    function changePrice(itemInfo) {
        if (event.target.closest('input')) {
            if (event.target.closest('input').id[0] === 'a') {
                const addNum = event.target.closest('input').id[4]
                if (event.target.closest('input').checked) {
                    document.querySelector('#price').textContent = (parseFloat(document.querySelector('#price').textContent) + parseFloat((itemInfo.additives[addNum - 1])['add-price'])).toPrecision(3);
                } else {
                    document.querySelector('#price').textContent = (parseFloat(document.querySelector('#price').textContent) - parseFloat((itemInfo.additives[addNum - 1])['add-price'])).toPrecision(3);
                }
            }

            if (event.target.closest('input').id[0] === 's') {
                const sizeLetter = event.target.closest('input').id[5];
                let sizeNum;
                if (sizeLetter === 'S') {
                    sizeNum = 0; 
                }
                if (sizeLetter === 'M') {
                    sizeNum = 1; 
                }
                if (sizeLetter === 'L') {
                    sizeNum = 2; 
                }
                let current;
                current = parseFloat(itemInfo.sizes[event.target.closest('input').id[5].toLowerCase()]['add-price']);
                if (event.target.closest('input').checked) {

                    
                        document.querySelectorAll('.size').forEach((item) => {
                        item.checked = false
                    })
                    document.querySelectorAll('.size').forEach((item) => {
                        item.disabled = false
                    })
                    event.target.closest('input').checked = true;
                    event.target.closest('input').disabled = true;
                    document.querySelector('#price').textContent = (parseFloat(document.querySelector('#price').textContent) - parseFloat(itemInfo.price) + parseFloat(itemInfo.price) + parseFloat(itemInfo.sizes[sizeLetter.toLowerCase()]['add-price'])).toPrecision(3);
                } 
                // else {
                //     document.querySelector('#price').textContent = (parseFloat(document.querySelector('#price').textContent)  - parseFloat(itemInfo.price) + parseFloat(itemInfo.price) + parseFloat(itemInfo.sizes[sizeLetter.toLowerCase()]['add-price'])).toPrecision(3);
                    
                // }
              
    
                // if (event.target.closest('input').checked) {
                //     document.querySelector('#price').textContent = (parseFloat(document.querySelector('#price').textContent) + parseFloat((itemInfo.additives[addNum - 1])['add-price'])).toPrecision(3);
                // } else {
                //     document.querySelector('#price').textContent = (parseFloat(document.querySelector('#price').textContent) - parseFloat((itemInfo.additives[addNum - 1])['add-price'])).toPrecision(3);
                // }
            }
            
        }
     
        // return itemInfo.price + priceSize + prizeAdd;
    }

    if(document.querySelector('.menu_content')) {
        document.querySelector('.menu_content').addEventListener('click', (e) => {
            if (e.target.closest('.menu_item')) {
              const itemID = e.target.closest('.menu_item').getAttribute('data-id');
              loadItemInfo(itemID - 1)
            }
        })
    }
   

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
        const overlay = document.querySelector('.overlay');
        overlay.style.display = 'block';
        overlay.addEventListener('click', hidePopUp)

 
     }

     function hidePopUp () {
        const overlay = document.querySelector('.overlay');
        const modal = document.querySelector('.menu_item_modal')
        overlay.style.display = 'none';
        if (modal) {
            modal.remove()
        }
        enableScroll();
        overlay.removeEventListener('click', hidePopUp)
     }


     //video

     const enjoy = document.querySelector('.enjoy')
     const video = document.createElement('video');
     video.classList.add('video');
     video.src = 'video/video.mp4'
     video.autoplay = true;
     video.loop = true;
     video.muted = true;
     video.play()
     enjoy.prepend(video)



     //slider 
     const sliderContentWrapper = document.querySelector('.slider_content_wrapper');

     if(sliderContentWrapper) {
        const leftBtn = document.querySelector('.arrow_left');
        const rightBtn = document.querySelector('.arrow_right');
        let number = 1;

        // let x1 = 0,
        //     x2 = 0;

        // sliderContentWrapper.addEventListener('pointerdown', (event) => {
        //     event.preventDefault();
        //     console.dir(event)
        //         x1 = event.clientX;
        // })

        // sliderContentWrapper.addEventListener('pointerup', (event) => {
        //     if (!x1) {
        //         return;
        //     }
        //     console.dir(event)
        //      x2 = event.clientX;

        //      let dx = x2 - x1;
        //      if (Math.abs(dx) >= 20) {
        //         if(dx < 0) {
        //             number = moveRight(number);
        //          } else {
        //             number = moveLeft(number);
        //          }
        //          showSlide(number);
        //          moveControlItem(number);
        //          sliderAnimateControl.cancel();
        //         sliderAnimateControl.play();
               
        //      }
        //      sliderAnimateControl.play();
        //      x2 = 0;
        //     })
                      
            let x1 = 0,
            x2 = 0;

        sliderContentWrapper.addEventListener('touchstart', (event) => {

            // event.preventDefault()
                x1 = event.touches[0].clientX;
        })

        sliderContentWrapper.addEventListener('touchend', (event) => {
            if (!x1) {
                return;
            }

             x2 = event.changedTouches[0].clientX;

             let dx = x2 - x1;
             if (Math.abs(dx) >= 40) {
                if(dx < 0) {
                    number = moveRight(number);
                 } else {
                    number = moveLeft(number);
                 }
                 showSlide(number);
                 moveControlItem(number);
                 sliderAnimateControl.cancel();
                sliderAnimateControl.play();
               
             }
             sliderAnimateControl.play();
             x2 = 0;
            })
        

        leftBtn.addEventListener('click', () => {
            number = moveLeft(number)
            showSlide(number);
            moveControlItem(number);
            sliderAnimateControl.cancel();
            sliderAnimateControl.play();
        })

        rightBtn.addEventListener('click', () => {
            number = moveRight(number)
            showSlide(number);
            moveControlItem(number);
            sliderAnimateControl.cancel();
            sliderAnimateControl.play();
        })
        window.addEventListener('resize', () => showSlide(number))


        const sliderStatus = [
            { width: '0%' },
            { width: '100%' },
          ];



        const status = document.querySelector('.control_item_fill');
        const sliderAnimateControl = status.animate(sliderStatus, 5000)
 
        sliderAnimateControl.addEventListener('finish', () => {
            number = moveRight(number)
            showSlide(number);
            moveControlItem(number);
            sliderAnimateControl.play()

        } )

        sliderContentWrapper.addEventListener('mouseover', ()=> {
            sliderAnimateControl.pause()
        })

        sliderContentWrapper.addEventListener('mouseout', ()=> {
            sliderAnimateControl.play()
        })

        sliderContentWrapper.addEventListener('pointerdown', ()=> {
            sliderAnimateControl.pause()
        })

        sliderContentWrapper.addEventListener('mouseup', ()=> {
            sliderAnimateControl.play()
        })
     }

     function showSlide(number = 1) {
            let i = number;
            if (number > 3 || number < 1) {
                i = 1;
            }
            const wrapperWidth = parseFloat(window.getComputedStyle(sliderContentWrapper).width);
            sliderContentWrapper.style.transform = `translateX(${-wrapperWidth * (i - 1)}px)` 
     }

     function moveRight(number) {
        number += 1;
        if (number > 3) {
            number = 1
        }
        return number;
     }

     function moveLeft(number) {
        number -= 1;
        if (number < 1) {
            number = 3
        }
        return number;
     }

     function moveControlItem(number) {
        const status = document.querySelector('.control_item_fill');
        const controlItems = document.querySelectorAll('.control_item');
        controlItems.forEach(item => item.innerHTML = '')
        controlItems[number - 1].append(status) 
     }

 

     

})




