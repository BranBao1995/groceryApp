import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility';

const initialState = {

    page: 'default'

}


const switchComponent = (state, action) => {

    const newPage = action.targetPage;
    const updatedState = {
        page: newPage
    }

    return updateObject(state, updatedState)

}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.SWITCH_COMPONENT: return switchComponent(state, action);
        default: return state;

    }

}

export default reducer;