import BaseElement from '../utils/BaseElement';
import userModel, { UserModel } from './UserModel';
import './user.scss';
export class UserView {
    private userModel: UserModel;
    userView: HTMLElement;
    private currentElementView: HTMLElement;

    constructor(model: UserModel) {
        this.userModel = model;
        this.userView = this.createUserView();
        this.currentElementView = this.userView;
    }

    public getUeserView(): HTMLElement {
        return this.userView;
    }

    private createUserView(): HTMLElement {
        const userView = new BaseElement('div', ['user']).getElement();

        const userName = this.userModel.getUsername();

        const userNameWrapper = new BaseElement(
            'span',
            ['user__name'],
            userName
        ).getElement();

        let userIcon: HTMLElement;
        if (userName) {
            userIcon = new BaseElement(
                'div',
                ['user__icon'],
                userName[0].toUpperCase()
            ).getElement();
        } else {
            userIcon = new BaseElement('div', ['user__icon'], '?').getElement();
        }

        userView.append(userIcon, userNameWrapper);

        return userView;
    }

    public updateUserView() {
        this.userView = this.createUserView();
        this.currentElementView.replaceWith(this.userView);
        this.currentElementView = this.userView;
    }
}

const userView = new UserView(userModel);

export default userView;

// import BaseElement from '../utils/BaseElement';
// import userModel, { UserModel } from './UserModel';

// export class UserView {
//     private userModel: UserModel;
//     userView: HTMLElement;
//     private currentElementView: HTMLElement;

//     constructor(model: UserModel) {
//         this.userModel = model;
//         this.userView = this.createUserView();
//         this.currentElementView = this.userView;
//     }

//     public getUeserView(): HTMLElement {
//         return this.userView;
//     }

//     private createUserView(): HTMLElement {
//         const userView = new BaseElement('div', ['user']).getElement();

//         const userName = this.userModel.getUsername();

//         const userNameWrapper = new BaseElement(
//             'span',
//             ['user__name'],
//             userName
//         ).getElement();

//         let userIcon: HTMLElement;
//         if (userName) {
//             userIcon = new BaseElement(
//                 'div',
//                 ['user__icon'],
//                 userName[0].toUpperCase()
//             ).getElement();
//         } else {
//             userIcon = new BaseElement('div', ['user__icon'], '?').getElement();
//         }

//         userView.append(userIcon, userNameWrapper);

//         return userView;
//     }

//     public updateUserView() {
//         this.userView = this.createUserView();
//         this.currentElementView.replaceWith(this.userView);
//         this.currentElementView = this.userView;
//     }
// }

// const userView = new UserView(userModel);

// export default userView;
