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
        contactKey: string,
        messageId: string,
        messageInfo: MessageInfo
    ) {
        const msgDataID = `${contactKey}|${messageId}`;
        const contactMsgDB = this.dialogsDB.get(contactKey);
        if (!contactMsgDB) {
            this.dialogsDB.set(
                contactKey,
                new Map().set(
                    messageId,
                    new MessageController(messageInfo, msgDataID)
                )
            );
        } else {
            contactMsgDB.set(
                messageId,
                new MessageController(messageInfo, msgDataID)
            );
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
