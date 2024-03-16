import LoginForm from '../login-form/loginForm';
import StartScreen, { UserInfo } from '../start-screen/startScreen';
import clearBody from '../utils/clearBody';

export default class AppLoader {
    private userIsLogged: boolean = false;

    private content: HTMLElement | null = null;

    private instances: HTMLElement[] = [];

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
            clearBody();
            document.body.append(this.content);
        }
    }

    setInstance(instance: HTMLElement) {
        this.instances.push(instance);
    }

    getInstance() {
        return this.instances[0];
    }
}
