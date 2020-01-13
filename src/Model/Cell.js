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
        this.timer = this.timer > 0 ? this.timer-1 : 0;
    }

    isEmpty() {
        return false;
    }

    isSnake() {
        return false;
    }

    isFood() {
        return false;
    }

    isObstacle() {
        return false;
    }

    isCollision() {
        return false;
    }

    nextCell(counter) {
        return new Cell(counter);
    }

    collide() { };
}