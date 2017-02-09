/**
 * Created by andresrojas on 2/2/17.
 */
import React from 'react';
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar';
import * as Colors from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';


export default class Footer extends React.Component{
    constructor(){
        super();
    }

    render(){
        let menuItems = [
            <Link to="/" key={'index'}><RaisedButton label="Home" /></Link>,
            <Link to="about" key={'about'}><RaisedButton label="About" /></Link>
        ];

        return(
            <header>
                <AppBar title="My To-Do list" showMenuIconButton={false} children={menuItems}/>
            </header>
        )
    }
}