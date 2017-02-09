/**
 * Created by andresrojas on 2/2/17.
 */
import React, { Component } from 'react';
import { connect } from "react-redux"

import ToDoItem from '../../components/ToDoItem'
import ToDoCreate from '../../components/ToDoCreate'

import * as TodoActions from '../../actions/TodoActions'

@connect((store) => {
    console.log('STORE: ', store);
    return {
        todos: store.todos.todos
    }
})
export default class Index extends Component{
    componentWillMount() {
        this.props.dispatch(TodoActions.loadTodos())
    }

    createTodo(text){
        this.props.dispatch(TodoActions.createTodo(text))
    }

    deleteTodo(id){
        this.props.dispatch(TodoActions.deleteTodo(id))
    }

    render(){
        const { todos } = this.props;

        const todosList = todos.map((item) => {
            return (
                <li key={item.id}>
                    <ToDoItem {...item} deleteTodo={this.deleteTodo.bind(this)}/>
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