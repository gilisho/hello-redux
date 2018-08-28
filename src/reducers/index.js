import {SET_TECHNOLOGY} from "../actions/action-consts";

export default (state, action) => {
    console.log(action); // log whatever action comes into the reducer
    switch (action.type) {
        case SET_TECHNOLOGY:
            return {...state, tech: action.tech};

        default:
            return state; // the reducer returns the new state of the app
    }
}

// Never mutate the state given to the reducer. instead - create a new state with the properties of the old state (use ...state).
// every Reducer you write should be a pure function with no side-effects — No API calls or updating a value outside the scope of the function