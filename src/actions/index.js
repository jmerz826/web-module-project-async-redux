export const ADD_FAVORITE = 'ADD_FAVORITE';

export function updateTitle(id) {
    return {
        type: ADD_FAVORITE,
        payload: id
    };
}