export function calculateOpenedLetters() {
    let openedLetters = 0;
    document.querySelectorAll('.letter').forEach(letter => {
        if (letter.textContent !== "__") {
            openedLetters += 1;
        }
    })
    console.log(openedLetters);
    return openedLetters;
}