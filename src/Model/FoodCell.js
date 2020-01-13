import Cell from './Cell';
import EmptyCell from './EmptyCell';

export default class FoodCell extends Cell {
    constructor(timer, nutrients) {
        super(timer);
        this.nutrients = nutrients;
    }
    
    getNutrients() { return this.nutrients; }
    
    isFood() { return true; }

    collide(snake) {
        snake.eatFood(this);
    }

    nextCell(counter) {
        return new EmptyCell();
    }
}