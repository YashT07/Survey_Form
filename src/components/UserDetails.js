import React, { Component } from 'react';

export default class UserDetails extends Component{

    saveAndContinue=(e)=>{
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <div style={{padding:40}}>
                <form>
                    <h1>Meals on Wheels Survey</h1>
                    <p>What is your first name ?</p>
                    <input
                        placeholder='First Name'
                        onChange={this.props.handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <p>What is your last name ?</p>
                    <input
                        placeholder='Last Name'
                        onChange={this.props.handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <p></p>
                    <button onClick={this.saveAndContinue}>Save and Continue</button>
                </form>
            </div>
        );
    }
}