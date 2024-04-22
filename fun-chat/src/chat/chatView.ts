import BaseElement from '../utils/BaseElement';
import './chat.scss';
import dialogBoxView from './dialog-box/DialogBoxView';
import userListView from './contacts-list/ContactsListView';
import ButtonElement from '../utils/ButtonElement';

class ChatView {
    private chatView = new BaseElement('section', ['chat']).getElement();

    private showContactsBtn = new ButtonElement(
        'Contacts',
        ['show-contacts-btn'],
        false
    ).getButton();

    constructor() {
        this.showContactsBtn.addEventListener('click', () => {
            userListView.getView().classList.toggle('open');
            dialogBoxView.getView().classList.toggle('closed');
        });
        this.chatView.append(
            this.showContactsBtn,
            userListView.getView(),
            dialogBoxView.getView()
        );
    }

    public getChatView() {
        return this.chatView;
    }
}

const chatView = new ChatView();
export default chatView;
