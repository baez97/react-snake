import EmptyCell from "./EmptyCell";
import SnakeCell from "./SnakeCell";
import FoodCell from "./FoodCell";
import ObstacleCell from "./ObstacleCell";
import CollisionCell from "./CollisionCell";
import Snake from "./Snake";

export default class Board {
    constructor(numberOfRows) {
        if ( !numberOfRows )
            numberOfRows = 12;
        this.numberOfRows = numberOfRows;
        this.gameIsOver = 
        this.tickCounter = 0;
        var cellMatrix = [];
        
        for ( let i = 0; i < numberOfRows; i++ ) {
            cellMatrix.push([]);
            for ( let j = 0; j < numberOfRows; j++ )
                cellMatrix[i].push(new EmptyCell(0));
        }

        this.cells = cellMatrix;
        this.setSnake();
        this.setFood();
        this.setObstacles();
    }
    
    isGameOver() {
        return this.gameIsOver;
    }

    setSnake() {
        this.snake = new Snake(this.numberOfRows -1, this.numberOfRows -1);
        this.moveSnakeTo = this.moveSnakeTo.bind(this);
        this.moveSnakeTo(this.numberOfRows -1, this.numberOfRows -1);
    }

    setFood() {
        for ( let i = 0; i < 5; i++ ) {
            this.setRandomFruit();
        }
    }

    setRandomFruit() {
        var { x, y } = this.getRandomEmptyPosition();
        this.setFruit(x,y, this.randomNumberBetween(5, 30));
    }
    
    setObstacles() {
        for ( let i = 0; i < 12; i++ ) {
            var { x, y } = this.getRandomEmptyPosition();
            this.setObstacle(x,y);
        }
    }

    getCells() {
        return this.cells;
    }

    tick() {
        this.tickCounter++;
        if ( this.tickCounter % 10 === 0 )
            this.setRandomFruit();
        
            this.cells.forEach((row, rIndex) => {
            row.forEach((cell, cIndex) => { 
                cell.tick(); 
                if ( cell.isTimeOver() )
                    this.cells[rIndex][cIndex] = cell.nextCell(this.snake.length);
            });
        });
        this.snake.move(this.numberOfRows, this.moveSnakeTo);
        if ( this.snake.length === 0 )
            this.gameIsOver = true;
    }

    startMovingUp() {
        this.snake.startMovingUp();
    }

    startMovingDown() {
        this.snake.startMovingDown();
    }
    
    startMovingLeft() {
        this.snake.startMovingLeft();
    }
    
    startMovingRight() {
        this.snake.startMovingRight();
    }

    moveSnakeTo(x, y) {
        var isOutOfBounds = this.isOutOfBounds(x, y);
        if ( isOutOfBounds ) {
            var { x, y } = this.snake.getPosition();
            this.cells[y][x] = new CollisionCell();
            return true;
        }

        var objectiveCell = this.cells[y][x];
        var cannotMove = this.snake.collide(objectiveCell);
        if ( cannotMove ) {
            var { x, y } = this.snake.getPosition();
            this.cells[y][x] = new CollisionCell();
            return true;
        }

        this.cells[y][x] = new SnakeCell(this.snake.length);
    }

    isOutOfBounds(x, y) {
        return ( x < 0 || 
                 y < 0 || 
                 x >= this.numberOfRows || 
                 y >= this.numberOfRows )
    }

    setFruit(x, y, counter) {
        counter = counter ? counter : 20;
        this.cells[y][x] = new FoodCell(counter, 2);
    }

    setObstacle(x, y) {
        this.cells[y][x] = new ObstacleCell();
    }

    getRandomEmptyPosition() {
        var isEmpty = false;
        var randomX = 0;
        var randomY = 0;
        while ( !isEmpty ) {
            randomX = this.randomNumberBetween(0, this.numberOfRows);
            randomY = this.randomNumberBetween(0, this.numberOfRows);
            isEmpty = this.cells[randomY][randomX].isEmpty()
        }
        return { x: randomX, y: randomY };
    }

    randomNumberBetween(min, max) {
        var result = Math.floor(Math.random() * (max - min)) + min;
        return result;
    }
}