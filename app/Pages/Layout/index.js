/**
 * Created by andresrojas on 2/2/17.
 */
import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Style from './style.css'

export default class Layout extends React.Component{

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