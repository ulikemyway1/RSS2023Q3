document.addEventListener('DOMContentLoaded', () => {
    //render page template
    const letters = [];
    const virtualKeyBoard = [];
    let inputEnabled = true;
    for (let s = 65; s <= 90; s++) {
        letters.push(String.fromCharCode(s));
    }

    const DB = [
        {
            question:
                'a public statement that is made without giving proof, accusing somebody of doing something that is wrong or illegal',
            answer: 'allegation',
        },
        {
            question:
                'the machines and electronic parts in a computer or other electronic system',
            answer: 'hardware',
        },
        {
            question: 'the country where a person was born',
            answer: 'homeland',
        },
        {
            question: 'a baby or very young child',
            answer: 'infant',
        },
        {
            question:
                'person or company from whom you rent a room, a house, an office, etc.',
            answer: 'landlord',
        },
        {
            question: 'the great size or importance of something',
            answer: 'magnitude',
        },
        {
            question: 'the act of cutting and gathering crops',
            answer: 'harvest',
        },
        {
            question:
                'a rude way to refer to somebody who you think is very stupid',
            answer: 'idiot',
        },
        {
            question: 'a young person or a child',
            answer: 'youngster',
        },
        {
            question:
                'a building where large quantities of goods are stored, especially before they are sent to shops to be sold',
            answer: 'warehouse',
        },
    ];

    let currentLetters;

    function renderApp() {
        const app = createElement('main', 'main', null, null);
        const gallowContainer = createElement('section', 'gallow-container', null, null);

        app.append(gallowContainer);

        const textArea = createElement('section', 'text-area', null, null);
        app.append(textArea);

        const wordLine = createElement('div', 'word-line', null, null);
        textArea.append(wordLine);

        const questionLine = createElement('p', 'question-line', null, null);
        textArea.append(questionLine);

        const gameStat = createElement('p', 'game-stat', null, null);
        gameStat.append('Incorrect guesses ', createElement('span', null, 'incorrectAmmount', '0'), '/6');

        textArea.append(gameStat);

        const keyBoard = createElement('section', 'key-board', null, null);
        app.append(keyBoard);

        showLetterButtons(letters, keyBoard);

        showQuestion(questionLine);

        document.body.prepend(app);
    }

    //Generate letters array

    function showLetterButtons(arr, parentNode) {
        arr.forEach((letter) => {
            parentNode.append(createLetterButtons(letter, parentNode));
        });
    }

    function createLetterButtons(letter) {
        const button = createElement('button', 'letter-button', null, letter);
        button.setAttribute('data-letter', letter);
        button.addEventListener('click', (e) => {
            if (inputEnabled) {
                checkLetter(e)
            }
        })
        virtualKeyBoard.push(button);
        return button;
    }

    function showQuestion(parentNode) {
        let index = Math.floor(Math.random() * DB.length);
        if (index > DB.length) {
            index = DB.length - 1;
        }
        parentNode.textContent = DB[index].question;
        showWordLine(parentNode.previousSibling, index)
    }

    function showWordLine(wrapper, index) {
        currentLetters = DB[index].answer.toUpperCase().split('');
        currentLetters.forEach((char) => {
            wrapper.append(createUnderScore(char));
        })

    }

    function createUnderScore(char) {
        const letter = createElement('div', 'letter', null, '__');
        letter.setAttribute('data-letter', char.toUpperCase())
        return letter
    }

    function checkLetter(e) {
        if (currentLetters.indexOf(e) !== -1 || currentLetters.indexOf(e.target ? e.target.textContent : null) !== -1) {
            showCorrectLetter(e)
        } else {
            increaseIncorrectCounter();
        }
        disableButton(e);
    }

    function showCorrectLetter(e) {
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

    function disableButton(e) {
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

    function increaseIncorrectCounter() {
        const incorrectAmmount = document.getElementById('incorrectAmmount');
        incorrectAmmount.textContent = +incorrectAmmount.textContent + 1;
        if (+incorrectAmmount.textContent >= 6) {
            showModal('lose')
        }
    }

    function createElement(tag, className, id, textContent) {
        const element = document.createElement(tag);
        if (className) {
            element.className = className;
        }
        if (textContent) {
            element.textContent = textContent;
        }
        if (id) {
            element.id = id;
        }
        return element;
    }

    document.addEventListener('keyup', (e) => {
        if (inputEnabled && letters.includes(e.key.toUpperCase()) && !document.querySelector(`button[data-letter="${e.key.toUpperCase()}"]`).disabled) {
            checkLetter(e.key.toUpperCase())
        }

    })

    function showModal(option) {
        inputEnabled = false;
        let modalText;
        option === 'win' ? modalText = 'You win!' : modalText = "You've lost!";
        const modal = createElement('section', 'modal', null, modalText);
        const button = createElement('button', 'btn-play-again', null, 'Play again');
        button.addEventListener('click', startNewGame);
        const answerBox = createElement('div', 'answer-box', null, 'The secret word is');
        answerBox.append(createElement('span', 'answer-word', null, currentLetters.join('')));
        modal.append(answerBox, button);
        const overlay = createElement('div', 'overlay', null, null);
        document.body.prepend(overlay);
        document.body.prepend(modal);
    }

    renderApp();

    function startNewGame() {
        inputEnabled = true;
        const questionLine = document.querySelector('.question-line');
        questionLine.previousSibling.textContent = '';
        showQuestion(questionLine);
        document.getElementById('incorrectAmmount').textContent = '0';
        document.querySelector('.modal').remove();
        document.querySelector('.overlay').remove();
        enableAllButtons();
    }

    function enableAllButtons() {
        virtualKeyBoard.forEach((button) => {
            button.disabled = false;
            button.classList.remove('letter-button_disabled')
        })
    }
});
