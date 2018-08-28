import {createStore} from "redux"; //an import from the redux library
import reducer from "../reducers";

/* createStore takes in a few arguments. The first is a reducer. The store is always in sync with a reducer.
    The reducer is the only mandatory argument passed into createStore() */
const initialState = { tech: "React" };
export const store = createStore(reducer, initialState);