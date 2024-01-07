document.addEventListener('DOMContentLoaded', () => {
//render page template
const letters = [];
for (let s = 65; s <= 90; s++) {
    letters.push(String.fromCharCode(s));
}

function renderApp () {
    const app = document.createElement('main');
    app.className = 'main';

    const gallowContainer = document.createElement('section');
    gallowContainer.className = 'gallow-container';
    app.append(gallowContainer);

    const textArea = document.createElement('section');
    textArea.className = 'text-area';
    app.append(textArea);

    const keyBoard = document.createElement('section');
    keyBoard.className = 'key-board';
    showLetterButtons(letters, keyBoard)
    
    app.append(keyBoard);

    document.body.append(app);
}






//Generate letters array

function showLetterButtons (arr, parentNode) {
    arr.forEach((letter) => {
      parentNode.append(createLetterButtons(letter, parentNode));
    });
}

function createLetterButtons (letter) {
    const button = document.createElement('button');
    button.textContent = letter;
    button.className = 'letter-button';
    return button;
}


renderApp()


})
