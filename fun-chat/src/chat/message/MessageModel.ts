export default class MessageModel {
    messasgeInfo: MessageInfo;
    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    constructor(messageInfo: MessageInfo) {
        this.messasgeInfo = messageInfo;
    }

    public getMessageTime(): string {
        return new Date(1713437467415).toLocaleString('ru-Ru', {
            timeZone: this.userTimeZone,
        });
    }
}

export type MessageInfo = {
    id: string;
    from: string;
    to: string;
    text: string;
    datetime: number;
    status: {
        isDelivered: boolean;
        isReaded: boolean;
        isEdited: boolean;
    };
};

export type MessageStatus = 'isDelivered' | 'isReaded' | 'isEdited';
