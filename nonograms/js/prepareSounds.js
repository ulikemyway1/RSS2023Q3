const pickSound = new Audio('./sounds/pick.mp3');
pickSound.controls = false;

const crossedSound = new Audio('./sounds/crossed.mp3');
crossedSound.controls = false;

const emptyCellSound = new Audio('./sounds/emptyCell.mp3');
emptyCellSound.controls = false;

const winSound = new Audio('./sounds/win.mp3');
winSound.controls = false;

const buttonClickSound = new Audio('./sounds/buttonClick.mp3');
buttonClickSound.controls = false;

export function pickSoundPlay() {
    pickSound.play();
}

export function crossedSoundPlay() {
    crossedSound.play();
}

export function emptyCellPlay() {
    emptyCellSound.play();
}

export function winSoundPlay() {
    winSound.play();
}

export function buttonClickSoundPlay () {
    buttonClickSound.play();
}
