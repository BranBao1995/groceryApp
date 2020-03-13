import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility';

const initialState = {

    items: {
        lettuce: 0,
        carrot: 0,
        spinach: 0,
        cucumber: 0,
        tomato: 0,
        potato: 0,
        chickenBreast: 0,
        wings: 0,
        porkChop: 0,
        bacon: 0,
        lamb: 0,
        sirloin: 0,
        sausage: 0,
        coke: 0,
        juice: 0,
        coffee: 0,
        gingerAle: 0,
        iceTea: 0,
        sparklingWater: 0,
        coconutWater: 0,
        tea: 0,
        milk: 0,
        soyMilk: 0,
        whippedCream: 0,
        cheese: 0,
        butter: 0,
        yogurt: 0,
        eggs: 0,
        chips: 0,
        chocolate: 0,
        iceCream: 0,
        nuts: 0,
        candy: 0,
        cookies: 0,
        biscuits: 0
    },

    activeList: false

}


const addItem = (state, action) => {

    let finalState = null;
    const updatedAmount = {
        [action.targetItem]: state.items[action.targetItem] + 1
    }
    const updatedState = updateObject(state.items, updatedAmount);
    const stateArray = Object.keys(updatedState).map(el => {
        return updatedState[el];
    }).reduce((sum, el) => {
        return sum + el;
    }, 0);

    if (stateArray > 0) {

        finalState = {

            items: updatedState,
            activeList: true
        }

    } else {

        finalState = {

            items: updatedState,
            activeList: false
        }
    }

    return updateObject(state, finalState);

}

const minusItem = (state, action) => {

    let finalState = null;
    const updatedAmount = {
        [action.targetItem]: state.items[action.targetItem] - 1
    }

    const updatedState = updateObject(state.items, updatedAmount);
    const stateArray = Object.keys(updatedState).map(el => {
        return updatedState[el];
    }).reduce((sum, el) => {
        return sum + el;
    }, 0);

    // finalState = {
    //     items: updatedState
    // }
    if (stateArray > 0) {

        finalState = {

            items: updatedState,
            activeList: true
        }

    } else {

        finalState = {

            items: updatedState,
            activeList: false
        }
    }

    return updateObject(state, finalState);

}

const clearList = (state, action) => {

    const backToZero = {
        lettuce: 0,
        carrot: 0,
        spinach: 0,
        cucumber: 0,
        tomato: 0,
        potato: 0,
        chickenBreast: 0,
        wings: 0,
        porkChop: 0,
        bacon: 0,
        lamb: 0,
        sirloin: 0,
        sausage: 0,
        coke: 0,
        juice: 0,
        coffee: 0,
        gingerAle: 0,
        iceTea: 0,
        sparklingWater: 0,
        coconutWater: 0,
        tea: 0,
        milk: 0,
        soyMilk: 0,
        whippedCream: 0,
        cheese: 0,
        butter: 0,
        yogurt: 0,
        eggs: 0,
        chips: 0,
        chocolate: 0,
        iceCream: 0,
        nuts: 0,
        candy: 0,
        cookies: 0,
        biscuits: 0
    }

    const updatedItems = updateObject(state.items, backToZero);

    const newState = {

        items: updatedItems,
        activeList: false

    }

    const finalState = updateObject(state, newState);

    return finalState;

}

const deleteItem = (state, action) => {

    let finalState = null;
    const updatedAmount = {
        [action.targetItem]: 0
    };

    const updatedState = updateObject(state.items, updatedAmount);
    const stateArray = Object.keys(updatedState).map(el => {
        return updatedState[el];
    }).reduce((sum, el) => {
        return sum + el;
    }, 0);

    if (stateArray > 0) {

        finalState = {

            items: updatedState,
            activeList: true
        }

    } else {

        finalState = {

            items: updatedState,
            activeList: false
        }
    }

    return updateObject(state, finalState);

}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.ADD:
            return addItem(state, action);
        
        case actionTypes.MINUS:
            return minusItem(state, action);

        case actionTypes.CLEAR:
            return clearList(state, action); 

        case actionTypes.DELETE:
            return deleteItem(state, action);

        default: return state;

    }

}

export default reducer;