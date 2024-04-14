import './style/style.scss';
import responseRedirector, {
    BasicResponse,
} from './communication/ResponseRedirector';
import loginPage from './login/loginPage';

import BaseElement from './utils/BaseElement';
import mainPage from './main-page/mainPage';
import app from './app/app';

const ws = new WebSocket('ws://localhost:4000/');
ws.addEventListener('open', () => {
    console.log('Connected');
});
export default ws;

ws.addEventListener('message', (response: MessageEvent<string>) => {
    const responseData: BasicResponse = JSON.parse(response.data);
    responseRedirector.takeResponse(responseData);
});
// const container = new BaseElement('div', ['container']).getElement();
// container.append(loginPage.getLoginPage(), mainPage.getMainPage())
// document.body.append(container);
// const routes = {
//     '/': mainPage,
//     '/login': loginPage,
// };

// function renderPage(route: string) {
//     const container = new BaseElement('div', ['container']).getElement();
//     container.innerHTML = '';
//     if (route === '/') {
//         history.pushState({}, "", '/main')
//         container.append(mainPage.getMainPage());
//         // container.append(loginPage.getLoginPage());
//     } else if (route === '/login') {
//         container.append(loginPage.getLoginPage());
//     }
//     document.body.append(container);
// }

// window.addEventListener('popstate', (event) => {
//     const route = window.location.pathname;
//     renderPage(route);
// });

// window.addEventListener('load', () => {
//     const route = window.location.pathname;
//     console.log(route);
//     renderPage(route);
// });
app.start();
