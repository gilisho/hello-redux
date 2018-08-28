import React from "react";
import { store } from "./store";
import {setTechnology} from "./actions";

const ButtonGroup = ({ technologies }) => (
    <div>
        {technologies.map((tech, i) => (
            <button
                data-tech={tech}
                key={`btn-${i}`}
                className="hello-btn"
                onClick={dispatchBtnAction}
            >
                {tech}
            </button>
        ))}
    </div>
);

function dispatchBtnAction(e) { // dispatch an action when a click has happened.
    const tech = e.target.dataset.tech; // get button text
    store.dispatch(setTechnology(tech)); // store.dispatch() is how you dispatch an action in Redux
}

export default ButtonGroup;
