/**
 * Created by andresrojas on 2/2/17.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import style from './style.css'

export default class Layout extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <section className="wrapper">
                <Header/>
                {this.props.children}
                <Footer/>
            </section>
        )
    }
}