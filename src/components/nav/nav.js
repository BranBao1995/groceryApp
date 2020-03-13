import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './nav.css';
import Div from '../../hoc/div/div';
import * as actions from '../../store/actions/index';


class Nav extends Component {


    render () {

        let content = null;

        if(this.props.logoutState) {

            content = <li>
                        <div className={classes.loginLink}><NavLink to="/login">Log In</NavLink></div>
                        <div className={classes.signupLink}><NavLink to="/signup">Sign up</NavLink></div>  
                    </li>
                       

        } else {

            content = <li>
                           
                            <div className={classes.logoutLink}>
                                <NavLink to="/logout">Logout</NavLink>
                            </div>
                            <div className={classes.flaggedLink}>
                                <NavLink to="/starred">Flagged</NavLink>
                            </div>
            </li>

        }


        return (

            <Div classes={classes.container}>
    
                <a href="/" className={classes.Logo}>Grocery List</a>
    
                <ul>
    
                    <li><NavLink to="/">Home</NavLink></li>
                    {content}
                    
    
                </ul>
    
            </Div>
    
        )
    


    }

    

};

const mapStateToProps = (state) => {

    return {

        logoutState: state.auth.isLoggedOut

    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        logout: () => dispatch(actions.logout())

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);