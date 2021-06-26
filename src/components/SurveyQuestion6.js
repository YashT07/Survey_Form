import React, { Component } from 'react';

export default class SurveyQuestion6 extends Component{
    
    saveAndContinue=(e)=>{
        e.preventDefault()
        this.props.nextStep()
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        return(
            <div style={{padding:40}}>
                <form>
                    <p>{values.firstName}, in future, do you like if we provide home delivery service for grocery along with food ?</p>
                    <input type="radio"  value="Likely"/>
                    <label>Likely</label>
                    <p></p>
                    <input type="radio" value="Very Likely"/>
                    <label>Very Likely</label>
                    <p></p>
                    <input type="radio"  value="Unlikely"/>
                    <label>Unlikely</label>
                    <p></p>
                    <input type="radio"  value="Very Unlikely"/>
                    <label>Very Unlikely</label>
                    <p></p>
                    <input type="radio"  value="Neither likely nor unlikely"/>
                    <label>Neither likely nor unlikely</label>
                    <p></p>
                    
                    {/* <input
                        
                        placeholder='Answer-1'
                        onChange={this.props.handleChange('answer1')}
                        defaultValue={values.answer1}
                    /> */}
                    <p></p>
                    <button onClick={this.back}>Back</button>
                    <button onClick={this.saveAndContinue}>Save and Continue</button>
                </form>
            </div>
        );
    }
}   