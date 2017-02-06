/**
 * Created by andresrojas on 2/2/17.
 */
import React, { Component } from 'react';


export default class About extends Component{
    render(){
        return(
            <section classID="aboutPage">
                About - {this.props.params.id}
            </section>
        )
    }
}