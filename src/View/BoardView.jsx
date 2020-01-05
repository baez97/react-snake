import React from 'react';
import Factory from './Factory';
import '../Model/Board';

export default class BoardView extends React.Component {
    constructor(props) {
        super(props);
        this.factory = new Factory();
        this.state = {
            cells : props.cells
        }
    }

    render() {
        var list = [];
        this.state.cells.forEach(row => {
            var rowString = [];
            row.forEach(element => {
                rowString.push(this.factory.getCellView(element));
            });
            list.push(<div>{ rowString }</div>);
        });

        return ( <div>{list}</div> )
    }
}