import Cell from './Cell';

export default class SnakeCell extends Cell {
    isSnake() { return true; }
    collide() { return true; }
}