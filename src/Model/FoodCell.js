import Cell from './Cell';

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
}