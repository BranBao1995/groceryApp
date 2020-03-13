import React, { Component } from 'react';

import classes from './errorMessage.css';
import Div from '../../../hoc/div/div';
import Background from '../background/background';

class ErrorMessage extends Component {


    render () {

        let style = null;

        if (this.props.show) {

            style = {

                visibility: 'visible',
                opacity: '1'

            }

        } else if (!this.props.show) {

            style = {

                visibility: 'hidden',
                opacity: '0'

            }

        }

        return (

            <Div>

                <Background show={this.props.show} clicked={this.props.clicked} />
                <div className={classes.errorMessage} style={style}>
                    {this.props.message}
                </div>

            </Div>


        )

    }


}

export default ErrorMessage;