import React from 'react';
import Board from '../Model/Board';
import BoardView from './BoardView';
import './GameStyles.css';
export default class GameView extends React.Component {
    constructor() {
        super();
        this.board = new Board();
        this.pause = false;
        this.keyMethods = {
            ArrowUp    : () => this.board.startMovingUp(),
            ArrowDown  : () => this.board.startMovingDown(),
            ArrowLeft  : () => this.board.startMovingLeft(),
            ArrowRight : () => this.board.startMovingRight()
        }
        this.state = {
            cells: this.board.getCells()
        }
        this.arrowPressed = this.arrowPressed.bind(this);
        document.onkeydown = this.arrowPressed;
        window.onKeyDown = this.arrowPressed;
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateCells(), 200);
        
    }

    updateCells() {
        if ( this.pause )
            return;
        this.board.tick();
        this.setState( {
            cells: this.board.getCells()
        });
    }

    render() {
        return (
            <div onKeyDown={(e) => this.arrowPressed(e)} tabIndex="0" style={ styles.mainContainer }>
                <BoardView cells={this.state.cells}/>
                <button onClick={() => this.togglePause() } className="pauseButton">Pause</button>
            </div>
        )
    }

    togglePause() {
        this.pause = !this.pause;
    }

    arrowPressed(event) {
        var movementMethod = this.keyMethods[event.key];
        if ( movementMethod === undefined )
            return; 
        
        movementMethod();
    }
}

const styles = {
    mainContainer: {
        width: "100%",
        height: "100%",
        padding: "auto",
        textAlign: "center",
        margin: "auto",
        paddingTop: 40
    },
}