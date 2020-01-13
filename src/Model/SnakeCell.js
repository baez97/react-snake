import Cell from './Cell';
import EmptyCell from './EmptyCell';

export default class SnakeCell extends Cell {
    isSnake() { return true; }
    collide() { return true; }
    nextCell(counter) {
        return new EmptyCell();
    }
}