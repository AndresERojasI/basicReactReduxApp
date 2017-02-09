/**
 * Created by andresrojas on 2/2/17.
 */
import React from 'react';
import { Link } from 'react-router'

export default class Footer extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <header>
                <Link to="/">Index</Link>
                <Link to="about">About</Link>
            </header>
        )
    }
}