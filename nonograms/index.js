(()=>{"use strict";var n={845:(n,e,r)=>{r.d(e,{Z:()=>l});var t=r(537),a=r.n(t),o=r(645),i=r.n(o)()(a());i.push([n.id,"@media (max-width: 900px) {\n    body .app {\n        margin: 5px auto;\n        width: 90vw;\n    }\n\n    #game-field-wapper .cell,\n    #game-field-wapper .clue {\n        width: clamp(0.938rem, 0.42rem + 2.59vw, 1.875rem);\n        height: clamp(0.938rem, 0.42rem + 2.59vw, 1.875rem);\n        font-size: clamp(0.5rem, 0.293rem + 1.03vw, 0.875rem);\n    }\n\n    #game-field-wapper .clues-row-vert {\n        height: auto;\n    }\n    #game-field-wapper .clues-row-hor {\n        width: auto;\n    }\n    #game-field-wapper .clues-row-hor .clue {\n        width: clamp(0.5rem, 0.224rem + 1.38vw, 1rem);\n    }\n}\n\n","",{version:3,sources:["webpack://./css/media.css"],names:[],mappings:"AAAA;IACI;QACI,gBAAgB;QAChB,WAAW;IACf;;IAEA;;QAEI,kDAAkD;QAClD,mDAAmD;QACnD,qDAAqD;IACzD;;IAEA;QACI,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;QACI,6CAA6C;IACjD;AACJ",sourcesContent:["@media (max-width: 900px) {\r\n    body .app {\r\n        margin: 5px auto;\r\n        width: 90vw;\r\n    }\r\n\r\n    #game-field-wapper .cell,\r\n    #game-field-wapper .clue {\r\n        width: clamp(0.938rem, 0.42rem + 2.59vw, 1.875rem);\r\n        height: clamp(0.938rem, 0.42rem + 2.59vw, 1.875rem);\r\n        font-size: clamp(0.5rem, 0.293rem + 1.03vw, 0.875rem);\r\n    }\r\n\r\n    #game-field-wapper .clues-row-vert {\r\n        height: auto;\r\n    }\r\n    #game-field-wapper .clues-row-hor {\r\n        width: auto;\r\n    }\r\n    #game-field-wapper .clues-row-hor .clue {\r\n        width: clamp(0.5rem, 0.224rem + 1.38vw, 1rem);\r\n    }\r\n}\r\n\r\n"],sourceRoot:""}]);const l=i},174:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(537),a=r.n(t),o=r(645),i=r.n(o),l=r(845),A=i()(a());A.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,100;1,300&display=swap);"]),A.i(l.Z),A.push([n.id,":root {\n    --win-text: #106d10;\n    --black-cell: #2b2b2b;\n    --button-background: #d4d4d4;\n}\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    position: relative;\n    margin: 5px auto;\n    width: 80vw;\n    font-family: Roboto;\n    font-size: 18px;\n    min-width: 300px;\n    max-width: 590px;\n    overflow: hidden;\n    gap: 5px;\n}\n\n.app__header,\n.app__footer {\n    display: flex;\n    justify-content: space-around;\n}\n\n.app__game-field {\n    display: grid;\n    background: black;\n}\n\n.app__game-field_5x5 {\n    grid-template-columns: repeat(5, auto);\n    grid-template-rows: repeat(5, auto);\n}\n\n.app__game-field_10x10 {\n    grid-template-columns: repeat(10, auto);\n    grid-template-rows: repeat(10, auto);\n}\n\n.app__game-field_15x15 {\n    grid-template-columns: repeat(15, auto);\n    grid-template-rows: repeat(15, auto);\n}\n\n.cell {\n    width: 25px;\n    height: 25px;\n    border: 1px solid #d4d4d4;\n    background: #ffffff;\n}\n\n.button {\n    cursor: pointer;\n    background: #ffffff;\n    min-height: 30px;\n    width: clamp(3.125rem, 1.307rem + 9.09vw, 8.125rem);\n    border-radius: 6px;\n    font-family: Roboto;\n    transition: all 0.5s ease-out;\n    font-size: clamp(0.625rem, 0.443rem + 0.91vw, 1.125rem);\n}\n\n.button-switcher {\n    position: relative;\n    height: 20px;\n    width: 40px;\n    overflow: hidden;\n    min-height: auto;\n}\n\n#change-theme-btn:has(.switched) {\n    background: var(--button-background);\n}\n\n.app__header .button-switcher:active,\n.app__header .button-switcher:hover {\n    background: none;\n    outline: none;\n}\n\n.button__slider {\n    height: 100%;\n    width: 60%;\n    background: var(--black-cell);\n    position: relative;\n    top: 0;\n    left: -5px;\n    border-radius: 5px;\n    transition: all 0.5s;\n}\n\n.button__slider.switched {\n    left: 100%;\n    transform: translateX(-95%);\n}\n\n.button:disabled {\n    cursor: default;\n}\n\n#vertical-clues,\n#horizontal-clues {\n    display: flex;\n    background: #000000;\n}\n\n#vertical-clues {\n    justify-content: flex-end;\n    background: #ffffff;\n}\n\n#vertical-clues-wrapper {\n    display: flex;\n    border-bottom: 3px solid #000000;\n    background: #000000;\n}\n\n#horizontal-clues {\n    flex-direction: column;\n    border-right: 3px solid #000000;\n}\n\n#inner-wrapper {\n    display: flex;\n}\n\n#game-field-wapper {\n    width: min-content;\n    margin: 0 auto;\n}\n\n.clue {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 25px;\n    width: 25px;\n}\n\n.clues-row-vert {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex-direction: column;\n    height: auto;\n}\n\n.clues-row-hor {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    width: auto;\n}\n\n.border-bottom {\n    /* border-bottom: 3px solid #000000; */\n    margin-bottom: 3px;\n}\n\n.border-right {\n    margin-right: 3px;\n    /* border-right: 3px solid #000000; */\n}\n\n.border-right-clue {\n    margin-right: 3px;\n}\n\n#space-fill {\n    background: #ffffff;\n    width: 100%;\n    border-left: 1px solid #ffffff;\n}\n.picked {\n    background: var(--black-cell);\n}\n\n.crossed {\n    position: relative;\n}\n.crossed::after {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #000000;\n    top: 50%;\n    transform: rotate(45deg);\n}\n.crossed::before {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #000000;\n    top: 50%;\n    transform: rotate(-45deg);\n}\n\n.info-box {\n    text-align: center;\n    font-weight: 700;\n}\n\n#time-info {\n    text-align: center;\n}\n\n#win-modal {\n    display: block;\n    height: max-content;\n    width: 100%;\n    padding: 25px 0 0 0;\n    text-align: center;\n    color: var(--win-text);\n}\n\n#random-game-btn {\n    font-size: 16px;\n    height: 40px;\n    width: 160px;\n    margin-top: 5px;\n}\n\n.score-table {\n    display: flex;\n    position: absolute;\n    width: 100%;\n    background-color: #ffffff;\n    min-height: 95%;\n    top: 40px;\n    padding: 20px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n.score-table__btn {\n    width: 170px;\n    height: 40px;\n}\n\n.score-table__item-wrapper {\n    padding: 0 15px;\n}\n\n.score-table__item {\n    margin-top: 15px;\n}\n\n.levels-window.hidden,\n.app.hidden {\n    display: none;\n}\n.levels-window {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    text-align: center;\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    max-width: 700px;\n    height: 100dvh;\n    background-color: #ffffff;\n}\n\n.levels-window__button {\n    margin: 0 auto;\n    min-width: 150px;\n    font-size: 22px;\n}\n\n.levels-window__header {\n    font-weight: 800;\n    font-size: 22px;\n    margin-bottom: 15px;\n}\n\n.levels-window__card {\n    border: 1px solid black;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    padding: 5px 0;\n    cursor: pointer;\n    transition: all 0.2s ease-in;\n}\n\n.levels-window__wrapper {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 150px);\n    gap: 10px;\n    justify-content: center;\n}\n\n.levels-window__card-descr {\n    text-align: center;\n    font-size: 20px;\n}\n\n.levels-window__card-level.Easy {\n    color: #106d10;\n}\n\n.levels-window__card-level.Medium {\n    color: #9c8e12;\n}\n\n.levels-window__card-level.Hard {\n    color: #8f1d09;\n}\n\n@media (hover: hover) {\n    .button:hover {\n        background: rgb(194, 194, 194);\n    }\n\n    .button:disabled:hover {\n        background-color: #ffffff;\n    }\n\n    .levels-window__card:has(.Easy):hover {\n        background-color: #106d103d;\n    }\n\n    .levels-window__card:has(.Medium):hover {\n        background-color: #9c8e1263;\n    }\n\n    .levels-window__card:has(.Hard):hover {\n        background-color: #8f1d0952;\n    }\n}\n","",{version:3,sources:["webpack://./css/style.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,100;1,300&display=swap');\r\n\r\n:root {\r\n    --win-text: #106d10;\r\n    --black-cell: #2b2b2b;\r\n    --button-background: #d4d4d4;\r\n}\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.app {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    position: relative;\r\n    margin: 5px auto;\r\n    width: 80vw;\r\n    font-family: Roboto;\r\n    font-size: 18px;\r\n    min-width: 300px;\r\n    max-width: 590px;\r\n    overflow: hidden;\r\n    gap: 5px;\r\n}\r\n\r\n.app__header,\r\n.app__footer {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.app__game-field {\r\n    display: grid;\r\n    background: black;\r\n}\r\n\r\n.app__game-field_5x5 {\r\n    grid-template-columns: repeat(5, auto);\r\n    grid-template-rows: repeat(5, auto);\r\n}\r\n\r\n.app__game-field_10x10 {\r\n    grid-template-columns: repeat(10, auto);\r\n    grid-template-rows: repeat(10, auto);\r\n}\r\n\r\n.app__game-field_15x15 {\r\n    grid-template-columns: repeat(15, auto);\r\n    grid-template-rows: repeat(15, auto);\r\n}\r\n\r\n.cell {\r\n    width: 25px;\r\n    height: 25px;\r\n    border: 1px solid #d4d4d4;\r\n    background: #ffffff;\r\n}\r\n\r\n.button {\r\n    cursor: pointer;\r\n    background: #ffffff;\r\n    min-height: 30px;\r\n    width: clamp(3.125rem, 1.307rem + 9.09vw, 8.125rem);\r\n    border-radius: 6px;\r\n    font-family: Roboto;\r\n    transition: all 0.5s ease-out;\r\n    font-size: clamp(0.625rem, 0.443rem + 0.91vw, 1.125rem);\r\n}\r\n\r\n.button-switcher {\r\n    position: relative;\r\n    height: 20px;\r\n    width: 40px;\r\n    overflow: hidden;\r\n    min-height: auto;\r\n}\r\n\r\n#change-theme-btn:has(.switched) {\r\n    background: var(--button-background);\r\n}\r\n\r\n.app__header .button-switcher:active,\r\n.app__header .button-switcher:hover {\r\n    background: none;\r\n    outline: none;\r\n}\r\n\r\n.button__slider {\r\n    height: 100%;\r\n    width: 60%;\r\n    background: var(--black-cell);\r\n    position: relative;\r\n    top: 0;\r\n    left: -5px;\r\n    border-radius: 5px;\r\n    transition: all 0.5s;\r\n}\r\n\r\n.button__slider.switched {\r\n    left: 100%;\r\n    transform: translateX(-95%);\r\n}\r\n\r\n.button:disabled {\r\n    cursor: default;\r\n}\r\n\r\n#vertical-clues,\r\n#horizontal-clues {\r\n    display: flex;\r\n    background: #000000;\r\n}\r\n\r\n#vertical-clues {\r\n    justify-content: flex-end;\r\n    background: #ffffff;\r\n}\r\n\r\n#vertical-clues-wrapper {\r\n    display: flex;\r\n    border-bottom: 3px solid #000000;\r\n    background: #000000;\r\n}\r\n\r\n#horizontal-clues {\r\n    flex-direction: column;\r\n    border-right: 3px solid #000000;\r\n}\r\n\r\n#inner-wrapper {\r\n    display: flex;\r\n}\r\n\r\n#game-field-wapper {\r\n    width: min-content;\r\n    margin: 0 auto;\r\n}\r\n\r\n.clue {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 25px;\r\n    width: 25px;\r\n}\r\n\r\n.clues-row-vert {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    height: auto;\r\n}\r\n\r\n.clues-row-hor {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    width: auto;\r\n}\r\n\r\n.border-bottom {\r\n    /* border-bottom: 3px solid #000000; */\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.border-right {\r\n    margin-right: 3px;\r\n    /* border-right: 3px solid #000000; */\r\n}\r\n\r\n.border-right-clue {\r\n    margin-right: 3px;\r\n}\r\n\r\n#space-fill {\r\n    background: #ffffff;\r\n    width: 100%;\r\n    border-left: 1px solid #ffffff;\r\n}\r\n.picked {\r\n    background: var(--black-cell);\r\n}\r\n\r\n.crossed {\r\n    position: relative;\r\n}\r\n.crossed::after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    height: 1px;\r\n    width: 100%;\r\n    background: #000000;\r\n    top: 50%;\r\n    transform: rotate(45deg);\r\n}\r\n.crossed::before {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    height: 1px;\r\n    width: 100%;\r\n    background: #000000;\r\n    top: 50%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.info-box {\r\n    text-align: center;\r\n    font-weight: 700;\r\n}\r\n\r\n#time-info {\r\n    text-align: center;\r\n}\r\n\r\n#win-modal {\r\n    display: block;\r\n    height: max-content;\r\n    width: 100%;\r\n    padding: 25px 0 0 0;\r\n    text-align: center;\r\n    color: var(--win-text);\r\n}\r\n\r\n#random-game-btn {\r\n    font-size: 16px;\r\n    height: 40px;\r\n    width: 160px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.score-table {\r\n    display: flex;\r\n    position: absolute;\r\n    width: 100%;\r\n    background-color: #ffffff;\r\n    min-height: 95%;\r\n    top: 40px;\r\n    padding: 20px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n.score-table__btn {\r\n    width: 170px;\r\n    height: 40px;\r\n}\r\n\r\n.score-table__item-wrapper {\r\n    padding: 0 15px;\r\n}\r\n\r\n.score-table__item {\r\n    margin-top: 15px;\r\n}\r\n\r\n.levels-window.hidden,\r\n.app.hidden {\r\n    display: none;\r\n}\r\n.levels-window {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 25px;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 5px;\r\n    width: 100%;\r\n    max-width: 700px;\r\n    height: 100dvh;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.levels-window__button {\r\n    margin: 0 auto;\r\n    min-width: 150px;\r\n    font-size: 22px;\r\n}\r\n\r\n.levels-window__header {\r\n    font-weight: 800;\r\n    font-size: 22px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.levels-window__card {\r\n    border: 1px solid black;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 5px;\r\n    padding: 5px 0;\r\n    cursor: pointer;\r\n    transition: all 0.2s ease-in;\r\n}\r\n\r\n.levels-window__wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, 150px);\r\n    gap: 10px;\r\n    justify-content: center;\r\n}\r\n\r\n.levels-window__card-descr {\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.levels-window__card-level.Easy {\r\n    color: #106d10;\r\n}\r\n\r\n.levels-window__card-level.Medium {\r\n    color: #9c8e12;\r\n}\r\n\r\n.levels-window__card-level.Hard {\r\n    color: #8f1d09;\r\n}\r\n\r\n@media (hover: hover) {\r\n    .button:hover {\r\n        background: rgb(194, 194, 194);\r\n    }\r\n\r\n    .button:disabled:hover {\r\n        background-color: #ffffff;\r\n    }\r\n\r\n    .levels-window__card:has(.Easy):hover {\r\n        background-color: #106d103d;\r\n    }\r\n\r\n    .levels-window__card:has(.Medium):hover {\r\n        background-color: #9c8e1263;\r\n    }\r\n\r\n    .levels-window__card:has(.Hard):hover {\r\n        background-color: #8f1d0952;\r\n    }\r\n}\r\n\r\n@import url('media.css');\r\n"],sourceRoot:""}]);const s=A},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var l=0;l<this.length;l++){var A=this[l][0];null!=A&&(i[A]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);t&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},i=[],l=0;l<n.length;l++){var A=n[l],s=t.base?A[0]+t.base:A[0],d=o[s]||0,c="".concat(s," ").concat(d);o[s]=d+1;var p=r(c),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=a(u,t);t.byIndex=l,e.splice(l,0,{identifier:c,updater:m,references:1})}i.push(c)}return i}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var l=r(o[i]);e[l].references--}for(var A=t(n,a),s=0;s<o.length;s++){var d=r(o[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=A}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{const n=[{name:"I-beam",level:"Easy",arr:[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]]},{name:"Chess board",level:"Easy",arr:[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]]},{name:"Space",level:"Easy",arr:[[0,0,0,0,0],[0,1,1,1,0],[0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0]]},{name:"Square",level:"Easy",arr:[[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1]]},{name:"Cross",level:"Easy",arr:[[1,1,0,1,1],[1,1,0,1,1],[0,0,0,0,0],[1,1,0,1,1],[1,1,0,1,1]]},{name:"Fence",level:"Easy",arr:[[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[1,1,1,1,1],[0,1,0,1,0]]},{name:"Smile",level:"Medium",arr:[[0,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,1,1,0,0],[0,0,1,1,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0]]},{name:"Face",level:"Medium",arr:[[0,1,1,1,0,0,1,1,1,0],[0,1,1,1,0,0,1,1,1,0],[0,1,1,1,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,0],[0,0,0,1,0,0,1,0,0,0],[0,0,0,1,1,1,1,0,0,0]]},{name:"Invert Face",level:"Medium",arr:[[1,0,0,0,1,1,0,0,0,1],[1,0,0,0,1,1,0,0,0,1],[1,0,0,0,1,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,0,1,1,0,1,1,1],[1,1,1,0,0,0,0,1,1,1]]},{name:"Robot",level:"Medium",arr:[[0,0,0,0,1,1,0,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,1,0,0,1,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,1,0],[0,1,0,1,1,1,1,0,1,0],[1,1,0,1,1,1,1,0,1,1],[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,0,0,1,1,0,0],[0,0,1,1,0,0,1,1,0,0]]},{name:"Satellite",level:"Medium",arr:[[1,0,0,0,0,1,1,1,1,1],[1,0,0,1,1,1,1,0,1,1],[1,0,1,0,1,1,0,1,1,1],[1,0,1,1,0,0,1,1,1,1],[1,1,1,1,0,0,1,1,0,1],[1,1,1,0,1,1,0,1,0,1],[1,1,0,1,1,1,1,0,0,1],[1,1,1,1,1,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]]},{name:"Slender Man",level:"Medium",arr:[[0,1,1,0,1,1,1,0,1,1],[0,0,1,0,1,1,1,0,1,0],[0,0,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1],[0,1,0,0,1,1,1,0,0,1],[0,1,0,0,1,1,1,0,0,1],[0,1,0,0,1,1,1,0,0,1],[0,1,0,0,1,0,1,0,0,1],[0,1,0,0,1,0,1,0,0,1],[0,1,0,0,1,0,1,0,0,1]]},{name:"RSS2024",level:"Hard",arr:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,1,1,1,0,0,1,1,1,0],[0,1,0,1,0,0,1,0,0,0,0,1,0,0,0],[0,1,1,1,0,0,1,1,1,0,0,1,1,1,0],[0,1,1,0,0,0,0,0,1,0,0,0,0,1,0],[0,1,0,1,0,0,0,0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,1,1,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,1,1,1,0,1,1,1,0,1,0,1],[0,0,1,0,1,0,1,0,0,0,1,0,1,0,1],[1,1,1,0,1,0,1,0,1,1,1,0,1,1,1],[1,0,0,0,1,0,1,0,1,0,0,0,0,0,1],[1,1,1,0,1,1,1,0,1,1,1,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Sandglass",level:"Hard",arr:[[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[0,0,0,1,1,0,0,1,0,0,1,1,0,0,0],[0,0,1,1,0,0,0,0,0,0,0,1,1,0,0],[0,1,1,0,0,0,0,1,0,0,0,0,1,1,0],[0,1,0,0,0,1,1,1,1,1,0,0,0,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0]]},{name:"Ship",level:"Hard",arr:[[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,1,1,0,0,0,1,0,1,0,1,0,0,1,1],[0,0,1,1,0,0,0,0,0,0,0,0,1,1,0],[0,0,0,1,1,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Giraffe",level:"Hard",arr:[[0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,1,0,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],[0,0,0,0,1,1,0,0,0,0,0,0,0,1,1],[0,0,0,0,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,1,0,1,0,0,1,0,0,1,0,0],[0,0,0,0,1,0,1,0,0,1,0,0,1,0,0],[0,0,0,0,1,0,1,0,0,1,0,0,1,0,0],[0,0,0,0,1,0,1,0,0,1,0,0,1,0,0],[0,0,0,0,1,0,1,0,0,1,0,0,1,0,0],[0,0,0,0,1,0,1,0,0,1,0,0,1,0,0],[0,0,0,0,1,0,1,1,0,1,1,0,1,1,1]]},{name:"Lama",level:"Hard",arr:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,1,1,0,0,0,0,0],[0,0,0,0,1,1,0,0,1,1,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],[0,0,0,1,0,1,0,0,1,0,1,0,0,0,0],[0,0,0,1,0,0,1,1,0,0,1,0,0,0,0],[0,0,0,1,0,0,1,1,0,0,1,0,0,0,0],[0,0,0,1,0,1,1,1,1,0,1,0,0,0,0],[0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]]},{name:"Flower",level:"Hard",arr:[[0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],[0,0,1,0,0,0,1,1,0,0,0,1,1,1,0],[0,0,1,1,0,0,0,1,0,0,1,1,1,0,0],[0,0,1,1,1,0,0,1,0,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,0,1,1,1,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]},{name:"Labyrinth",level:"Hard",arr:[[1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],[1,0,0,0,0,1,0,0,0,1,0,0,0,0,1],[1,0,1,1,1,1,0,1,1,1,0,0,1,1,1],[1,0,1,0,0,0,0,1,0,0,0,1,1,0,1],[1,0,1,0,1,0,0,1,0,0,0,1,0,0,1],[1,0,1,0,1,0,0,1,0,1,0,1,0,1,1],[1,0,0,0,1,1,1,1,1,1,0,0,0,0,1],[1,0,1,0,1,0,0,0,0,1,0,0,0,0,1],[1,0,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,0,1,0,1,1,1,1,1,0,1,0,1,0,1],[1,0,1,0,0,0,0,0,1,0,1,0,1,0,1],[1,0,1,0,0,0,1,1,0,0,0,0,0,0,1],[1,0,1,1,1,0,1,1,0,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1]]}];let e;const t=[],a=new Set,o=new Set;e=Math.floor(Math.random()*n.length);const i=n[e].arr,l=[n[e].name],A=[n[e].level],s=[!1],d=[!1];function c(n="div",e,r=[],t){const a=document.createElement(n);return e&&(a.id=e),Array.isArray(r)&&r.length>0&&r.forEach((n=>a.classList.add(n))),t&&(a.textContent=t),a}function p(){const n=["app__game-field_5x5","app__game-field_10x10","app__game-field_15x15"];E.classList.remove(...n),5===i.length?E.classList.add(n[0]):10===i.length?E.classList.add(n[1]):15===i.length&&E.classList.add(n[2])}function u(n){p();for(let e=0;e<n.length;e+=1)for(let r=0;r<n.length;r+=1){let o=c("div",`cell-${e}${r}`,["cell"]);4!==e&&9!==e&&14!==e&&19!==e||o.classList.add("border-bottom"),4!==r&&9!==r&&14!==r&&19!==r||o.classList.add("border-right"),E.append(o),n[e][r]&&a.add(o),t.push(o)}}function m(n){n.forEach(((n,e)=>{let r;r=c("div",`vertClue-${e+1}`,4===e||9===e||14===e?["cell","clues-row-vert","border-right-clue"]:["cell","clues-row-vert"]),Y.append(r),L.push(r)})),n.forEach(((n,e)=>{let r;r=c("div",`horClue-${e+1}`,4===e||9===e?["cell","clues-row-hor","border-bottom"]:["cell","clues-row-hor"]),D.append(r),S.push(r)}))}function f(n){let e=[];for(let r=0;r<n.length;r+=1){const t=[];let a=0;for(let e=0;e<n.length;e+=1)n[r][e]&&(a+=1),(0!==a&&0===n[r][e]||0!==a&&e===n.length-1)&&(t.push(a),a=0);e.push(t)}return e}function h(n){let e=[];for(let r=0;r<n.length;r+=1){const t=[];let a=0;for(let e=0;e<n.length;e+=1)n[e][r]&&(a+=1),(0!==a&&0===n[e][r]||0!==a&&e===n.length-1)&&(t.push(a),a=0);e.push(t)}return e}function g(n){const e=function(n){return{row:f(n),col:h(n)}}(n);L.forEach(((n,r)=>{e.col[r].forEach((e=>n.append(c("div",null,["clue"],e))))})),S.forEach(((n,r)=>{e.row[r].forEach((e=>n.append(c("div",null,["clue"],e))))}))}function C(){for(I&&(I.remove(),s[0]=!1,W.disabled=!1,j.disabled=!1,T.disabled=!1),d&&E.addEventListener("click",b),U.reset(),U.render(),t.forEach((n=>n.remove()));0!==t.length;)t.pop();const e=Math.floor(Math.random()*n.length);switch(u(n[e].arr),M.textContent=n[e].name,E.classList.remove("app__game-field_5x5","app__game-field_10x10","app__game-field_15x15"),n[e].level){case"Easy":E.classList.add("app__game-field_5x5");break;case"Medium":E.classList.add("app__game-field_10x10");break;case"Hard":E.classList.add("app__game-field_15x15")}for(S.forEach((n=>n.remove())),L.forEach((n=>n.remove()));S.length>0;)S.pop();for(;L.length>0;)L.pop();l[0]=n[e].name,A[0]=n[e].level,m(n[e].arr),g(n[e].arr)}let I,v;function b(n){var e;n.preventDefault(),n.target.classList.contains("cell")&&((e=n.target).classList.remove("crossed"),e.classList.toggle("picked"),o.has(e)?o.delete(e):o.add(e),o.size===a.size&&([...o].every((n=>a.has(n)))&&(function(){I=c("div","win-modal");const n=c("p",null,"modal__text",`Great! You have solved the nonogram in ${U.getTime()} seconds!`),e=c("button","random-game-btn",["button"],"Play Random Game");e.addEventListener("click",C),I.append(n,e),R.before(I,R),U.stop(),W.disabled=!0,j.disabled=!0,T.disabled=!0}(),s[0]=!0,d[0]=!0,E.removeEventListener("click",b),function(){let n=JSON.parse(localStorage.getItem("savedRecords_ULIKE"));n||(n=[]);const e={time:U.getTime(),level:`"${l[0]}" (${A[0]})`};n.push(e),n.length>1&&n.sort(((n,e)=>n.time-e.time)),n.length>5&&n.pop(),localStorage.setItem("savedRecords_ULIKE",JSON.stringify(n))}())),U.getStatus()||s[0]||U.start())}function B(){t.forEach((n=>{n.classList.remove("picked","crossed")})),o.clear(),j.disabled=!1,d&&E.addEventListener("click",b)}function w(){const n=[],r=[];t.forEach((e=>{e.classList.contains("picked")&&n.push(e.id),e.classList.contains("crossed")&&r.push(e.id)})),localStorage.setItem("savedPickedCells_ULIKE",JSON.stringify(n)),localStorage.setItem("savedCrossedCells_ULIKE",JSON.stringify(r)),localStorage.setItem("passedTime_ULIKE",U.getTime()),localStorage.setItem("prevGameIndex_ULIKE",e),z.disabled=!1}class x{constructor(n,e){this.time=n,this.parent=e,this.isStarted=!1,this.table=c("span","timer",null,this.convertTime())}render(){this.table.remove(),this.table=c("span","timer",null,this.convertTime()),this.parent.append(this.table)}increment(){this.time+=1}start(){this.isStarted||(this.counter=setInterval((()=>{this.increment(),this.table.remove(),this.render()}),1e3),this.isStarted=!0)}stop(){clearInterval(this.counter),this.isStarted=!1}getTime(){return this.time}reset(){clearInterval(this.counter),this.time=0}convertTime(){if(this.time<10)return`00:0${this.time}`;if(this.time<60)return`00:${this.time}`;let n=Math.floor(this.time/60),e=this.time%60;return n<10&&(n=`0${n}`),e<10&&(e=`0${e}`),`${n}:${e}`}getStatus(){return this.isStarted}setTime(n){this.time=n}}function _(){N.disabled=!0;const n=U.getStatus();U.stop();const e=c("div",null,["score-table"]),r=c("button",null,["score-table__btn","button"],"Close Score Table");r.addEventListener("click",(()=>{return r=e,t=n,N.disabled=!1,t&&U.start(),void r.remove();var r,t}));const t=c("h2",null,["score-table__header"],"Hight Score Table");let a=c("p",null,["score-table__header"],"Nothing to show yet...");const o=JSON.parse(localStorage.getItem("savedRecords_ULIKE"));o&&(a=function(n){const e=c("ol",null,["score-table__item-wrapper"]);return n.forEach((n=>{const r=c("li",null,["score-table__item"],`The nonogram ${n.level} was completed in ${n.time} s`);e.append(r)})),e}(o)),e.append(t,a,r),H.append(e)}function y(){O.classList.toggle("switched")}function k(){H.classList.add("hidden"),v.classList.remove("hidden")}const E=c("section",null,["app__game-field"]),L=[],S=[];let j,W,z,T,M,U,Q,R,Y,D,H,N,O,X;var Z=r(379),$=r.n(Z),K=r(795),J=r.n(K),q=r(569),G=r.n(q),P=r(565),F=r.n(P),V=r(216),nn=r.n(V),en=r(589),rn=r.n(en),tn=r(174),an={};an.styleTagTransform=rn(),an.setAttributes=F(),an.insert=G().bind(null,"head"),an.domAPI=J(),an.insertStyleElement=nn(),$()(tn.Z,an),tn.Z&&tn.Z.locals&&tn.Z.locals,function(e){const r=document.body;H=c("main",null,["app"]);const i=c("section",null,["app__header"]),p=c("section",null,["app__footer"]),f=c("button","change-theme-btn",["button","button-switcher"]);O=c("div",null,["button__slider"]),f.append(O),f.addEventListener("click",y),N=c("button","high-score-btn",["button"],"Score Table"),N.addEventListener("click",_),Q=c("div","time-info",null,"Time passed: "),U=new x(0,Q),U.render(),X=c("button","options-btn",["button"],"Choose Level"),X.addEventListener("click",k),j=c("button","save-game-btn",["button"],"Save Game"),j.addEventListener("click",w),z=c("button","continue-game-btn",["button"],"Continue Game"),z.addEventListener("click",(()=>{!function(){const e=+localStorage.getItem("prevGameIndex_ULIKE");if(e){M.textContent=n[e].name,a.clear(),o.clear();const r=JSON.parse(localStorage.getItem("savedPickedCells_ULIKE")),i=JSON.parse(localStorage.getItem("savedCrossedCells_ULIKE"));for(t.forEach((n=>n.remove()));0!==t.length;)t.pop();u(n[e].arr),l[0]=n[e].name,A[0]=n[e].level,t.forEach((n=>{-1!==i.indexOf(n.id)&&n.classList.add("crossed"),-1!==r.indexOf(n.id)&&(n.classList.add("picked"),o.add(n))})),U.stop();const c=JSON.parse(localStorage.getItem("passedTime_ULIKE"));switch(c?U.setTime(c):U.setTime(0),U.render(),I&&I.remove(),s[0]=!1,W.disabled=!1,j.disabled=!1,T.disabled=!1,d&&E.addEventListener("click",b),E.classList.remove("app__game-field_5x5","app__game-field_10x10","app__game-field_15x15"),n[e].level){case"Easy":E.classList.add("app__game-field_5x5");break;case"Medium":E.classList.add("app__game-field_10x10");break;case"Hard":E.classList.add("app__game-field_15x15")}for(S.forEach((n=>n.remove())),L.forEach((n=>n.remove()));S.length>0;)S.pop();for(;L.length>0;)L.pop();m(n[e].arr),g(n[e].arr)}}()})),localStorage.getItem("savedPickedCells_ULIKE"),localStorage.getItem("savedCrossedCells_ULIKE")||(z.disabled=!0),T=c("button","reset-game-btn",["button"],"Reset Game"),T.addEventListener("click",B),W=c("button","show-solution-btn",["button"],"Show Solution"),W.addEventListener("click",(()=>{B(),[...a].forEach((n=>n.classList.add("picked"))),j.disabled=!0,d[0]=!0,E.removeEventListener("click",b),U.stop()})),D=c("div","horizontal-clues",["clues-row","clues-row_horizontal"]);const h=c("div","vertical-clues",["clues-row","clues-row_vertical"]);Y=c("div","vertical-clues-wrapper"),h.append(c("div","space-fill")),m(e),h.append(Y);const C=c("div","inner-wrapper");R=c("div","game-field-wapper"),R.append(h,C),i.append(f,N,X),p.append(j,z,T,W),C.append(D,E),M=c("p",null,["info-box"],l[0]),H.append(i,M,Q,R,p),r.append(H),E.addEventListener("click",b),E.addEventListener("contextmenu",(n=>{var e;n.preventDefault(),n.target.classList.contains("cell")&&((e=n.target).classList.remove("picked"),e.classList.toggle("crossed"),o.has(e)&&o.delete(e))}))}(i),u(i),g(i),function(){v=c("section",null,["levels-window"]);const e=c("p",null,["levels-window__header"],"Choose nonogram..."),r=c("div",null,["levels-window__wrapper"]),t=c("button",null,["button","levels-window__button"],"Close");var a;t.addEventListener("click",(()=>{v.classList.add("hidden"),H.classList.remove("hidden")})),a=r,n.forEach((n=>{const e=c("article",null,["levels-window__card"]),r=c("h2",null,["levels-window__card-descr"],n.name),t=c("p",null,["levels-window__card-level",n.level],n.level);e.append(r,t),a.append(e)})),v.append(e,r,t),document.body.append(v),v.classList.add("hidden")}()})()})();
//# sourceMappingURL=index.js.map