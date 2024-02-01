(()=>{"use strict";var e={118:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(537),a=r.n(t),o=r(645),i=r.n(o)()(a());i.push([e.id,"@media (max-width: 600px) {\n    body .app {\n        margin: 5px auto;\n        width: 95vw;\n    }\n\n    #game-field-wapper .cell,\n    #game-field-wapper .clue {\n        width: 20px;\n        height: 20px;\n        font-size: 10px;\n    }\n\n    #game-field-wapper .clues-row-vert {\n        height: auto;\n    }\n    #game-field-wapper .clues-row-hor {\n        width: auto;\n    }\n    #game-field-wapper .clues-row-hor .clue {\n        width: 10px;\n    }\n    .cell.border-right {\n        border-right: none;\n        margin-right: 1px;\n    }\n    .cell.border-bottom {\n        border-bottom: none;\n        margin-bottom: 1px;\n    }\n\n    #vertical-clues-wrapper .border-right-clue {\n        margin-right: 1px;\n    }\n}\n","",{version:3,sources:["webpack://./css/media500.css"],names:[],mappings:"AAAA;IACI;QACI,gBAAgB;QAChB,WAAW;IACf;;IAEA;;QAEI,WAAW;QACX,YAAY;QACZ,eAAe;IACnB;;IAEA;QACI,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;QACI,WAAW;IACf;IACA;QACI,kBAAkB;QAClB,iBAAiB;IACrB;IACA;QACI,mBAAmB;QACnB,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;IACrB;AACJ",sourcesContent:["@media (max-width: 600px) {\r\n    body .app {\r\n        margin: 5px auto;\r\n        width: 95vw;\r\n    }\r\n\r\n    #game-field-wapper .cell,\r\n    #game-field-wapper .clue {\r\n        width: 20px;\r\n        height: 20px;\r\n        font-size: 10px;\r\n    }\r\n\r\n    #game-field-wapper .clues-row-vert {\r\n        height: auto;\r\n    }\r\n    #game-field-wapper .clues-row-hor {\r\n        width: auto;\r\n    }\r\n    #game-field-wapper .clues-row-hor .clue {\r\n        width: 10px;\r\n    }\r\n    .cell.border-right {\r\n        border-right: none;\r\n        margin-right: 1px;\r\n    }\r\n    .cell.border-bottom {\r\n        border-bottom: none;\r\n        margin-bottom: 1px;\r\n    }\r\n\r\n    #vertical-clues-wrapper .border-right-clue {\r\n        margin-right: 1px;\r\n    }\r\n}\r\n"],sourceRoot:""}]);const l=i},174:(e,n,r)=>{r.d(n,{Z:()=>A});var t=r(537),a=r.n(t),o=r(645),i=r.n(o),l=r(118),s=i()(a());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,100;1,300&display=swap);"]),s.i(l.Z),s.push([e.id,":root {\n    --win-text: #106d10;\n}\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.app {\n    position: relative;\n    margin: 40px auto;\n    width: 80vw;\n    outline: 1px solid black;\n    font-family: Roboto;\n    font-size: 18px;\n    min-width: 300px;\n    max-width: 800px;\n    overflow: hidden;\n}\n\n.app__header,\n.app__footer {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px;\n}\n\n.app__game-field {\n    display: grid;\n    background: black;\n}\n\n.app__game-field_5x5 {\n    grid-template-columns: repeat(5, auto);\n    grid-template-rows: repeat(5, auto);\n}\n\n.app__game-field_10x10 {\n    grid-template-columns: repeat(10, auto);\n    grid-template-rows: repeat(10, auto);\n}\n\n.app__game-field_15x15 {\n    grid-template-columns: repeat(15, auto);\n    grid-template-rows: repeat(15, auto);\n}\n\n.cell {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #d4d4d4;\n    background: #ffffff;\n}\n\n.button {\n    cursor: pointer;\n    background: #ffffff;\n    height: 60px;\n    width: 100px;\n    border-radius: 6px;\n    font-family: Roboto;\n    transition: all 0.5s;\n    font-size: 18px;\n}\n\n.button:disabled {\n    cursor: default;\n}\n\n#vertical-clues,\n#horizontal-clues {\n    display: flex;\n    background: #000000;\n}\n\n#vertical-clues {\n    justify-content: flex-end;\n    background: #ffffff;\n}\n\n#vertical-clues-wrapper {\n    display: flex;\n    border-bottom: 3px solid #000000;\n    background: #000000;\n}\n\n#horizontal-clues {\n    flex-direction: column;\n    border-right: 3px solid #000000;\n}\n\n#inner-wrapper {\n    display: flex;\n}\n\n#game-field-wapper {\n    width: min-content;\n    margin: 0 auto;\n    padding: 20px 0;\n}\n\n.clue {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 30px;\n    width: 30px;\n}\n\n.clues-row-vert {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex-direction: column;\n    height: auto;\n}\n\n.clues-row-hor {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    width: auto;\n}\n\n.border-bottom {\n    /* border-bottom: 3px solid #000000; */\n    margin-bottom: 3px;\n}\n\n.border-right {\n    margin-right: 3px;\n    /* border-right: 3px solid #000000; */\n}\n\n.border-right-clue {\n    margin-right: 3px;\n}\n\n#space-fill {\n    background: #ffffff;\n    width: 100%;\n    border-left: 1px solid #ffffff;\n}\n\n.picked {\n    background: #000000;\n}\n\n.crossed {\n    position: relative;\n}\n.crossed::after {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #000000;\n    top: 50%;\n    transform: rotate(45deg);\n}\n.crossed::before {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #000000;\n    top: 50%;\n    transform: rotate(-45deg);\n}\n\n#continue-game-btn {\n    font-size: 17px;\n}\n\n.info-box {\n    text-align: center;\n    font-weight: 700;\n}\n\n#time-info {\n    text-align: center;\n    margin: 10px 0 0 0;\n}\n\n#win-modal {\n    display: block;\n    height: max-content;\n    width: 100%;\n    padding: 25px 0 0 0;\n    text-align: center;\n    color: var(--win-text);\n}\n\n#random-game-btn {\n    font-size: 16px;\n    height: 40px;\n    width: 160px;\n    margin-top: 5px;\n}\n\n.score-table {\n    display: flex;\n    position: absolute;\n    width: 100%;\n    background-color: #ffffff;\n    min-height: 90%;\n    top: 70px;\n    padding: 20px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n.score-table__btn {\n    width: 170px;\n    height: 40px;\n}\n\n.score-table__item-wrapper {\n    padding: 0 15px;\n}\n\n.score-table__item {\n    margin-top: 15px;\n}\n\n@media (hover: hover) {\n    .button:hover {\n        background: rgb(194, 194, 194);\n    }\n\n    .button:disabled:hover {\n        background-color: #ffffff;\n    }\n}\n","",{version:3,sources:["webpack://./css/style.css"],names:[],mappings:"AAEA;IACI,mBAAmB;AACvB;AACA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;IACX,wBAAwB;IACxB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,uCAAuC;IACvC,oCAAoC;AACxC;;AAEA;IACI,uCAAuC;IACvC,oCAAoC;AACxC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;AACzC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,QAAQ;IACR,wBAAwB;AAC5B;AACA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,QAAQ;IACR,yBAAyB;AAC7B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,yBAAyB;IACzB,eAAe;IACf,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI;QACI,8BAA8B;IAClC;;IAEA;QACI,yBAAyB;IAC7B;AACJ",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,100;1,300&display=swap');\r\n\r\n:root {\r\n    --win-text: #106d10;\r\n}\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.app {\r\n    position: relative;\r\n    margin: 40px auto;\r\n    width: 80vw;\r\n    outline: 1px solid black;\r\n    font-family: Roboto;\r\n    font-size: 18px;\r\n    min-width: 300px;\r\n    max-width: 800px;\r\n    overflow: hidden;\r\n}\r\n\r\n.app__header,\r\n.app__footer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 5px;\r\n}\r\n\r\n.app__game-field {\r\n    display: grid;\r\n    background: black;\r\n}\r\n\r\n.app__game-field_5x5 {\r\n    grid-template-columns: repeat(5, auto);\r\n    grid-template-rows: repeat(5, auto);\r\n}\r\n\r\n.app__game-field_10x10 {\r\n    grid-template-columns: repeat(10, auto);\r\n    grid-template-rows: repeat(10, auto);\r\n}\r\n\r\n.app__game-field_15x15 {\r\n    grid-template-columns: repeat(15, auto);\r\n    grid-template-rows: repeat(15, auto);\r\n}\r\n\r\n.cell {\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 1px solid #d4d4d4;\r\n    background: #ffffff;\r\n}\r\n\r\n.button {\r\n    cursor: pointer;\r\n    background: #ffffff;\r\n    height: 60px;\r\n    width: 100px;\r\n    border-radius: 6px;\r\n    font-family: Roboto;\r\n    transition: all 0.5s;\r\n    font-size: 18px;\r\n}\r\n\r\n.button:disabled {\r\n    cursor: default;\r\n}\r\n\r\n#vertical-clues,\r\n#horizontal-clues {\r\n    display: flex;\r\n    background: #000000;\r\n}\r\n\r\n#vertical-clues {\r\n    justify-content: flex-end;\r\n    background: #ffffff;\r\n}\r\n\r\n#vertical-clues-wrapper {\r\n    display: flex;\r\n    border-bottom: 3px solid #000000;\r\n    background: #000000;\r\n}\r\n\r\n#horizontal-clues {\r\n    flex-direction: column;\r\n    border-right: 3px solid #000000;\r\n}\r\n\r\n#inner-wrapper {\r\n    display: flex;\r\n}\r\n\r\n#game-field-wapper {\r\n    width: min-content;\r\n    margin: 0 auto;\r\n    padding: 20px 0;\r\n}\r\n\r\n.clue {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n.clues-row-vert {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    height: auto;\r\n}\r\n\r\n.clues-row-hor {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    width: auto;\r\n}\r\n\r\n.border-bottom {\r\n    /* border-bottom: 3px solid #000000; */\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.border-right {\r\n    margin-right: 3px;\r\n    /* border-right: 3px solid #000000; */\r\n}\r\n\r\n.border-right-clue {\r\n    margin-right: 3px;\r\n}\r\n\r\n#space-fill {\r\n    background: #ffffff;\r\n    width: 100%;\r\n    border-left: 1px solid #ffffff;\r\n}\r\n\r\n.picked {\r\n    background: #000000;\r\n}\r\n\r\n.crossed {\r\n    position: relative;\r\n}\r\n.crossed::after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    height: 1px;\r\n    width: 100%;\r\n    background: #000000;\r\n    top: 50%;\r\n    transform: rotate(45deg);\r\n}\r\n.crossed::before {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    height: 1px;\r\n    width: 100%;\r\n    background: #000000;\r\n    top: 50%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n#continue-game-btn {\r\n    font-size: 17px;\r\n}\r\n\r\n.info-box {\r\n    text-align: center;\r\n    font-weight: 700;\r\n}\r\n\r\n#time-info {\r\n    text-align: center;\r\n    margin: 10px 0 0 0;\r\n}\r\n\r\n#win-modal {\r\n    display: block;\r\n    height: max-content;\r\n    width: 100%;\r\n    padding: 25px 0 0 0;\r\n    text-align: center;\r\n    color: var(--win-text);\r\n}\r\n\r\n#random-game-btn {\r\n    font-size: 16px;\r\n    height: 40px;\r\n    width: 160px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.score-table {\r\n    display: flex;\r\n    position: absolute;\r\n    width: 100%;\r\n    background-color: #ffffff;\r\n    min-height: 90%;\r\n    top: 70px;\r\n    padding: 20px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n.score-table__btn {\r\n    width: 170px;\r\n    height: 40px;\r\n}\r\n\r\n.score-table__item-wrapper {\r\n    padding: 0 15px;\r\n}\r\n\r\n.score-table__item {\r\n    margin-top: 15px;\r\n}\r\n\r\n@media (hover: hover) {\r\n    .button:hover {\r\n        background: rgb(194, 194, 194);\r\n    }\r\n\r\n    .button:disabled:hover {\r\n        background-color: #ffffff;\r\n    }\r\n}\r\n\r\n@import url('media500.css');\r\n"],sourceRoot:""}]);const A=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var A=0;A<e.length;A++){var d=[].concat(e[A]);t&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},537:e=>{e.exports=function(e){var n=e[1],r=e[3];if(!r)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),o="/*# ".concat(a," */");return[n].concat([o]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},i=[],l=0;l<e.length;l++){var s=e[l],A=t.base?s[0]+t.base:s[0],d=o[A]||0,c="".concat(A," ").concat(d);o[A]=d+1;var p=r(c),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var u=a(m,t);t.byIndex=l,n.splice(l,0,{identifier:c,updater:u,references:1})}i.push(c)}return i}function a(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=r(o[i]);n[l].references--}for(var s=t(e,a),A=0;A<o.length;A++){var d=r(o[A]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,r),o.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nc=void 0,(()=>{const e=[{name:"I-beam",level:"Easy",arr:[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]]},{name:"Chess board",level:"Easy",arr:[[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]]},{name:"Space",level:"Easy",arr:[[0,0,0,0,0],[0,1,1,1,0],[0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0]]},{name:"Square",level:"Easy",arr:[[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1]]},{name:"Cross",level:"Easy",arr:[[1,1,0,1,1],[1,1,0,1,1],[0,0,0,0,0],[1,1,0,1,1],[1,1,0,1,1]]},{name:"Fence",level:"Easy",arr:[[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[1,1,1,1,1],[0,1,0,1,0]]},{name:"Smile",level:"Medium",arr:[[0,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,1,1,0,0],[0,0,1,1,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0]]},{name:"Face",level:"Medium",arr:[[0,1,1,1,0,0,1,1,1,0],[0,1,1,1,0,0,1,1,1,0],[0,1,1,1,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,0],[0,0,0,1,0,0,1,0,0,0],[0,0,0,1,1,1,1,0,0,0]]},{name:"Invert Face",level:"Medium",arr:[[1,0,0,0,1,1,0,0,0,1],[1,0,0,0,1,1,0,0,0,1],[1,0,0,0,1,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,0,1,1,0,1,1,1],[1,1,1,0,0,0,0,1,1,1]]},{name:"Robot",level:"Medium",arr:[[0,0,0,0,1,1,0,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,1,0,0,1,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,1,0],[0,1,0,1,1,1,1,0,1,0],[1,1,0,1,1,1,1,0,1,1],[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,0,0,1,1,0,0],[0,0,1,1,0,0,1,1,0,0]]},{name:"Satellite",level:"Medium",arr:[[1,0,0,0,0,1,1,1,1,1],[1,0,0,1,1,1,1,0,1,1],[1,0,1,0,1,1,0,1,1,1],[1,0,1,1,0,0,1,1,1,1],[1,1,1,1,0,0,1,1,0,1],[1,1,1,0,1,1,0,1,0,1],[1,1,0,1,1,1,1,0,0,1],[1,1,1,1,1,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]]},{name:"Slender Man",level:"Medium",arr:[[0,1,1,0,1,1,1,0,1,1],[0,0,1,0,1,1,1,0,1,0],[0,0,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1],[0,1,0,0,1,1,1,0,0,1],[0,1,0,0,1,1,1,0,0,1],[0,1,0,0,1,1,1,0,0,1],[0,1,0,0,1,0,1,0,0,1],[0,1,0,0,1,0,1,0,0,1],[0,1,0,0,1,0,1,0,0,1]]},{name:"RSS2024",level:"Hard",arr:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,1,1,1,0,0,1,1,1,0],[0,1,0,1,0,0,1,0,0,0,0,1,0,0,0],[0,1,1,1,0,0,1,1,1,0,0,1,1,1,0],[0,1,1,0,0,0,0,0,1,0,0,0,0,1,0],[0,1,0,1,0,0,0,0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,1,1,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,1,1,1,0,1,1,1,0,1,0,1],[0,0,1,0,1,0,1,0,0,0,1,0,1,0,1],[1,1,1,0,1,0,1,0,1,1,1,0,1,1,1],[1,0,0,0,1,0,1,0,1,0,0,0,0,0,1],[1,1,1,0,1,1,1,0,1,1,1,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Sandglass",level:"Hard",arr:[[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[0,0,0,1,1,0,0,1,0,0,1,1,0,0,0],[0,0,1,1,0,0,0,0,0,0,0,1,1,0,0],[0,1,1,0,0,0,0,1,0,0,0,0,1,1,0],[0,1,0,0,0,1,1,1,1,1,0,0,0,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0]]},{name:"Ship",level:"Hard",arr:[[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,1,1,0,0,0,1,0,1,0,1,0,0,1,1],[0,0,1,1,0,0,0,0,0,0,0,0,1,1,0],[0,0,0,1,1,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Giraffe",level:"Hard",arr:[[0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,1,0,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],[0,0,0,0,1,1,0,0,0,0,0,0,0,1,1],[0,0,0,0,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,1,0,1,0,0,1,0,0,1,0,0],[0,0,0,0,1,0,1,0,0,1,0,0,1,0,0],[0,0,0,0,1,0,1,0,0,1,0,0,1,0,0],[0,0,0,0,1,0,1,0,0,1,0,0,1,0,0],[0,0,0,0,1,0,1,0,0,1,0,0,1,0,0],[0,0,0,0,1,0,1,0,0,1,0,0,1,0,0],[0,0,0,0,1,0,1,1,0,1,1,0,1,1,1]]},{name:"Lama",level:"Hard",arr:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,1,1,0,0,0,0,0],[0,0,0,0,1,1,0,0,1,1,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],[0,0,0,1,0,1,0,0,1,0,1,0,0,0,0],[0,0,0,1,0,0,1,1,0,0,1,0,0,0,0],[0,0,0,1,0,0,1,1,0,0,1,0,0,0,0],[0,0,0,1,0,1,1,1,1,0,1,0,0,0,0],[0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]]},{name:"Flower",level:"Hard",arr:[[0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],[0,0,1,0,0,0,1,1,0,0,0,1,1,1,0],[0,0,1,1,0,0,0,1,0,0,1,1,1,0,0],[0,0,1,1,1,0,0,1,0,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,0,1,1,1,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]},{name:"Labyrinth",level:"Hard",arr:[[1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],[1,0,0,0,0,1,0,0,0,1,0,0,0,0,1],[1,0,1,1,1,1,0,1,1,1,0,0,1,1,1],[1,0,1,0,0,0,0,1,0,0,0,1,1,0,1],[1,0,1,0,1,0,0,1,0,0,0,1,0,0,1],[1,0,1,0,1,0,0,1,0,1,0,1,0,1,1],[1,0,0,0,1,1,1,1,1,1,0,0,0,0,1],[1,0,1,0,1,0,0,0,0,1,0,0,0,0,1],[1,0,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,0,1,0,1,1,1,1,1,0,1,0,1,0,1],[1,0,1,0,0,0,0,0,1,0,1,0,1,0,1],[1,0,1,0,0,0,1,1,0,0,0,0,0,0,1],[1,0,1,1,1,0,1,1,0,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1]]}];let n;const t=[],a=new Set,o=new Set;n=Math.floor(Math.random()*e.length);const i=e[n].arr,l=[e[n].name],s=[e[n].level],A=[!1];function d(e="div",n,r=[],t){const a=document.createElement(e);return n&&(a.id=n),Array.isArray(r)&&r.length>0&&r.forEach((e=>a.classList.add(e))),t&&(a.textContent=t),a}function c(){t.forEach((e=>{e.classList.remove("picked","crossed")})),o.clear(),E.disabled=!1}function p(){const e=[],r=[];t.forEach((n=>{n.classList.contains("picked")&&e.push(n.id),n.classList.contains("crossed")&&r.push(n.id)})),localStorage.setItem("savedPickedCells_ULIKE",JSON.stringify(e)),localStorage.setItem("savedCrossedCells_ULIKE",JSON.stringify(r)),localStorage.setItem("passedTime_ULIKE",T.getTime()),localStorage.setItem("prevGameIndex_ULIKE",n),S.disabled=!1}function m(){const e=["app__game-field_5x5","app__game-field_10x10","app__game-field_15x15"];w.classList.remove(...e),5===i.length?w.classList.add(e[0]):10===i.length?w.classList.add(e[1]):15===i.length&&w.classList.add(e[2])}function u(e){m();for(let n=0;n<e.length;n+=1)for(let r=0;r<e.length;r+=1){let o=d("div",`cell-${n}${r}`,["cell"]);4!==n&&9!==n&&14!==n&&19!==n||o.classList.add("border-bottom"),4!==r&&9!==r&&14!==r&&19!==r||o.classList.add("border-right"),w.append(o),e[n][r]&&a.add(o),t.push(o)}}function f(e){var n;e.preventDefault(),e.target.classList.contains("cell")&&((n=e.target).classList.remove("crossed"),n.classList.toggle("picked"),o.has(n)?o.delete(n):o.add(n),o.size===a.size&&([...o].every((e=>a.has(e)))&&(function(){B=d("div","win-modal");const e=d("p",null,"modal__text",`Great! You have solved the nonogram in ${T.getTime()} seconds!`),n=d("button","random-game-btn",["button"],"Play Random Game");n.addEventListener("click",I),B.append(e,n),Y.before(B,Y),T.stop(),k.disabled=!0,E.disabled=!0,L.disabled=!0}(),A[0]=!0,w.removeEventListener("click",f),function(){let e=JSON.parse(localStorage.getItem("savedRecords_ULIKE"));e||(e=[]);const n={time:T.getTime(),level:`"${l[0]}" (${s[0]})`};e.push(n),e.length>1&&e.sort(((e,n)=>e.time-n.time)),e.length>5&&e.pop(),localStorage.setItem("savedRecords_ULIKE",JSON.stringify(e))}())),T.getStatus()||A[0]||T.start())}function g(e){e.forEach(((e,n)=>{let r;r=d("div",`vertClue-${n+1}`,4===n||9===n||14===n?["cell","clues-row-vert","border-right-clue"]:["cell","clues-row-vert"]),j.append(r),_.push(r)})),e.forEach(((e,n)=>{let r;r=d("div",`horClue-${n+1}`,4===n||9===n?["cell","clues-row-hor","border-bottom"]:["cell","clues-row-hor"]),M.append(r),y.push(r)}))}function h(e){let n=[];for(let r=0;r<e.length;r+=1){const t=[];let a=0;for(let n=0;n<e.length;n+=1)e[r][n]&&(a+=1),(0!==a&&0===e[r][n]||0!==a&&n===e.length-1)&&(t.push(a),a=0);n.push(t)}return n}function C(e){let n=[];for(let r=0;r<e.length;r+=1){const t=[];let a=0;for(let n=0;n<e.length;n+=1)e[n][r]&&(a+=1),(0!==a&&0===e[n][r]||0!==a&&n===e.length-1)&&(t.push(a),a=0);n.push(t)}return n}function b(e){const n=function(e){return{row:h(e),col:C(e)}}(e);_.forEach(((e,r)=>{n.col[r].forEach((n=>e.append(d("div",null,["clue"],n))))})),y.forEach(((e,r)=>{n.row[r].forEach((n=>e.append(d("div",null,["clue"],n))))}))}function I(){for(B&&(B.remove(),w.addEventListener("click",f),A[0]=!1,k.disabled=!1,E.disabled=!1,L.disabled=!1),T.reset(),T.render(),t.forEach((e=>e.remove()));0!==t.length;)t.pop();const n=Math.floor(Math.random()*e.length);switch(u(e[n].arr),W.textContent=e[n].name,w.classList.remove("app__game-field_5x5","app__game-field_10x10","app__game-field_15x15"),e[n].level){case"Easy":w.classList.add("app__game-field_5x5");break;case"Medium":w.classList.add("app__game-field_10x10");break;case"Hard":w.classList.add("app__game-field_15x15")}for(y.forEach((e=>e.remove())),_.forEach((e=>e.remove()));y.length>0;)y.pop();for(;_.length>0;)_.pop();l[0]=e[n].name,s[0]=e[n].level,g(e[n].arr),b(e[n].arr)}let B;class v{constructor(e,n){this.time=e,this.parent=n,this.isStarted=!1,this.table=d("span","timer",null,this.convertTime())}render(){this.table.remove(),this.table=d("span","timer",null,this.convertTime()),this.parent.append(this.table)}increment(){this.time+=1}start(){this.isStarted||(this.counter=setInterval((()=>{this.increment(),this.table.remove(),this.render()}),1e3),this.isStarted=!0)}stop(){clearInterval(this.counter),this.isStarted=!1}getTime(){return this.time}reset(){clearInterval(this.counter),this.time=0}convertTime(){if(this.time<10)return`00:0${this.time}`;if(this.time<60)return`00:${this.time}`;let e=Math.floor(this.time/60),n=this.time%60;return e<10&&(e=`0${e}`),n<10&&(n=`0${n}`),`${e}:${n}`}getStatus(){return this.isStarted}setTime(e){this.time=e}}function x(){Q.disabled=!0;const e=T.getStatus();T.stop();const n=d("div",null,["score-table"]),r=d("button",null,["score-table__btn","button"],"Close Score Table");r.addEventListener("click",(()=>{return r=n,t=e,Q.disabled=!1,t&&T.start(),void r.remove();var r,t}));const t=d("h2",null,["score-table__header"],"Hight Score Table");let a=d("p",null,["score-table__header"],"Nothing to show yet...");const o=JSON.parse(localStorage.getItem("savedRecords_ULIKE"));o&&(a=function(e){const n=d("ol",null,["score-table__item-wrapper"]);return e.forEach((e=>{const r=d("li",null,["score-table__item"],`The nonogram ${e.level} was completed in ${e.time} s`);n.append(r)})),n}(o)),n.append(t,a,r),R.append(n)}const w=d("section",null,["app__game-field"]),_=[],y=[];let E,k,S,L,W,T,z,Y,j,M,R,Q;var U=r(379),O=r.n(U),Z=r(795),$=r.n(Z),N=r(569),H=r.n(N),K=r(565),J=r.n(K),X=r(216),G=r.n(X),P=r(589),F=r.n(P),q=r(174),D={};D.styleTagTransform=F(),D.setAttributes=J(),D.insert=H().bind(null,"head"),D.domAPI=$(),D.insertStyleElement=G(),O()(q.Z,D),q.Z&&q.Z.locals&&q.Z.locals,function(n){const r=document.body;R=d("main",null,["app"]);const i=d("section",null,["app__header"]),m=d("section",null,["app__footer"]),h=d("button","change-theme-btn",["button"],"Change Theme");Q=d("button","high-scrore-btn",["button"],"High Score Table"),Q.addEventListener("click",x),z=d("div","time-info",null,"Time passed: "),T=new v(0,z),T.render();const C=d("button","options-btn",["button"],"Game Options");E=d("button","save-game-btn",["button"],"Save Game"),E.addEventListener("click",p),S=d("button","continue-game-btn",["button"],"Continue Saved Game"),S.addEventListener("click",(()=>{!function(){const n=+localStorage.getItem("prevGameIndex_ULIKE");if(n){W.textContent=e[n].name,a.clear(),o.clear();const r=JSON.parse(localStorage.getItem("savedPickedCells_ULIKE")),i=JSON.parse(localStorage.getItem("savedCrossedCells_ULIKE"));for(t.forEach((e=>e.remove()));0!==t.length;)t.pop();u(e[n].arr),l[0]=e[n].name,s[0]=e[n].level,t.forEach((e=>{-1!==i.indexOf(e.id)&&e.classList.add("crossed"),-1!==r.indexOf(e.id)&&(e.classList.add("picked"),o.add(e))})),T.stop();const d=JSON.parse(localStorage.getItem("passedTime_ULIKE"));switch(d?T.setTime(d):T.setTime(0),T.render(),B&&(B.remove(),w.addEventListener("click",f),A[0]=!1,k.disabled=!1,E.disabled=!1,L.disabled=!1),w.classList.remove("app__game-field_5x5","app__game-field_10x10","app__game-field_15x15"),e[n].level){case"Easy":w.classList.add("app__game-field_5x5");break;case"Medium":w.classList.add("app__game-field_10x10");break;case"Hard":w.classList.add("app__game-field_15x15")}for(y.forEach((e=>e.remove())),_.forEach((e=>e.remove()));y.length>0;)y.pop();for(;_.length>0;)_.pop();g(e[n].arr),b(e[n].arr)}}()})),localStorage.getItem("savedPickedCells_ULIKE"),localStorage.getItem("savedCrossedCells_ULIKE")||(S.disabled=!0),L=d("button","reset-game-btn",["button"],"Reset Game"),L.addEventListener("click",c),k=d("button","show-solution-btn",["button"],"Show Solution"),k.addEventListener("click",(()=>{c(),[...a].forEach((e=>e.classList.add("picked"))),E.disabled=!0,T.stop()})),M=d("div","horizontal-clues",["clues-row","clues-row_horizontal"]);const I=d("div","vertical-clues",["clues-row","clues-row_vertical"]);j=d("div","vertical-clues-wrapper"),I.append(d("div","space-fill")),g(n),I.append(j);const U=d("div","inner-wrapper");Y=d("div","game-field-wapper"),Y.append(I,U),i.append(h,Q,C),m.append(E,S,L,k),U.append(M,w),W=d("p",null,["info-box"],l[0]),R.append(i,W,z,Y,m),r.append(R),w.addEventListener("click",f),w.addEventListener("contextmenu",(e=>{var n;e.preventDefault(),e.target.classList.contains("cell")&&((n=e.target).classList.remove("picked"),n.classList.toggle("crossed"),o.has(n)&&o.delete(n))}))}(i),u(i),b(i)})()})();
//# sourceMappingURL=index.js.map