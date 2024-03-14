export default class SentencePronunciation {

    private audio = new Audio();

    constructor () {
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
}