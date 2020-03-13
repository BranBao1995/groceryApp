import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './beverages.css';
import BeverageItems from '../../../components/beverageItems/beverageItems';
import * as actions from '../../../store/actions/index';

class Beverages extends Component {

    state = {

        items: ['coke', 'juice', 'coffee', 'gingerAle', 'iceTea', 'sparklingWater', 'coconutWater', 'tea']

    }

    render () {

        const page = 'default';

        let beverageItems = [];

        beverageItems = this.state.items.map(el => {

            return (<BeverageItems key={el} imageName={el} 
                                itemName={el} onAddItem={()=>this.props.addItem(el)} 
                                onMinusItem={() => this.props.minusItem(el)} 
                                quantity={this.props.items[el]} />);

        });

        return (

            <div className={classes.container}>
                <div className={classes.items}>
                    {beverageItems}
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


export default connect(mapStateToProps, mapDispatchToProps)(Beverages);