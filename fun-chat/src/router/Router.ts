import app from '../app/app';
import { RoutesDescription } from './routes';

export default class Router {
    private routes: RoutesDescription;

    constructor(routes: RoutesDescription) {
        this.routes = routes;
        window.addEventListener('popstate', (e) => {
            e.preventDefault();
            this.navigate(window.location.pathname);
        });
    }

    public navigate(path: string) {
        if (this.routes[path]) {
            history.pushState({}, '', path);
            app.setContent(this.routes[path].getView());
        } else {
            app.setContent(this.routes['notFound'].getView());
        }
    }
}
