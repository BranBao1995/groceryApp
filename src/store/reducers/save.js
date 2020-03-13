import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility';


const initialState = {

    list: [],
    loading: false,
    overview: {

        items: null,
        id: null

    }

}

const saveToServer = (state, action) => {

    const temp = updateObject(action.targetList, { id: action.id, postedDate: action.postedDate });

    return updateObject(state, {

        list: state.list.concat(temp),
        loading: false

    })

}

const startToConnect = (state, action) => {

    return updateObject(state, {loading: true});

}

const failedToConnect = (state, action) => {

    return updateObject(state, {
        
        loading: false

    })

}

const fetchStart = (state, action) => {

    return updateObject(state, {loading: true});

}

const fetchFailed = (state, action) => {

    return updateObject(state, {loading: false});

}

const fetchSuccess = (state, action) => {

    return updateObject(state, {

        list: action.list,
        loading: false

    })

}

const deleteListSuccessful = (state, action) => {

    const temp = updateObject(state.overview, {
        items: null,
        id: null
    })

    return updateObject(state, {
        loading: false,
        overview: temp
    });

}

const display = (state, action) => {

    const temp = updateObject(state.overview, {items: action.data.items, id: action.data.id});

    return updateObject(state, {

        overview: temp

    });

}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.SAVE_LIST:
            return saveToServer(state, action);

        case actionTypes.START_LIST:
            return startToConnect(state, action);

        case actionTypes.FAIL_LIST:
            return failedToConnect(state, action);

        case actionTypes.FETCH_START:
            return fetchStart(state, action);

        case actionTypes.FETCH_FAIL:
            return fetchFailed(state, action);

        case actionTypes.FETCH_SUCCESS:
            return fetchSuccess(state, action);

        case actionTypes.DELETE_LIST:
            return deleteListSuccessful(state, action);

        case actionTypes.DISPLAY:
            return display(state, action)

        default:
            return state;

    }

}


export default reducer;