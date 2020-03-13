import React, { Component } from 'react';

import Div from './div';
import ErrorMessage from '../../components/UI/errorMessage/errorMessage';

const errorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        state = {
            error: null
        }

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use( req => {
                this.setState( { error: null } );
                return req;
            } );
            this.resInterceptor = axios.interceptors.response.use( res => res, error => {
                this.setState( { error: error } );
            } );
        }

        componentWillUnmount () {
            axios.interceptors.request.eject( this.reqInterceptor );
            axios.interceptors.response.eject( this.resInterceptor );
        }

        errorConfirmed = () => {

            this.setState({error: null});

        }

        render () {

            return (

                <Div>

                    <ErrorMessage message={this.state.error ? this.state.error.message : null} show={this.state.error} clicked={this.errorConfirmed} />

                    <WrappedComponent {...this.props} />

                </Div>
                

            )


        }

    }


}

export default errorHandler;