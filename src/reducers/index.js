import { ADD_FAVORITE } from "../actions";

const initialState = {
    title: 'Redux Art Gallery'
};

export default function artReducer(state = initialState, action){
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...favorites, action.payload]
            }
        default:
          return state;
      }
}

