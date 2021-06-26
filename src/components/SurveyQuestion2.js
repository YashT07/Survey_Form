import React, { Component } from 'react';

export default class SurveyQuestion2 extends Component{
    
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
                    <p>{values.firstName}, How many family members are there in your house who is in 15-30 age group ?</p>
                    <input type="radio"  value="one"/>
                    <label>1</label>
                    <p></p>
                    <input type="radio" value="two"/>
                    <label>2</label>
                    <p></p>
                    <input type="radio"  value="three"/>
                    <label>3</label>
                    <p></p>
                    <input type="radio"  value="other"/>
                    <label>Other(Please Specify)</label>
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