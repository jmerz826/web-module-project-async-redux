export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const SHOW_DETAILS = 'SHOW_DETAILS';


export const fetchStart = () => {
    return {
        type: FETCH_START
    }
};

export const fetchSuccess = (art) => {
    console.log('The Fetch was SUCCESSFUL!!!!!!')
    return {
        type: FETCH_SUCCESS,
        payload: art
    }
}

export const fetchFailure = (err) => {
    return {
        type: FETCH_FAILURE,
        payload: err
    }
}

export const showDetails = (id) => {
    return {
        type: SHOW_DETAILS,
        payload:id
    }
}