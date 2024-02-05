const pickSound = new Audio('./sounds/pick.mp3');
pickSound.controls = false;

const crossedSound = new Audio('./sounds/crossed.mp3');
crossedSound.controls = false;
crossedSound.volume = 1;
const emptyCellSound = new Audio('./sounds/emptyCell.mp3');
emptyCellSound.controls = false;
emptyCellSound.volume = 1;
const winSound = new Audio('./sounds/win.mp3');
winSound.controls = false;
winSound.volume = 1;
const buttonClickSound = new Audio('./sounds/buttonClick.mp3');
buttonClickSound.controls = false;
buttonClickSound.volume = 1;
export function pickSoundPlay() {
    pickSound.pause();
    pickSound.currentTime = 0;
    pickSound.play();
}

export function crossedSoundPlay() {
    crossedSound.pause();
    crossedSound.currentTime = 0;
    crossedSound.play();
}

export function emptyCellPlay() {
    emptyCellSound.pause();
    emptyCellSound.currentTime = 0;
    emptyCellSound.play();
}

export function winSoundPlay() {
    winSound.play();
}

export function buttonClickSoundPlay() {
    buttonClickSound.pause();
    buttonClickSound.currentTime = 0;
    buttonClickSound.play();
}

const sounds = [buttonClickSound, crossedSound, emptyCellSound, pickSound, winSound];

export function turnOffSounds() {
    sounds.forEach(sound => sound.volume = 0);
}

export function turnOnSounds() {
    sounds.forEach(sound => sound.volume = 1);
}
