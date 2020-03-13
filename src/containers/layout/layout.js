import React, { Component } from 'react';

import classes from './layout.css';
import Nav from '../../components/nav/nav';
import Div from '../../hoc/div/div';
import Main from '../main/main';

class Layout extends Component {

    render () {


        return (

            <Div classes={classes.container}>

                <Nav />
                <Main />

            </Div>
    

        )
       

    }

}

export default Layout;