import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../../axios-post';

import classes from './list.css';
import Div from '../../../hoc/div/div';
import Spinner from '../../../components/UI/spinner/spinner';
import ListItems from '../../../components/listItems/saved/listItems';
import * as actions from '../../../store/actions/index';
import errorHandler from '../../../hoc/div/errorHandler';


class List extends Component {


    componentDidMount () {

        this.props.fetchList();

    }

    displayHandler = (groceryItems, id) => {

        const data = {

            items: groceryItems,
            id: id

        }

        this.props.onDisplay(data)

    }

    render(){

        let content = null;

        if (this.props.loading) {

            content = <Spinner />

        } else {

            content = this.props.list.map(el => {

                return (
                    <li key={el.id}>
                        <ListItems name={el.postedDate} items={el.groceryItems} clicked={() => this.displayHandler(el.groceryItems, el.id)}/>
                    </li>
                )

            })

            

        }

        return (

            <Div classes={classes.container}>

                <ul className={classes.list}>

                    {content}

                </ul>

            </Div>

        );


    }


}

const mapStateToProps = (state) => {

    return {

        list: state.save.list,
        loading: state.save.loading

    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        fetchList: () => dispatch(actions.fetch()),
        onDisplay: (data) => dispatch(actions.display(data))

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(List, axios));