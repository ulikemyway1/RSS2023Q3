import Contact from './contact';

class ContactsListModel {
    private activeContacts: Map<string, Contact> = new Map();
    private inactiveContacts: Map<string, Contact> = new Map();

    public getActiveContacts(): Map<string, Contact> {
        return this.activeContacts;
    }

    public getInactiveContacts(): Map<string, Contact> {
        return this.inactiveContacts;
    }
    public setContacts(
        type: 'USER_ACTIVE' | 'USER_INACTIVE',
        data: string[]
    ): void {
        if (type === 'USER_ACTIVE') {
            data.forEach((user) => {
                this.activeContacts.set(user, new Contact(user, true));
            });
        } else {
            this.inactiveContacts.clear();
            data.forEach((user) => {
                this.inactiveContacts.set(user, new Contact(user, false));
            });
        }
    }

    public setContact(userName: string): void {
        this.activeContacts.set(userName, new Contact(userName, true));
    }

    public updateContactStatus(userData: {
        username: string;
        status: boolean;
    }): void {
        const { username, status } = userData;
        const contact =
            this.activeContacts.get(username) ||
            this.inactiveContacts.get(username);
        if (contact) {
            contact.updateContactStatus(status);
            if (status) {
                this.activeContacts.set(username, contact);
                this.inactiveContacts.delete(username);
            } else {
                this.inactiveContacts.set(username, contact);
                this.activeContacts.delete(username);
            }
        } else {
            this.setContact(username);
        }
    }

    public removeFromActive(contactName: string) {
        this.activeContacts.delete(contactName);
    }
    private sortUsers(): void {}
}

const contactsListModel = new ContactsListModel();
export default contactsListModel;
