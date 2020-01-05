import Cell from "./Cell";
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
                    this.cells[rIndex][cIndex] = new EmptyCell();
            });
        });
        this.snake.move(this.numberOfRows, this.moveSnakeTo);
    }

    startMovingUp() {
        this.snake.startMovingUp(this.numberOfRows, this.moveSnakeTo);
    }

    startMovingDown() {
        this.snake.startMovingDown(this.numberOfRows, this.moveSnakeTo);
    }
    
    startMovingLeft() {
        this.snake.startMovingLeft(this.numberOfRows, this.moveSnakeTo);
    }
    
    startMovingRight() {
        this.snake.startMovingRight(this.numberOfRows, this.moveSnakeTo);
    }

    moveSnakeTo(x, y) {
        var objectiveCell = this.cells[y][x];
        // if ( objectiveCell.isFood() )
        //     this.snake.eatFood(objectiveCell);
        var cannotMove = this.snake.collide(objectiveCell);
        if ( cannotMove ) {
            console.log(objectiveCell);
            var { x, y } = this.snake.getPosition();
            this.cells[y][x] = new CollisionCell();
            return true;
        }
        // var { x, y } = this.snake.getPosition();
        this.cells[y][x] = new SnakeCell(this.snake.length);
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
            console.log(this.cells[randomY][randomX]);
            isEmpty = this.cells[randomY][randomX].isEmpty()
        }
        return { x: randomX, y: randomY };
    }

    randomNumberBetween(min, max) {
        var result = Math.floor(Math.random() * (max - min)) + min;
        return result;
    }
}