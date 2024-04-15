import BaseElement from '../../utils/BaseElement';
import './dialogBox.scss';
class DialogBoxView {
    private view = new BaseElement('section', ['dialog-box']).getElement();

    public getView() {
        return this.view;
    }
}

const dialogBoxView = new DialogBoxView();
export default dialogBoxView;
