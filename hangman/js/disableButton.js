export function disableButton(e) {
    if (typeof e === 'string') {
        const button = document.querySelector(`button[data-letter="${e}"]`);
        if (button) {
            button.classList.add('letter-button_disabled');
            button.disabled = true;
        }
    } else {
        e.target.classList.add('letter-button_disabled');
        e.target.disabled = true;
    }
}