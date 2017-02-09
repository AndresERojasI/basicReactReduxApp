/**
 * Created by andresrojas on 2/2/17.
 */
import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Style from './style.css'

export default class Layout extends React.Component{

    render(){
        return(
            <MuiThemeProvider>
                <section className="wrapper">
                    <Header> </Header>
                    {this.props.children}
                    <Footer/>
                </section>
            </MuiThemeProvider>
        )
    }
}