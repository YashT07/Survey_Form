import React, { Component } from 'react';

export default class SurveyQuestion3 extends Component{
    
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
                    <p>{values.firstName}, do you order parcel/home delivery of food from near by hotel/restaurants</p>
                    <input type="radio"  value="Yes"/>
                    <label>Yes</label>
                    <p></p>
                    <input type="radio" value="No"/>
                    <label >No</label>
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