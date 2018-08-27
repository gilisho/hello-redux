import React, {Component} from "react";
import HelloWorld from "./HelloWorld";
import {createStore} from "redux"; //an import from the redux library
import reducer from "./reducers";

/* createStore takes in a few arguments. The first is a reducer. The store is always in sync with a reducer.
    The reducer is the only mandatory argument passed into createStore() */
const initialState = {tech: 'Redux'};
const store = createStore(reducer, initialState);

class App extends Component {
    render() {
        return <HelloWorld tech={store.getState().tech}/>;
    }
}

export default App;
