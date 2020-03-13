import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-post';

import classes from './important.css';
import Div from '../../hoc/div/div';
import Nav from '../../components/nav/nav';
import List from './list/list';
import Overview from './overview/overview';

class Important extends Component {



    render() {

        return (
            <Div classes={classes.container}>

                <Nav />
                <div className={classes.main}>

                    <List />
                    <Overview />

                </div>

            </Div>
        )

    }

}


export default Important;