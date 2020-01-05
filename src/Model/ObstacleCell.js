import Cell from './Cell';

export default class ObstacleCell extends Cell {
    isObstacle() { return true;  }
    isTimeOver() { return false; }
    tick() {}
    collide(snake) {
        return true;
    }
}