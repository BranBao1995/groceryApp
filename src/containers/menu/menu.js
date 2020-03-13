import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './menu.css';
import Div from '../../hoc/div/div';
import * as actions from '../../store/actions/index';
import Primary from './Primary/primary';
import Vegetables from './vegetables/vegetables';
import Meat from './meat/meat';
import Diary from './diary/diary';
import Snacks from './snacks/snacks';
import Beverages from './beverages/beverages';




class Menu extends Component {


    render() {

        let page = this.props.page;
        let component = null;

        if (page === 'default') {

            component = <Primary />

        } else if (page === 'vegetables') {

            component = <Vegetables />

        } else if (page === 'meat') {

            component = <Meat />

        } else if (page === 'diary') {

            component = <Diary />

        } else if (page === 'snacks') {

            component = <Snacks />
 
        } else if (page === 'beverages') {

            component = <Beverages />

        }

        return (

            <Div classes={classes.container}>

                {component}

            </Div>

        )
        

    }


}

const mapStateToProps = (state) => {

    return {

        page: state.menu.page

    };

};

const mapDispatchToProps = dispatch => {

    return {

        pageChange: () => dispatch(actions.switchPage())

    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);