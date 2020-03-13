import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './primary.css';
import * as actions from '../../../store/actions/index';
import ItemLabel from '../../../components/itemLabel/itemLabel';
import Div from '../../../hoc/div/div';


class Primary extends Component {

    state = {

        list: ['vegetables', 'meat', 'diary', 'snacks', 'beverages']

    }

    render () {

        let itemComponents = [];

        itemComponents = this.state.list.map(el => {

            return (<ItemLabel key={el} imageName={el} itemName={el} clicked={this.props.pageChange} />);

        });

        return (

            <Div classes={classes.container}>

                {itemComponents}

            </Div>
           
        )


    };

};

const mapStateToProps = (state) => {

    return {

        page: state.page

    };

};

const mapDispatchToProps = dispatch => {

    return {

        pageChange: (itemName) => dispatch(actions.switchPage(itemName))

    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Primary);