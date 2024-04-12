import './style/style.scss';
import LoginPage from './login/loginPage';
import userView from './user/UserView';
import responseRedirector, {
    BasicResponse,
} from './communication/ResponseRedirector';
import loginPage from './login/loginPage';

const ws = new WebSocket('ws://localhost:4000/');
ws.addEventListener('open', () => {
    console.log('Connected');
});
export default ws;
ws.addEventListener('message', (response: MessageEvent<string>) => {
    const responseData: BasicResponse = JSON.parse(response.data);
    responseRedirector.takeResponse(responseData);
});

document.body.append(loginPage.getLoginPage(), userView.getUeserView());
