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

    public getMessageCard(msgID: string, contactKey?: string) {
        if (contactKey) {
            return this.dialogsDB.get(contactKey)?.get(msgID);
        } else {
            let messageCard;
            this.dialogsDB.forEach((contactDB) => {
                const card = contactDB.get(msgID);
                if (card) {
                    messageCard = card;
                    return;
                }
            });
            return messageCard;
        }
    }

    public deleteMessage(msgID: string, contactKey?: string) {
        if (contactKey) {
            this.dialogsDB.get(contactKey)?.delete(msgID);
        } else {
            this.dialogsDB.forEach((contactDB) => contactDB.delete(msgID));
        }
    }
}

const dialogBoxModel = new DialogBoxModel();
export default dialogBoxModel;

//contact -> message_ID
