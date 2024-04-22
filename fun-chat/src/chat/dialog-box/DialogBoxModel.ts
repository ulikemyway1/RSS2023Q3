import { SentMessageResponse } from '../../communication/ResponseRedirector';
import contactsListModel from '../contacts-list/ContactsListModel';
import Contact from '../contacts-list/contact';
import MessageController from '../message/MessageController';
import { MessageInfo } from '../message/MessageModel';

class DialogBoxModel {
    private currentContact: Contact | null = null;
    dialogsDB: Map<string, Map<string, MessageController>> = new Map();

    unreadMessages: Map<string, Set<string>> = new Map();

    private msgID: string = '';

    private state: 'normal' | 'editing' = 'normal';

    public setCurrentContact(contact: Contact | null): void {
        this.currentContact = contact;
    }
    public getCurrentContact(): Contact | null {
        return this.currentContact;
    }

    public setMsgID(msgID: string): void {
        this.msgID = msgID;
    }

    public getMsgID(): string {
        return this.msgID;
    }

    public setState(state: 'normal' | 'editing'): void {
        this.state = state;
    }

    public getState(): 'normal' | 'editing' {
        return this.state;
    }

    public addMessage(
        contactKey: string,
        messageId: string,
        messageInfo: MessageInfo
    ) {
        const msgDataID = `${contactKey}|${messageId}`;
        const contactMsgDB = this.dialogsDB.get(contactKey);
        const messageController = new MessageController(messageInfo, msgDataID);
        if (!contactMsgDB) {
            this.dialogsDB.set(
                contactKey,
                new Map().set(messageId, messageController)
            );
        } else {
            contactMsgDB.set(messageId, messageController);
        }
        if (!messageInfo.status.isReaded) {
            let unreadMsgDB = this.unreadMessages.get(messageInfo.from);
            if (!unreadMsgDB) {
                this.unreadMessages.set(messageInfo.from, new Set());
            }
            unreadMsgDB = this.unreadMessages.get(messageInfo.from);
            unreadMsgDB?.add(messageId);
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
        this.unreadMessages.forEach((msgDB, contactName) => {
            if (msgDB.delete(msgID)) {
                contactsListModel.getContactCard(contactName)?.updateMsgCount();
            }
        });
    }

    public getMessageHistory(msgKey: string) {
        return this.dialogsDB.get(msgKey);
    }

    public markAsRead(msgID: string) {
        this.dialogsDB.forEach((contactMsgDB) =>
            contactMsgDB.get(msgID)?.view.setMsgDeliveryStatus('Read')
        );
    }

    public markAsDelivered(msgID: string) {
        this.dialogsDB.forEach((contactMsgDB) =>
            contactMsgDB.get(msgID)?.view.setMsgDeliveryStatus('Delivered')
        );
    }
}

const dialogBoxModel = new DialogBoxModel();
export default dialogBoxModel;

//contact -> message_ID
