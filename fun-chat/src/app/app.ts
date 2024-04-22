import Router from '../router/Router';
import routes from '../router/routes';
import State from '../state/State';
import BaseElement from '../utils/BaseElement';

class App {
    private container = new BaseElement('div', ['container']).getElement();
    private state = new State();
    private router = new Router(routes);

    public start(): void {
        document.body.append(this.container);
        this.router.navigate('about');
    }

    public setContent(content: HTMLElement) {
        while (this.container.lastElementChild) {
            this.container.lastElementChild.remove();
        }
        this.container.append(content);
    }

    public getRouter() {
        return this.router;
    }

    public getState() {
        return this.state;
    }
}

const app = new App();
export default app;
