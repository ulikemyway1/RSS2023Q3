import loginPage from '../login/loginPage';
import mainPage from '../main-page/mainPage';
import BaseElement from '../utils/BaseElement';

const routes: RoutesDescription = {
    login: {
        path: 'login',
        getView: () => loginPage.getLoginPage(),
    },

    main: {
        path: 'main',
        getView: () => mainPage.getMainPage(),
    },

    about: {
        path: 'about',
        getView: () =>
            new BaseElement('section', [], 'About page').getElement(),
    },

    notFound: {
        path: 'not-found',
        getView: () => new BaseElement('section', [], 'Not found').getElement(),
    },
};

export default routes;

type PathView = {
    path: string;
    getView: () => HTMLElement;
};

export type RoutesDescription = {
    [key: string]: PathView;
};
