/**
 * Created by andresrojas on 2/2/17.
 */
import React, { Component } from 'react'

class ToDoItem extends Component{
    handleDeleteClick(event){
        console.log(this.props.id);
    }

    render(){
        let {task, id} = this.props
        return (
            <div>
                id:{id} - {task} &nbsp;&nbsp; <button onClick={this.handleDeleteClick.bind(this)}>Delete</button>
            </div>
        )
    }
}

export default ToDoItem