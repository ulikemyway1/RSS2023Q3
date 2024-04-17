import Contact from '../contacts-list/contact';
import dialogBoxModel from './DialogBoxModel';
import dialogBoxView from './DialogBoxView';

class DialobBoxController {
    public view = dialogBoxView;
    public model = dialogBoxModel;
    public selectedContact: Contact | null = null;

    public updateDialogHeader(contactCard: Contact): void {
        while (this.view.header.lastElementChild) {
            this.view.header.lastElementChild.remove();
        }
        const clonedContactCardView = contactCard
            .getView()
            .cloneNode(true) as HTMLElement;
        this.view.header.append(clonedContactCardView);
        this.selectedContact = contactCard;
    }

    public resetDialog(): void {
        this.view.resetView();
        this.selectedContact = null;
    }
}

const dialogBoxController = new DialobBoxController();
export default dialogBoxController;
