import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, SHOW_DETAILS } from "../actions";

const initialState = {
    artworks: [{title:'test piece', id:1}, {title: 'second artwork', id:2}],
    isFetching: false,
    error: '',
    detailsDisplayed: ''
};

export default function artReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_START:
            console.log('Fetch Starting!!');
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
        case SHOW_DETAILS:
            return {
                ...state,
                detailsDisplayed: action.payload
            }
        default:
          return state;
      }
}

