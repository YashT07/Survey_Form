import React, { Component } from 'react';
import UserDetails from '../components/UserDetails';
import SurveyQuestion1 from '../components/SurveyQuestion1';
import SurveyQuestion2 from '../components/SurveyQuestion2';
import SurveyQuestion3 from '../components/SurveyQuestion3';
import SurveyQuestion4 from '../components/SurveyQuestion4';
import SurveyQuestion5 from '../components/SurveyQuestion5';
import SurveyQuestion6 from '../components/SurveyQuestion6';
import Success from '../components/Success';


export default class MainSurveyForm extends Component{
    
        state = {
            step: 1,
            firstName: '',
            lastName: '',
            answer1:'',
            answer2:'',
            answer3:'',
            answer4:'',
        }

        nextStep = () => {
            const { step } = this.state
            this.setState({
                step : step + 1
            })
        }
    
        prevStep = () => {
            const { step } = this.state
            this.setState({
                step : step - 1
            })
        }
    
        handleChange = input => event => {
            this.setState({ [input] : event.target.value })
        }

        render(){
            const {step} = this.state;
            const { firstName, lastName, answer1,answer2,answer3,answer4 } = this.state;
            const values = { firstName, lastName, answer1, answer2, answer3, answer4 };
            switch(step) {
            case 1:
                return <UserDetails
                        nextStep={this.nextStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />
            case 2:
                return <SurveyQuestion1
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />
            case 3:
                return <SurveyQuestion2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        />
             case 4:
                return <SurveyQuestion3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        />
             case 5:
                return <SurveyQuestion4
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        />

             case 6:
                return <SurveyQuestion5
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        />
            case 7:
                return <SurveyQuestion6
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        />
            case 8:
                return <Success
                        />
            }
    }
}