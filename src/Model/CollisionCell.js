import Cell from './Cell';
import SnakeCell from './SnakeCell';

export default class CollisionCell extends Cell {
    isCollision() { return true; }
    nextCell(counter) {
        return new SnakeCell(counter);
    }
}