import React from 'react';

export default class Snake extends React.Component {
    positionX = 0;
    positionY = 0;

    paintInBoard(board) {
        board.paintSnakeInPosition(this.positionX, this.positionY);
    }

    moveDown(setPosition) {
        this.positionY += 1;
        setPosition(this.positionX, this.positionY);
    }

    render() {
        return (
            <div class="snakeCell"></div>
        );
    }

}