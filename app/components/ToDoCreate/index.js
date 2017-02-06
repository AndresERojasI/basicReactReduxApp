/**
 * Created by andresrojas on 2/2/17.
 */
import React, { Component } from 'react'
import TextDisplay from '../ToDoItem/'

class ToDoCreate extends Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            task : ""
        }
    }

    addTask(){
        try{
            this.props.createAction(this.state.task);
        }catch(e){
            console.log(e);
        }

        this.setState({
            task : ''
        });
    }


    handleChange(event){
        this.setState({
            task : event.target.value
        })
    }

    render(){
        return (
            <div>
                <input
                    type="text"
                    placeholder="Task description"
                    value={this.state.task}
                    onChange={this.handleChange.bind(this)}
                />
                <button onClick={this.addTask.bind(this)}>Add Task</button>
            </div>

        )
    }
}

export default ToDoCreate;