import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';


class Logout extends Component {

    componentDidMount(){

        this.props.logout();
        this.props.clearOverview();
        this.props.clearShoppingList();

    }

    render() {

        return <Redirect to="/login" />

    }

}

const mapDispatchToProps = (dispatch) => {

    return{

        logout: () => dispatch(actions.logout()),
        clearOverview: () => dispatch(actions.deleteListSuccessful()),
        clearShoppingList: () => dispatch(actions.clearList())

    }

}

export default connect(null, mapDispatchToProps)(Logout);