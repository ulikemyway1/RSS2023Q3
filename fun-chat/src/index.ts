import './style/style.scss';
import LoginPage from './login/loginPage';

const ws = new WebSocket('ws://localhost:4000/');
ws.addEventListener('open', () => {
    console.log('Connected');
});

document.body.append(new LoginPage().getLoginPage());
