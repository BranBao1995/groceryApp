import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './meat.css';
import MeatItems from '../../../components/meatItems/meatItems';
import * as actions from '../../../store/actions/index';

class Meat extends Component {

    state = {

        items: ['chickenBreast', 'wings', 'porkChop', 'bacon', 'lamb', 'sirloin', 'sausage']

    }

    render () {

        const page = 'default';

        let meatItems = [];

        meatItems = this.state.items.map(el => {

            return (<MeatItems key={el} imageName={el} 
                                itemName={el} onAddItem={()=>this.props.addItem(el)} 
                                onMinusItem={() => this.props.minusItem(el)} 
                                quantity={this.props.items[el]} />);

        });

        return (

            <div className={classes.container}>
                <div className={classes.items}>
                    {meatItems}
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


export default connect(mapStateToProps, mapDispatchToProps)(Meat);