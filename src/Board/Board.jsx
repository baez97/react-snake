import React from 'react';
import './Board.css';
import '../Snake/Snake.css';
export default class Board extends React.Component {
    constructor() {
        super();
        this.numberOfCells = 400;
    }
    
    componentDidMount() {
        this.setState({
            cells: this.generateCells(this.numberOfCells)
        });
        this.paintSnakeInPosition(this.props.snake.posX, this.props.snake.posY);
        this.numberOfRows  = this.getNumberOfRows();
        this.gameObj = this.props.gameObj;
    }

    generateCells(number) {
        var cells = []
        for( let i = 0; i < number; i++ ) {
            cells.push(<div className="cell"></div>)
        }
        return cells;
    }

    getNumberOfRows() {
        return Math.pow(this.numberOfCells, 0.5);
    }

    generateGridTemplateStyle(numberOfCells) {
        var style = {
            gridTemplateColumns: `repeat(${this.numberOfRows}, 1fr)`,
            gridTemplateRows: `repeat(${this.numberOfRows}, 1fr)`
        }
        return style;
    }

    getIndexOfCellIn(x, y) {
        var yPosition = y * this.numberOfRows;
        var offset    = y % this.numberOfRows;
        var xPosition = x + offset;
        return yPosition + xPosition;
    }

    paintSnakeInPosition(x, y) {
        var cellIndex = this.getIndexOfCellIn(x, y);
        var cellsCollection = this.state.cells;
        cellsCollection[cellIndex] = <div className="snakeCell"></div>;
        this.setState({
            cells: cellsCollection
        });
    }

    render() {
        return (
            <div style={{
                width: "100%", 
                textAlign: "center", 
                display: "flex", 
                flexDirection:"column", 
                alignItems:"center"}}>
                <h1>React-Snake</h1>
                { this.state == null ? 
                    (<h2>Loading...</h2>) : 
                    (<div className="board" onClick={this.gameObj.moveSnakeDown} style={ this.generateGridTemplateStyle(this.numberOfCells) }>
                        { this.state.cells }
                    </div>)
                }
            </div>
        )
    }
}