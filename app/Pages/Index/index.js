/**
 * Created by andresrojas on 2/2/17.
 */
import React, { Component } from 'react';
import ToDoItem from '../../components/ToDoItem'
import ToDoCreate from '../../components/ToDoCreate'
import TodoStore from '../../store'
import * as TodoActions from '../../actions/TodoActions'

export default class Index extends Component{
    constructor(){
        super();
        this.getTodos = this.getTodos.bind(this);
    }

    componentWillMount(){
        this.getTodos();
    }

    componentWillUnmount(){
        //remove listeners
    }

    getTodos(){
        this.setState(
            {
                todos: [
                    {task: "go shopping",id: 1},
                    {task: "fix car",id: 2},
                    {task: "meeting with michael",id: 3}
                ]
            }
        );
    }

    createTodo(text){
        TodoActions.createTodo(text);
    }

    render(){
        const { todos } = this.state;

        const todosList = todos.map((item) => {
            return (
                <li key={item.id}>
                    <ToDoItem {...item} />
                </li>
            )
        });

        return(
            <section classID="indexPage">
                <ToDoCreate createAction={this.createTodo.bind(this)}/>
                <ul>
                    {todosList}
                </ul>
            </section>
        )
    }
}