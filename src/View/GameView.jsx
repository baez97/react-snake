import React from 'react';
import Board from '../Model/Board';
import BoardView from './BoardView';
import './GameStyles.css';
export default class GameView extends React.Component {
    constructor() {
        super();
        this.startGame();
        this.keyMethods = {
            ArrowUp    : () => this.board.startMovingUp(),
            ArrowDown  : () => this.board.startMovingDown(),
            ArrowLeft  : () => this.board.startMovingLeft(),
            ArrowRight : () => this.board.startMovingRight()
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
            cells: this.board.getCells(),
            gameIsOver: this.board.isGameOver()
        });
    }

    startGame() {
        this.board = new Board();
        this.pause = false;
        this.state = {
            cells: this.board.getCells(),
            gameIsOver: false
        }
    }

    render() {
        if ( this.state.gameIsOver )
            return (
            <div style={ styles.mainContainer }>
                <h1 style={{marginTop: 50, fontFamily: "cookies"}}>The Game is Over</h1>
                <button onClick={() => this.startGame() } className="pauseButton">Restart</button>
            </div>);
        return (
            <div onKeyDown={(e) => this.arrowPressed(e)} tabIndex="0" style={ styles.mainContainer }>
                <BoardView cells={this.state.cells}/>
                <button onClick={() => this.togglePause() } className="pauseButton">Pause</button>
            </div>
        );
    }

    togglePause() {
        this.pause = !this.pause;
    }

    arrowPressed(event) {
        if ( event.key === " ")
            this.togglePause();
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