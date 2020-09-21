import * as actions from './actionTypes';

const reducer = (state = [] /* Initial state */, action) => {

    switch(action.type) {
        case actions.THING_ADDED:
            return [
                ...state,
                {
                    // something to add or update in state
                },
            ];
        case actions.THING_REMOVED:
            return state.filter(/* Filter function to remove */);
        case actions.THINGS_UPDATED:
            return state.map(
                // bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
            );
        default:
            return state;
    }
}

export default reducer;