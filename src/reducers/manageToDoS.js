import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    TOGGLE_LIGHTBOX
} from '../actions/manageToDos';

import { generateID } from '../utils/generateID';

const INITIAL_STATE = {
    lightboxOpen: false,
    toDos: [
        { name: "Buy new sweatshirt", checked: false, id: generateID() },
        { name: "Begin promotional phase", checked: true, id: generateID() },
        { name: "Read an article", checked: true, id: generateID() },
        { name: "Try not to fall asleep", checked: false, id: generateID() },
        { name: "Watch ‘Sherlock’", checked: false, id: generateID() },
        { name: "Begin QA for the product", checked: false, id: generateID() },
        { name: "Go for a walk", checked: false, id: generateID() }
    ]
};

export const manageToDoS = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return addToDo(state, action.text);
        case "DELETE_TODO":
            return removeToDo(state, action.itemId);
        case "TOGGLE_TODO":
            return toggleTodo(state, action.itemId);
        case "TOGGLE_LIGHTBOX":
            return toggleLightbox(state);
        default:
            return state;
    }
};

export const toggleLightbox = (state) => {
    return { ...state, lightboxOpen: !state.lightboxOpen }
}

export const toggleTodo = (state, toDoItemId) => {
    const newToDoList = state.toDos.map(item => {
        if (item.id === toDoItemId) {
            return {
                ...item,
                checked: !item.checked
            }
        } else {
            return item;
        }
    });

    return { ...state, toDos: newToDoList };
}

export const addToDo = (state, toDoText) => {
    const newToDo = {
        name: toDoText,
        checked: false,
        id: generateID()
    }

    return { ...state, toDos: [...state.toDos, newToDo] };
}

export const removeToDo = (state, toDoItemId) => {
    const newToDoList = state.toDos.filter(item => item.id !== toDoItemId);

    return { ...state, toDos: newToDoList };
}