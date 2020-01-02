import React from 'react';
import '../Model/Board';

export default class BoardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells : props.cells
        }
    }

    render() {
        var list = [];
        this.state.cells.forEach(row => {
            var rowString = "";
            row.forEach(element => {
                rowString += element.getTimer() + " ";
            });
            list.push(<p>{ rowString }</p>);
        });

        return ( <div>{list}</div> )
    }
}