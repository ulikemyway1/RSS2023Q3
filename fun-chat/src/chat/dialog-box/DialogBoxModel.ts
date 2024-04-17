import Contact from '../contacts-list/contact';

class DialogBoxModel {
    private currentContact: Contact | null = null;

    public setCurrentContact(contact: Contact | null): void {
        this.currentContact = contact;
    }
    public getCurrentContact(): Contact | null {
        return this.currentContact;
    }
}

const dialogBoxModel = new DialogBoxModel();
export default dialogBoxModel;
