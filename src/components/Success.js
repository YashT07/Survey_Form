import React, { Component } from 'react';

export default class Success extends Component{

    saveAndContinue=(e)=>{
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <div style={{padding:40}}>
                <h2>Thank you for your Response</h2>
            </div>
        );
    }
}