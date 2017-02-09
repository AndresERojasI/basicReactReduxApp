/**
 * Created by andresrojas on 2/2/17.
 */
import React, { Component } from 'react';
import { connect } from "react-redux"
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import ToDoItem from '../../components/ToDoItem'
import ToDoCreate from '../../components/ToDoCreate'

import * as TodoActions from '../../actions/TodoActions'

@connect((store) => {
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
                <ToDoItem key={item.id} {...item} deleteTodo={this.deleteTodo.bind(this)}/>
            )
        });

        return(
            <section>
                <ToDoCreate createAction={this.createTodo.bind(this)}/>
                <Card classID="indexPage">
                    <CardText>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>ID</TableHeaderColumn>
                                    <TableHeaderColumn>Task Description</TableHeaderColumn>
                                    <TableHeaderColumn>Actions</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                { todosList }
                            </TableBody>
                        </Table>
                    </CardText>
                </Card>
            </section>

        )
    }
}