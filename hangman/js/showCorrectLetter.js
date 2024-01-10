export function showCorrectLetter(e) {
    if (typeof e === 'string') {
        document.querySelectorAll(`[data-letter="${e}"]`).forEach((place) => {
            place.textContent = e;
        })
    } else {
        document.querySelectorAll(`[data-letter="${e.target.textContent}"]`).forEach((place) => {
            place.textContent = e.target.textContent;
        })
    }


}