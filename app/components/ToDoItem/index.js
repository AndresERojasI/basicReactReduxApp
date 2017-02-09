/**
 * Created by andresrojas on 2/2/17.
 */
import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {TableRow, TableRowColumn} from 'material-ui/Table';

class ToDoItem extends Component{
    handleDeleteClick(event){
        this.props.deleteTodo(this.props.id);
    }

    render(){
        let {task, id} = this.props
        return (
            <TableRow>
                <TableRowColumn>{id}</TableRowColumn>
                <TableRowColumn>{task}</TableRowColumn>
                <TableRowColumn>
                    <RaisedButton label="Delete" onClick={this.handleDeleteClick.bind(this)}/>
                </TableRowColumn>
            </TableRow>
        )
    }
}

export default ToDoItem