import * as actionTypes from './actionTypes';


export const addItem = (itemName) => {

    return {

        type: actionTypes.ADD,
        targetItem: itemName

    };

};

export const minusItem = (itemName) => {

    return {

        type: actionTypes.MINUS,
        targetItem: itemName

    };

};

export const clearList = () => {

    return {

        type: actionTypes.CLEAR

    }

}

export const deleteItem = (itemName) => {

    return {

        type: actionTypes.DELETE,
        targetItem: itemName

    }

}