/**
 * Created by andresrojas on 2/2/17.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Header extends Component{
    render(){
        return(
            <header>
                <Link to="/">Index</Link>
                <Link to="about">About</Link>
            </header>
        )
    }
}