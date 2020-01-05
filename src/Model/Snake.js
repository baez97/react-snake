export default class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.length = 5;
        this.state = new MovingUp();
    }

    move(limit, setPosition) {
        this.state.move(this, limit, setPosition);
    }

    eatFood(food) {
        this.length += food.getNutrients();
    }

    startMovingUp() {
        this.state = new MovingUp();
    }
    startMovingDown() {
        this.state = new MovingDown();
    }
    startMovingRight() {
        this.state = new MovingRight();
    }
    startMovingLeft() {
        this.state = new MovingLeft();
    }

    moveUp(limit, setPosition) {
        if ( this.y <= 0 )
            return this.hit();

        var cannotMove = setPosition(this.x, this.y -1);
        if ( cannotMove )
            return this.hit();

        this.y--;
    }
    moveDown(limit, setPosition) {
        if ( this.y >= limit -1 )
            return this.hit();
            
        var cannotMove = setPosition(this.x, this.y +1);
        if ( cannotMove )
            return this.hit();
        
        this.y++;
    }
    moveLeft(limit, setPosition) {
        if ( this.x <= 0 )
            return this.hit();

        var cannotMove = setPosition(this.x -1, this.y);
        if ( cannotMove )
            return this.hit();
        
        this.x--;
    }
    moveRight(limit, setPosition) {
        if ( this.x >= limit -1 )
            return this.hit();

        var cannotMove = setPosition(this.x +1, this.y)
        if ( cannotMove )
            return this.hit();

        this.x++;
    }

    collide(cell) {
        return cell.collide(this);
    }

    hit() {
        this.length--;
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }
}

class State {
    move(snake, limit, setPosition) { }
}

class MovingUp extends State {
    move(snake, limit, setPosition) {
        snake.moveUp(limit, setPosition);
    }
}
class MovingDown extends State {
    move(snake, limit, setPosition) {
        snake.moveDown(limit, setPosition);
    }
}
class MovingRight extends State {
    move(snake, limit, setPosition) {
        snake.moveRight(limit, setPosition);
    }
}
class MovingLeft extends State {
    move(snake, limit, setPosition) {
        snake.moveLeft(limit, setPosition);
    }
}