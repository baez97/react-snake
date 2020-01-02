import Cell from "./Cell";
import EmptyCell from "./EmptyCell";

export default class Board {
    constructor(numberOfRows) {
        if ( !numberOfRows )
            numberOfRows = 10;
        var cellMatrix = [];
        
        for ( let i = 0; i < numberOfRows; i++ ) {
            cellMatrix.push([]);
            for ( let j = 0; j < numberOfRows; j++ )
                cellMatrix[i].push(new Cell(j+1));
        }

        this.cells = cellMatrix;
    }

    getCells() {
        return this.cells;
    }

    tick() {
        this.cells.forEach((row, rIndex) => {
            row.forEach((cell, cIndex) => { 
                cell.tick(); 
                if ( cell.isTimeOver() )
                    this.cells[rIndex][cIndex] = new EmptyCell();
            });
        });
    }
}