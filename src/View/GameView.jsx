import React from 'react';
import Board from '../Model/Board';
import BoardView from './BoardView';
export default class GameView extends React.Component {
    constructor() {
        super();
        this.board = new Board();
        this.state = {
            cells: this.board.getCells()
        } 
    }

    updateCells() {
        this.board.tick();
        this.setState( {
            cells: this.board.getCells()
        });
    }

    render() {
        return (
            <div>
                <BoardView cells={this.state.cells}/>
                <button onClick={() => this.updateCells()}>Hello</button>
            </div>
        )
    }
}