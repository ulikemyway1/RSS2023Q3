import { SentMessageResponse } from '../../communication/ResponseRedirector';
import Contact from '../contacts-list/contact';
import MessageController from '../message/MessageController';
import { MessageInfo } from '../message/MessageModel';

class DialogBoxModel {
    private currentContact: Contact | null = null;

    dialogsDB: Map<string, Map<string, MessageController>> = new Map();

    public setCurrentContact(contact: Contact | null): void {
        this.currentContact = contact;
    }
    public getCurrentContact(): Contact | null {
        return this.currentContact;
    }

    public addMessage(
        contact: string,
        messageId: string,
        messageInfo: MessageInfo
    ) {
        const contactMsgDB = this.dialogsDB.get(contact);
        if (!contactMsgDB) {
            this.dialogsDB.set(
                contact,
                new Map().set(messageId, new MessageController(messageInfo))
            );
        } else {
            contactMsgDB.set(messageId, new MessageController(messageInfo));
        }
    }

    public getMessageCard(contactName: string, msgID: string) {
        const messageCard = this.dialogsDB.get(contactName)?.get(msgID);
        return messageCard?.getView();
    }
}

const dialogBoxModel = new DialogBoxModel();
export default dialogBoxModel;

//contact -> message_ID
