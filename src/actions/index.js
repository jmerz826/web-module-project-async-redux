export const ADD_FAVORITE = 'ADD_FAVORITE';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export function addFavorite(id) {
    return {
        type: ADD_FAVORITE,
        payload: id
    };
}

export const fetchStart = () => {
    return {
        type: FETCH_START
    }
};

export const fetchSuccess = (art) => {
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