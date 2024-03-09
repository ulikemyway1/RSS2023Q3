import LoginForm from "../login-form/loginForm";
import StartScreen, { UserInfo } from "../start-screen/startScreen";

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
            while (document.body.lastChild) {
                document.body.lastChild.remove();
            }
            document.body.append(this.content)
        }
    }
}