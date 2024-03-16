export default class SentencePronunciation {
    private audio = new Audio();

    isActivated = true;

    constructor() {
        this.audio.controls = false;
    }

    setSource(src: string) {
        this.audio.src = src;
    }

    playAudio() {
        this.audio.play();
    }

    getElement() {
        return this.audio;
    }

    toggleStatus() {
        if (this.isActivated) {
            this.isActivated = false;
        } else {
            this.isActivated = true;
        }
    }

    getStatus() {
        return this.isActivated;
    }
}
