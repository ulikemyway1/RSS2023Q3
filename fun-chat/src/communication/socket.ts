import app from '../app/app';
import generateId from '../utils/generateID';
import responseRedirector, { BasicResponse } from './ResponseRedirector';

const ws = new WebSocket('ws://localhost:4000/');
ws.addEventListener('open', () => {
    const userName = app.getState().getItem('userName');
    const password = app.getState().getItem('userPassword');
    if (userName && password) {
        const userData = {
            id: `USER_LOGIN:${generateId()}`,
            type: 'USER_LOGIN',
            payload: {
                user: {
                    login: userName,
                    password: password,
                },
            },
        };
        ws.send(JSON.stringify(userData));
    }
});
export default ws;

ws.addEventListener('message', (response: MessageEvent<string>) => {
    const responseData: BasicResponse = JSON.parse(response.data);
    responseRedirector.takeResponse(responseData);
});
