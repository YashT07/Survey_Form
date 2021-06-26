import React, { Component } from 'react';

export default class SurveyQuestion4 extends Component{
    
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
                    <p>{values.firstName}, how frequently do you order parcel/home delivery?</p>
                    <input type="radio"  value="Every Day"/>
                    <label>Every Day</label>
                    <p></p>
                    <input type="radio" value="Once a Week"/>
                    <label>Once a Week</label>
                    <p></p>
                    <input type="radio"  value="More than Once a Week"/>
                    <label>More than Once a Week</label>
                    <p></p>
                    <input type="radio"  value="Once in a Month"/>
                    <label>Once in a Month</label>
                    <p></p>
                    <input type="radio"  value="More than Once in a Month"/>
                    <label>More than Once in a Month</label>
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