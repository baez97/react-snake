import React from 'react';
import Board from '../Board';
import Snake from '../Snake';
import './Game.css';
export default class Game extends React.Component {
    
    constructor() {
        super();
        this.snake = new Snake();
        this.moveSnakeDown = this.moveSnakeDown.bind(this);
        this.setSnakePosition = this.setSnakePosition.bind(this);
    }

    paintSnakeInBoard() {
        this.setState({
            snake: this.snake
        });
        this.snake.paintInBoard(this.board);
    }

    moveSnakeDown() {
        this.snake.moveDown(this.setSnakePosition);
    }

    setSnakePosition(x, y) {
        this.setState({
            snake: this.snake
        });
    }

    render() {
        return <Board gameObj={this} snake={this.snake}/>
    }
}