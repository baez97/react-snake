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

const styles = {
    cell : {
        width: 40,
        height: 40,
        borderRadius: 10,
        display: "inline-block",
        marginLeft: 1,
        marginRight: 1
    },

    snakeCell : {
        backgroundColor: "#a6d4ff"
    },

    emptyCell : {
        backgroundColor: "#e2e2e2"
    },

    foodCell : {
        backgroundColor: "#ed9daa"
    },

    obstacleCell : {
        backgroundColor: "#ccc"
    }
}