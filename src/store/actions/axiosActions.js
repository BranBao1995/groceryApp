import * as actionTypes from './actionTypes';

import axios from '../../axios-post';

export const startToConnect = () => {

    return {

        type: actionTypes.START_LIST

    }

}

export const failedToConnect = (error) => {

    return {

        type: actionTypes.FAIL_LIST,
        error: error

    }

}


export const prepareToSaveToServer = (id, postData, postedDate) => {

    return {

        type: actionTypes.SAVE_LIST,
        id: id,
        targetList: postData,
        postedDate: postedDate

    }

};

export const saveToServer = (postData) => {

    return (dispatch, getState) => {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(); 

        const data = {

            ...postData,
            postedDate: date


        }

        const userId = getState().auth.userId;
        const token = getState().auth.token;
        const url = '/list/'+userId+'.json?auth=' + token;

        dispatch(startToConnect());
        axios.post(url, data)
        .then(response => {
            dispatch(prepareToSaveToServer(response.data.name, data, date));
        })
        .catch(error => {
            dispatch(failedToConnect(error));
        })

    }


};

export const fetchStart = () => {

    return {

        type: actionTypes.FETCH_START

    }

}

export const fetchFailed = (error) => {

    return {

        type: actionTypes.FETCH_FAIL,
        error: error

    }

}

export const fetchSuccess = (list) => {

    return {

        type: actionTypes.FETCH_SUCCESS,
        list: list

    }

}


export const fetch = () => {

    return (dispatch, getState) => {

        dispatch(fetchStart());

        const userId = getState().auth.userId;
        const token = getState().auth.token;
        const url = '/list/'+userId+'.json?auth=' + token;

        axios.get(url)
        .then(res => {

            const fetchedList = [];
            for (let key in res.data) {
                fetchedList.push({
                    ...res.data[key],
                    id: key
                });
            }

            dispatch(fetchSuccess(fetchedList));

        }).catch(error => {

            dispatch(fetchFailed(error));

        })

    }

}

export const deleteListSuccessful = () => {

    return {

        type: actionTypes.DELETE_LIST

    }
    

}

export const deleteList = (id) => {

    return (dispatch, getState) => {

        const userId = getState().auth.userId;
        const token = getState().auth.token;
        const url = '/list/' + userId + '/' + id + '.json?auth=' + token;

        const data = getState().save.list[id];

        axios.delete(url, data)
        .then(response => {

            // console.log(response.data)

            // const newList = [];
            // for (let key in response.data) {
            //     newList.push({
            //         ...response.data[key],
            //         id: key
            //     });
            // }

            dispatch(deleteListSuccessful());
            dispatch(fetch());

        }).catch(error => {

            console.log(error);

        })

    }

}



export const display = (data) => {

    return {

        type: actionTypes.DISPLAY,
        data: data

    }

}


export const authStart = () => {

    return {

        type: actionTypes.AUTH_START

    }

}

export const authFail = (error) => {

    return {

        type: actionTypes.AUTH_FAIL,
        error: error

    }

}

export const authSuccess = (token, userId) => {

    return {

        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId

    }

}


export const login = (email, password) => {

    return dispatch => {

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1MUtRMLhRjOfe-p_ONT0tKiFZQPExawc';

        axios.post(url, authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(autoLogout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });

    }


}

export const signup = (email, password) => {

    return dispatch => {

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1MUtRMLhRjOfe-p_ONT0tKiFZQPExawc';

        axios.post(url, authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(autoLogout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });

    }


}

export const logout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    return {

        type: actionTypes.AUTH_LOGOUT

    }

}

export const autoLogout = (expiration) => {

    return dispatch => {

        setTimeout(() => {
            dispatch(logout());
        }, expiration * 1000);

    }

} 

export const authCheckStatus = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};




// export const statusChangeFail = (error) => {

//     return {

//         type: actionTypes.STATUS_CHANGE_FAIL,
//         error: error

//     }

// }

// export const statusChangeSuccess = (newStatus) => {

//     return {

//         type: actionTypes.STATUS_CHANGE_SUCCESS,
//         newStatus: newStatus

//     }

// }

// export const statusChange = (id, newStatus) => {

//     return dispatch => {

//         let link = '/list/'+id+'.json';

//         axios.put(link, newStatus)
//         .then(response => {
//             dispatch(statusChangeSuccess(newStatus));
//         })
//         .catch(error => {

//             dispatch(statusChangeFail(error));

//         })

//     }

// }