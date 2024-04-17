import Contact from '../contacts-list/contact';

class DialogBoxModel {
    contacts: Map<string, Contact> = new Map();
}

const dialogBoxModel = new DialogBoxModel();
export default dialogBoxModel;
