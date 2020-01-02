export default class Cell {
    constructor(timer) {
        this.timer = timer;
    }

    getTimer() {
        return this.timer;
    }

    setTimer(timer) {
        this.timer = timer;
    }

    isTimeOver() {
        return this.timer === 0;
    }

    tick() {
        this.timer -= 1;
    }
}