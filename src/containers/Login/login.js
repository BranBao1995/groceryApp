import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import axios from '../../axios-post';

import classes from './login.css';
import Div from '../../hoc/div/div';
import Input from '../../components/formInput/formInput';
import Nav from '../../components/nav/nav';
// import Spinner from '../../components/UI/spinner/spinner';
import * as actions from '../../store/actions/index';
import errorHandler from '../../hoc/div/errorHandler';


class Login extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
        // isSignup: true
    }

    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );

    }

    submitHandler = ( event ) => {
        event.preventDefault();
        this.props.login( this.state.controls.email.value, this.state.controls.password.value);
    }

    render() {

        let redirect = null;

        if(this.props.logoutState) {

            redirect = null;

        } else {

            redirect = <Redirect to="/" />

        }

        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        return (

            <Div classes={classes.container}>

                {redirect}

                <Nav />

                <form className={classes.form} onSubmit={this.submitHandler}>
                    
                    <div className={classes.formField}>
                        {form}
                    </div>
                    
                    <button className={classes.button}>SUBMIT</button>

                </form>

            </Div>

        )
    

    }

}

const mapStateToProps = (state) => {

    return {

        token: state.auth.token,
        logoutState: state.auth.isLoggedOut

    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        login: (email, password) => dispatch(actions.login(email, password))

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Login, axios));