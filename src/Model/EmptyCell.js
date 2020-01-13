import Cell from './Cell'
export default class EmptyCell extends Cell {
    getTimer() {
        return 0;
    }

    setTimer(timer) { }

    isTimeOver() {
        return false;
    }

    tick() {}

    isEmpty() { return true; }

    nextCell() {
        return new EmptyCell();
    }
}