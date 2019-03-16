import {
    ADD_TODO,
    DELETE_TODO,
    CHECK_TODO,
    UNCHECK_TODO
} from '../actions/manageToDos';

const INITIAL_STATE = [
    { name: "Buy new sweatshirt", checked: false },
    { name: "Begin promotional phase", checked: true },
    { name: "Read an article", checked: true },
    { name: "Try not to fall asleep", checked: false },
    { name: "Watch ‘Sherlock’", checked: false },
    { name: "Begin QA for the product", checked: false },
    { name: "Go for a walk", checked: false }
];

export const manageToDoS = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return state;
        case "DELETE_TODO":
            return state;
        case "CHECK_TODO":
            console.log(action);
            return state;
        case "UNCHECK_TODO":
            console.log(action);
            return state;
        default:
            return state;
    }
};
