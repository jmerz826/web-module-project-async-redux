import { ADD_FAVORITE, FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
    artworks: [],
    isFetching: false,
    error: ''
};

export default function artReducer(state = initialState, action){
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...favorites, action.payload]
            };
        case FETCH_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                artworks: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
          return state;
      }
}

