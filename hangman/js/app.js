document.addEventListener('DOMContentLoaded', () => {
    //render page template
    const letters = [];
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

    function renderApp() {
        const app = document.createElement('main');
        app.className = 'main';

        const gallowContainer = document.createElement('section');
        gallowContainer.className = 'gallow-container';
        app.append(gallowContainer);

        const textArea = document.createElement('section');
        textArea.className = 'text-area';
        app.append(textArea);

        const wordLine = document.createElement('div');
        wordLine.className = 'word-line';
        textArea.append(wordLine);

        const questionLine = document.createElement('p');
        questionLine.className = 'question-line';
        textArea.append(questionLine);

        const keyBoard = document.createElement('section');
        keyBoard.className = 'key-board';
        showLetterButtons(letters, keyBoard);

        app.append(keyBoard);

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
        const button = document.createElement('button');
        button.textContent = letter;
        button.className = 'letter-button';
        button.setAttribute('data-letter', letter);
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

    function showWordLine (wrapper, index) {
        const letters = DB[index].answer.split('');
        letters.forEach ((char) => {
            wrapper.append(createUnderScore(char));
        })
        
    }

    function createUnderScore (char) {
        const letter = document.createElement('div');
        letter.setAttribute('data-letter', char.toUpperCase())
        letter.textContent = '_';
        letter.className = 'letter';
        return letter
    }

    renderApp();
});
