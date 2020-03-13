import * as actionTypes from './actionTypes';

export const switchPage = (itemName) => {

    return {

        type: actionTypes.SWITCH_COMPONENT,
        targetPage: itemName

    };

};

