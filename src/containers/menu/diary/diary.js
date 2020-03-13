import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './diary.css';
import DiaryItems from '../../../components/diaryItems/diaryItems';
import * as actions from '../../../store/actions/index';

class Diary extends Component {

    state = {

        items: ['milk', 'soyMilk', 'whippedCream', 'cheese', 'butter', 'eggs', 'yogurt']

    }

    render () {

        const page = 'default';

        let diaryItems = [];

        diaryItems = this.state.items.map(el => {

            return (<DiaryItems key={el} imageName={el} 
                                itemName={el} onAddItem={()=>this.props.addItem(el)} 
                                onMinusItem={() => this.props.minusItem(el)} 
                                quantity={this.props.items[el]} />);

        });

        return (

            <div className={classes.container}>
                <div className={classes.items}>
                    {diaryItems}
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


export default connect(mapStateToProps, mapDispatchToProps)(Diary);