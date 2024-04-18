import MessageModel, { MessageInfo, MessageStatus } from './MessageModel';
import MessageView from './MessageView';

export default class MessageController {
    view: MessageView;
    model: MessageModel;

    constructor(messageInfo: MessageInfo) {
        this.model = new MessageModel(messageInfo);
        let deliveryStatus;
        if (messageInfo.status.isDelivered && !messageInfo.status.isReaded) {
            deliveryStatus = 'Delivered';
        } else if (messageInfo.status.isReaded) {
            deliveryStatus = 'Readed';
        } else {
            deliveryStatus = 'Sent';
        }
        this.view = new MessageView(
            this.model.messasgeInfo.text,
            this.model.getMessageTime(),
            deliveryStatus,
            messageInfo.status.isEdited
        );
    }

    public setStatus(status: MessageStatus) {
        if (status === 'isDelivered') {
            this.model.messasgeInfo.status.isDelivered = true;
            this.view.setMsgDeliveryStatus('Delivered');
        }
        if (status === 'isEdited') {
            this.model.messasgeInfo.status.isEdited = true;
            this.view.markMsgEdited();
        }
        if (status === 'isReaded') {
            this.model.messasgeInfo.status.isReaded = true;
            this.view.setMsgDeliveryStatus('Readed');
        }
    }

    public editMsgText(newText: string) {
        this.model.messasgeInfo.text = newText;
        this.view.setMsgContent(newText);
    }

    public getView(): HTMLElement {
        return this.view.getView();
    }
}
