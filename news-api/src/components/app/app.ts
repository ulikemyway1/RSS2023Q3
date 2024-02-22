import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller;
    view;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        const sources: HTMLElement | null = document.querySelector('.sources');
        if (sources)
            sources.addEventListener('click', (e) =>
                this.controller.getNews(e, (data): void => this.view.drawNews(data))
            );
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
