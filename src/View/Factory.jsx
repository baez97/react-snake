import React from 'react';
import './GameStyles.css';

export default class Factory {
    getCellView(cell) {
        if ( cell.isSnake() )
            return this.generateSnakeCell(cell);
        else if ( cell.isFood() )
            return this.generateFoodCell(cell);
        else if ( cell.isObstacle() )
            return this.generateObstacleCell(cell);
        else if ( cell.isCollision() )
            return this.generateCollisionCell(cell);
        return this.generateEmptyCell(cell);
    }

    generateSnakeCellOld(cell) {
        return <span style={{ color: "#00f" }}> { cell.getTimer() }</span>;
    }

    generateEmptyCellOld(cell) {
        return <span> { cell.getTimer() }</span>;
    }

    generateSnakeCell(cell) {
        return (
            <div className="cell snakeCell"></div>
        )
    }

    generateEmptyCell(cell) {
        return (
            <div className="cell emptyCell"></div>
        )
    }
    
    generateFoodCell(cell) {
        return (
            <div className="cell foodCell"></div>
        )
    }

    generateObstacleCell(cell) {
        return (
            <div className="cell obstacleCell"></div>
        )
    }

    generateCollisionCell(cell) {
        return (
            <div className="cell collisionCell"></div>
        )
    }
}