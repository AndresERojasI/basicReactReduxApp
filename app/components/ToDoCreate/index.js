/**
 * Created by andresrojas on 2/2/17.
 */
import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


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
            task : ""
        });
    }


    handleChange(event){
        this.setState({
            task : event.target.value
        })
    }

    render(){
        return (
            <Card>
                <CardText>
                    <TextField
                        hintText="Task Description"
                        floatingLabelText="Task description"
                        defaultValue={this.state.task}
                        onChange={this.handleChange.bind(this)}
                    />
                    <RaisedButton label='Add Task' onClick={this.addTask.bind(this)}/>
                </CardText>
            </Card>

        )
    }
}

export default ToDoCreate;