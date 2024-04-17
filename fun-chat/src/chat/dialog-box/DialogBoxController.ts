import ws from '../../communication/socket';
import Contact from '../contacts-list/contact';
import dialogBoxModel from './DialogBoxModel';
import dialogBoxView from './DialogBoxView';

class DialogBoxController {
    public view = dialogBoxView;
    public model = dialogBoxModel;

    public updateDialogHeader(contactCard: Contact): void {
        while (this.view.header.lastElementChild) {
            this.view.header.lastElementChild.remove();
        }
        const clonedContactCardView = contactCard
            .getView()
            .cloneNode(true) as HTMLElement;
        this.view.header.append(clonedContactCardView);
        this.model.setCurrentContact(contactCard);
    }

    public resetDialog(): void {
        this.view.resetView();
        this.model.setCurrentContact(null);
    }
}

const dialogBoxController = new DialogBoxController();
export default dialogBoxController;
