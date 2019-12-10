import React from 'react';
import './Board.css';
export default class Board extends React.Component {
    numberOfCells = 400;
    generateCells(number) {
        var cells = [];
        for( let i = 0; i < number; i++ ) {
            cells.push(<div className="cell"></div>)
        }
        return cells;
    }

    generateGridTemplateStyle(numberOfCells) {
        var nOfRows = Math.pow(numberOfCells, 0.5);
        var style = {
            gridTemplateColumns: `repeat(${nOfRows}, 1fr)`,
            gridTemplateRows: `repeat(${nOfRows}, 1fr)`
        }
        return style;
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
                <div className="board" style={ this.generateGridTemplateStyle(this.numberOfCells) }>
                    { this.generateCells(this.numberOfCells) }
                </div>
            </div>
        )
    }
}