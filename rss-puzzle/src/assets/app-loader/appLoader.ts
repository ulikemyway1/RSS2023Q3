import LoginForm from '../login-form/loginForm';
import StartScreen, { UserInfo } from '../start-screen/startScreen';

export default class AppLoader {
    private userIsLogged: boolean = false;

    private content: HTMLElement | null = null;

    loadContent() {
        const user = localStorage.getItem('user_ULIKE');
        if (user) {
            this.userIsLogged = true;
            const userInfo: UserInfo = JSON.parse(user);
            this.content = new StartScreen(userInfo).getContent();
        } else this.content = new LoginForm().getContent();
    }

    load() {
        this.loadContent();
        if (this.content) {
            const { childElementCount } = document.body;
            for (let i = 0; i <= childElementCount; i += 1) {
                if (
                    document.body.firstChild &&
                    document.body.firstChild.nodeName !== 'HEADER'
                ) {
                    document.body.firstChild.remove();
                }
            }
            document.body.append(this.content);
        }
    }
}
