import BaseElement from '../utils/BaseElement';
import './chat.scss';

class ChatView {
    private chatView = new BaseElement('section', ['chat']).getElement();

    constructor() {}

    public getChatView() {
        return this.chatView;
    }
}

const chatView = new ChatView();
export default chatView;
