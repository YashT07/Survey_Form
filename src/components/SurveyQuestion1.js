import React, { Component } from 'react';

export default class SurveyQuestion1 extends Component{
    
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
                    <p>{values.firstName}, are you a localite ?</p>
                    <input type="radio"  value="Yes"/>
                    <label>Yes</label>
                    <p></p>
                    <input type="radio" value="No"/>
                    <label >No</label>
                    <p></p>
                    <input type="radio"  value="Other"/>
                    <label >Other(Please Specify)</label>
                    <p></p>
                    <input type="text" name="Other-textbox"/>
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