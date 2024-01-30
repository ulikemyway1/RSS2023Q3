import { createElement } from "./createElement.js";

export class Timer {
    constructor(time, parent) {
        this.time = time;
        this.parent = parent;
        this.isStarted = false;
        this.table = createElement('span', 'timer', null, this.convertTime());
    }

    render() {
        this.table.remove();
        this.table = createElement('span', 'timer', null, this.convertTime());
        this.parent.append(this.table);
    }

    increment() {
        this.time += 1;
    }

    start() {
        if (!this.isStarted) {
            this.counter = setInterval(() => {
                this.increment();
                this.table.remove();
                this.render();
            }, 1000);
            this.isStarted = true;
        }

    }

    stop() {
        clearInterval(this.counter);
        this.isStarted = false;
    }

    getTime() {
        return this.time;
    }

    reset() {
        clearInterval(this.counter)
        this.time = 0;
    }

    convertTime() {
        if (this.time < 10) {
            return `00:0${this.time}`;
        }
        if (this.time < 60) {
            return `00:${this.time}`;
        }
        let minutes = Math.floor(this.time / 60);
        let seconds = this.time % 60;
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        return `${minutes}:${seconds}`
    }
    getStatus() {
        return this.isStarted;
    }

    setTime(newTime) {
        this.time = newTime;
    }
}