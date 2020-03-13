import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './vegetables.css';
import VegeItems from '../../../components/vegeItems/vegeItems';
import * as actions from '../../../store/actions/index';

class Vegetables extends Component {

    state = {

        items: ['carrot', 'lettuce', 'cucumber', 'spinach', 'potato', 'tomato']

    }

    render () {

        const page = 'default';

        let vegeItems = [];

        vegeItems = this.state.items.map(el => {

            return (<VegeItems key={el} imageName={el} 
                                itemName={el} onAddItem={()=>this.props.addItem(el)} 
                                onMinusItem={() => this.props.minusItem(el)} 
                                quantity={this.props.items[el]} />);

        });

        return (

            <div className={classes.container}>
                <div className={classes.items}>
                    {vegeItems}
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


export default connect(mapStateToProps, mapDispatchToProps)(Vegetables);