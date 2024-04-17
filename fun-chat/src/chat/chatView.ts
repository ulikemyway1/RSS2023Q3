import BaseElement from '../utils/BaseElement';
import './chat.scss';
import dialogBoxView from './dialog-box/DialogBoxView';
import userListView from './contacts-list/ContactsListView';

class ChatView {
    private chatView = new BaseElement('section', ['chat']).getElement();

    constructor() {
        this.chatView.append(userListView.getView(), dialogBoxView.getView());
    }

    public getChatView() {
        return this.chatView;
    }
}

const chatView = new ChatView();
export default chatView;
