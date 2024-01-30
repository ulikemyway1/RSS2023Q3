(()=>{"use strict";var n={174:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,100;1,300&display=swap);"]),i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.app {\n    margin: 40px auto;\n    width: 80vw;\n    outline: 1px solid black;\n    font-family: Roboto;\n    font-size: 18px;\n    min-width: 300px;\n    max-width: 800px;\n}\n\n.app__header,\n.app__footer {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px;\n}\n\n.app__game-field {\n    display: grid;\n    background: black;\n}\n\n.app__game-field_5x5 {\n    grid-template-columns: repeat(5, auto);\n    grid-template-rows: repeat(5, auto);\n}\n\n.app__game-field_10x10 {\n    grid-template-columns: repeat(10, auto);\n    grid-template-rows: repeat(10, auto);\n}\n\n.app__game-field_15x15 {\n    grid-template-columns: repeat(15, auto);\n    grid-template-rows: repeat(15, auto);\n}\n\n.cell {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #d4d4d4;\n    background: #ffffff;\n}\n\n.button {\n    cursor: pointer;\n    background: #ffffff;\n    height: 60px;\n    width: 100px;\n    border-radius: 6px;\n    font-family: Roboto;\n    transition: all 0.5s;\n    font-size: 18px;\n}\n\n.button:disabled {\n    cursor: default;\n}\n\n#vertical-clues,\n#horizontal-clues {\n    display: flex;\n    background: #000000;\n}\n\n#vertical-clues {\n    justify-content: flex-end;\n    background: #ffffff;\n}\n\n#vertical-clues-wrapper {\n    display: flex;\n    border-bottom: 3px solid #000000;\n    background: #000000;\n}\n\n#horizontal-clues {\n    flex-direction: column;\n    border-right: 3px solid #000000;\n}\n\n#inner-wrapper {\n    display: flex;\n}\n\n#game-field-wapper {\n    width: min-content;\n    margin: 0 auto;\n    padding: 20px 0;\n}\n\n.clue {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 30px;\n    width: 30px;\n}\n\n.clues-row-vert {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex-direction: column;\n    height: auto;\n}\n\n.clues-row-hor {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    width: auto;\n}\n\n.border-bottom {\n    /* border-bottom: 3px solid #000000; */\n    margin-bottom: 3px;\n}\n\n.border-right {\n    margin-right: 3px;\n    /* border-right: 3px solid #000000; */\n}\n\n.border-right-clue {\n    margin-right: 3px;\n}\n\n#space-fill {\n    background: #ffffff;\n    width: 100%;\n    border-left: 1px solid #ffffff;\n}\n\n.picked {\n    background: #000000;\n}\n\n.crossed {\n    position: relative;\n}\n.crossed::after {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #000000;\n    top: 50%;\n    transform: rotate(45deg);\n}\n.crossed::before {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #000000;\n    top: 50%;\n    transform: rotate(-45deg);\n}\n\n#continue-game-btn {\n    font-size: 17px;\n}\n\n.info-box {\n    text-align: center;\n    font-weight: 700;\n}\n\n@media (hover: hover) {\n    .button:hover {\n        background: rgb(194, 194, 194);\n    }\n\n    .button:disabled:hover {\n        background-color: #ffffff;\n    }\n    \n}\n","",{version:3,sources:["webpack://./css/style.css"],names:[],mappings:"AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,wBAAwB;IACxB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,uCAAuC;IACvC,oCAAoC;AACxC;;AAEA;IACI,uCAAuC;IACvC,oCAAoC;AACxC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;AACzC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,QAAQ;IACR,wBAAwB;AAC5B;AACA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,QAAQ;IACR,yBAAyB;AAC7B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI;QACI,8BAA8B;IAClC;;IAEA;QACI,yBAAyB;IAC7B;;AAEJ",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,100;1,300&display=swap');\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.app {\r\n    margin: 40px auto;\r\n    width: 80vw;\r\n    outline: 1px solid black;\r\n    font-family: Roboto;\r\n    font-size: 18px;\r\n    min-width: 300px;\r\n    max-width: 800px;\r\n}\r\n\r\n.app__header,\r\n.app__footer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 5px;\r\n}\r\n\r\n.app__game-field {\r\n    display: grid;\r\n    background: black;\r\n}\r\n\r\n.app__game-field_5x5 {\r\n    grid-template-columns: repeat(5, auto);\r\n    grid-template-rows: repeat(5, auto);\r\n}\r\n\r\n.app__game-field_10x10 {\r\n    grid-template-columns: repeat(10, auto);\r\n    grid-template-rows: repeat(10, auto);\r\n}\r\n\r\n.app__game-field_15x15 {\r\n    grid-template-columns: repeat(15, auto);\r\n    grid-template-rows: repeat(15, auto);\r\n}\r\n\r\n.cell {\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 1px solid #d4d4d4;\r\n    background: #ffffff;\r\n}\r\n\r\n.button {\r\n    cursor: pointer;\r\n    background: #ffffff;\r\n    height: 60px;\r\n    width: 100px;\r\n    border-radius: 6px;\r\n    font-family: Roboto;\r\n    transition: all 0.5s;\r\n    font-size: 18px;\r\n}\r\n\r\n.button:disabled {\r\n    cursor: default;\r\n}\r\n\r\n#vertical-clues,\r\n#horizontal-clues {\r\n    display: flex;\r\n    background: #000000;\r\n}\r\n\r\n#vertical-clues {\r\n    justify-content: flex-end;\r\n    background: #ffffff;\r\n}\r\n\r\n#vertical-clues-wrapper {\r\n    display: flex;\r\n    border-bottom: 3px solid #000000;\r\n    background: #000000;\r\n}\r\n\r\n#horizontal-clues {\r\n    flex-direction: column;\r\n    border-right: 3px solid #000000;\r\n}\r\n\r\n#inner-wrapper {\r\n    display: flex;\r\n}\r\n\r\n#game-field-wapper {\r\n    width: min-content;\r\n    margin: 0 auto;\r\n    padding: 20px 0;\r\n}\r\n\r\n.clue {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n.clues-row-vert {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    height: auto;\r\n}\r\n\r\n.clues-row-hor {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    width: auto;\r\n}\r\n\r\n.border-bottom {\r\n    /* border-bottom: 3px solid #000000; */\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.border-right {\r\n    margin-right: 3px;\r\n    /* border-right: 3px solid #000000; */\r\n}\r\n\r\n.border-right-clue {\r\n    margin-right: 3px;\r\n}\r\n\r\n#space-fill {\r\n    background: #ffffff;\r\n    width: 100%;\r\n    border-left: 1px solid #ffffff;\r\n}\r\n\r\n.picked {\r\n    background: #000000;\r\n}\r\n\r\n.crossed {\r\n    position: relative;\r\n}\r\n.crossed::after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    height: 1px;\r\n    width: 100%;\r\n    background: #000000;\r\n    top: 50%;\r\n    transform: rotate(45deg);\r\n}\r\n.crossed::before {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    height: 1px;\r\n    width: 100%;\r\n    background: #000000;\r\n    top: 50%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n#continue-game-btn {\r\n    font-size: 17px;\r\n}\r\n\r\n.info-box {\r\n    text-align: center;\r\n    font-weight: 700;\r\n}\r\n\r\n@media (hover: hover) {\r\n    .button:hover {\r\n        background: rgb(194, 194, 194);\r\n    }\r\n\r\n    .button:disabled:hover {\r\n        background-color: #ffffff;\r\n    }\r\n    \r\n}\r\n"],sourceRoot:""}]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var A=0;A<n.length;A++){var c=[].concat(n[A]);r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],A=r.base?l[0]+r.base:l[0],c=a[A]||0,d="".concat(A," ").concat(c);a[A]=c+1;var p=t(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var l=r(n,o),A=0;A<a.length;A++){var c=t(a[A]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=[{name:"Diamond",level:"Easy",arr:[[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]]},{name:"Square",level:"Easy",arr:[[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1]]},{name:"Space",level:"Easy",arr:[[0,0,0,0,0],[0,1,1,1,0],[0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0]]},{name:"Cross",level:"Easy",arr:[[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1]]},{name:"Circle",level:"Easy",arr:[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]]}],e=[],r=new Set,o=new Set,a=Math.floor(Math.random()*n.length),i=n[a].arr,s=n[a].name;function l(n="div",e,t=[],r){const o=document.createElement(n);return e&&(o.id=e),Array.isArray(t)&&t.length>0&&t.forEach((n=>o.classList.add(n))),r&&(o.textContent=r),o}function A(){e.forEach((n=>{n.classList.remove("picked","crossed")})),o.clear(),g.disabled=!1}function c(){const n=[],t=[];e.forEach((e=>{e.classList.contains("picked")&&n.push(e.id),e.classList.contains("crossed")&&t.push(e.id)})),localStorage.setItem("savedPickedCells_ULIKE",JSON.stringify(n)),localStorage.setItem("savedCrossedCells_ULIKE",JSON.stringify(t)),localStorage.setItem("passedTime_ULIKE",I.getTime()),C.disabled=!1}function d(){const n=["app__game-field_5x5","app__game-field_10x10","app__game-field_15x15"];f.classList.remove(...n),5===i.length?f.classList.add(n[0]):10===i.length?f.classList.add(n[1]):15===i.length&&f.classList.add(n[2])}function p(n){d();for(let t=0;t<n.length;t+=1)for(let o=0;o<n.length;o+=1){let a=l("div",`cell-${t}${o}`,["cell"]);4!==t&&9!==t&&14!==t&&19!==t||a.classList.add("border-bottom"),4!==o&&9!==o&&14!==o&&19!==o||a.classList.add("border-right"),f.append(a),n[t][o]&&r.add(a),e.push(a)}}class u{constructor(n,e){this.time=n,this.parent=e,this.isStarted=!1,this.table=l("span","timer",null,this.convertTime())}render(){this.table.remove(),this.table=l("span","timer",null,this.convertTime()),this.parent.append(this.table)}increment(){this.time+=1}start(){this.isStarted||(this.counter=setInterval((()=>{this.increment(),this.table.remove(),this.render()}),1e3),this.isStarted=!0)}stop(){clearInterval(this.counter),this.isStarted=!1}getTime(){return this.time}reset(){clearInterval(this.counter),this.time=0}convertTime(){if(this.time<10)return`00:0${this.time}`;if(this.time<60)return`00:${this.time}`;let n=Math.floor(this.time/60),e=this.time%60;return n<10&&(n=`0${n}`),e<10&&(e=`0${e}`),`${n}:${e}`}getStatus(){return this.isStarted}setTime(n){this.time=n}}const f=l("section",null,["app__game-field"]),m=[],h=[];let g,C,b,I;var v=t(379),B=t.n(v),x=t(795),y=t.n(x),w=t(569),E=t.n(w),k=t(565),_=t.n(k),S=t(216),L=t.n(S),T=t(589),W=t.n(T),z=t(174),j={};function R(n){let e=[];for(let t=0;t<n.length;t+=1){const r=[];let o=0;for(let e=0;e<n.length;e+=1)n[t][e]&&(o+=1),(0!==o&&0===n[t][e]||0!==o&&e===n.length-1)&&(r.push(o),o=0);e.push(r)}return e}function U(n){let e=[];for(let t=0;t<n.length;t+=1){const r=[];let o=0;for(let e=0;e<n.length;e+=1)n[e][t]&&(o+=1),(0!==o&&0===n[e][t]||0!==o&&e===n.length-1)&&(r.push(o),o=0);e.push(r)}return e}j.styleTagTransform=W(),j.setAttributes=_(),j.insert=E().bind(null,"head"),j.domAPI=y(),j.insertStyleElement=L(),B()(z.Z,j),z.Z&&z.Z.locals&&z.Z.locals,function(n){const t=document.body,a=l("main",null,["app"]),i=l("section",null,["app__header"]),d=l("section",null,["app__footer"]),v=l("button","change-theme-btn",["button"],"Change Theme"),B=l("div","time-info",null,"Time passed: ");I=new u(0,B),I.render();const x=l("button","options-btn",["button"],"Game Options");g=l("button","save-game-btn",["button"],"Save Game"),g.addEventListener("click",c),C=l("button","continue-game-btn",["button"],"Continue Saved Game"),C.addEventListener("click",(()=>{!function(n){r.clear(),o.clear();const t=JSON.parse(localStorage.getItem("savedPickedCells_ULIKE")),a=JSON.parse(localStorage.getItem("savedCrossedCells_ULIKE"));for(e.forEach((n=>n.remove()));0!==e.length;)e.pop();p(n),e.forEach((n=>{-1!==a.indexOf(n.id)&&n.classList.add("crossed"),-1!==t.indexOf(n.id)&&(n.classList.add("picked"),o.add(n))})),I.stop();const i=JSON.parse(localStorage.getItem("passedTime_ULIKE"));i?I.setTime(i):I.setTime(0),I.render()}(n)})),localStorage.getItem("savedPickedCells_ULIKE"),localStorage.getItem("savedCrossedCells_ULIKE")||(C.disabled=!0);const y=l("button","reset-game-btn",["button"],"Reset Game");y.addEventListener("click",A);const w=l("button","show-solution-btn",["button"],"Show Solution");w.addEventListener("click",(()=>{A(),[...r].forEach((n=>n.classList.add("picked"))),g.disabled=!0,I.stop()}));const E=l("div","horizontal-clues",["clues-row","clues-row_horizontal"]),k=l("div","vertical-clues",["clues-row","clues-row_vertical"]);n.forEach(((n,e)=>{let t;t=l("div",`horClue-${e+1}`,4===e||9===e?["cell","clues-row-hor","border-bottom"]:["cell","clues-row-hor"]),E.append(t),h.push(t)}));const _=l("div","vertical-clues-wrapper");k.append(l("div","space-fill")),n.forEach(((n,e)=>{let t;t=l("div",`vertClue-${e+1}`,4===e||9===e||14===e?["cell","clues-row-vert","border-right-clue"]:["cell","clues-row-vert"]),_.append(t),m.push(t)})),k.append(_);const S=l("div","inner-wrapper"),L=l("div","game-field-wapper");L.append(k,S),i.append(v,B,x),d.append(g,C,y,w),S.append(E,f),b=l("p",null,["info-box"],s),a.append(i,b,L,d),t.append(a),f.addEventListener("click",(n=>{var e;n.preventDefault(),n.target.classList.contains("cell")&&((e=n.target).classList.remove("crossed"),e.classList.toggle("picked"),o.has(e)?o.delete(e):o.add(e),o.size===r.size&&[...o].every((n=>r.has(n)))&&(b.textContent="You win!"),I.getStatus()||I.start())})),f.addEventListener("contextmenu",(n=>{var e;n.preventDefault(),n.target.classList.contains("cell")&&((e=n.target).classList.remove("picked"),e.classList.toggle("crossed"),o.has(e)&&o.delete(e))}))}(i),p(i),function(n){const e=function(n){return{row:R(n),col:U(n)}}(n);m.forEach(((n,t)=>{e.col[t].forEach((e=>n.append(l("div",null,["clue"],e))))})),h.forEach(((n,t)=>{e.row[t].forEach((e=>n.append(l("div",null,["clue"],e))))}))}(i)})()})();
//# sourceMappingURL=index.js.map