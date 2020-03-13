import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './snacks.css';
import SnackItems from '../../../components/snackItems/snackItems';
import * as actions from '../../../store/actions/index';

class Snacks extends Component {

    state = {

        items: ['chips', 'chocolate', 'iceCream', 'nuts', 'candy', 'cookies', 'biscuits']

    }

    render () {

        const page = 'default';

        let snackItems = [];

        snackItems = this.state.items.map(el => {

            return (<SnackItems key={el} imageName={el} 
                                itemName={el} onAddItem={()=>this.props.addItem(el)} 
                                onMinusItem={() => this.props.minusItem(el)} 
                                quantity={this.props.items[el]} />);

        });

        return (

            <div className={classes.container}>
                <div className={classes.items}>
                    {snackItems}
                </div>
                <button className={classes.button} onClick={() => this.props.pageChange(page)} >Main Menu</button>
            </div>

        )

    }

}

const mapStateToProps = (state) => {

    return {

        page: state.menu.page,
        items: state.counter.items

    };

};

const mapDispatchToProps = dispatch => {

    return {

        pageChange: (page) => dispatch(actions.switchPage(page)),
        addItem: (itemName) => dispatch(actions.addItem(itemName)),
        minusItem: (itemName) => dispatch(actions.minusItem(itemName))

    };

};


export default connect(mapStateToProps, mapDispatchToProps)(Snacks);