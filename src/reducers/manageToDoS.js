import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO
} from '../actions/manageToDos';

const INITIAL_STATE = {
    lightboxOpen: false,
    toDos: [
        { name: "Buy new sweatshirt", checked: false, id: 0 },
        { name: "Begin promotional phase", checked: true, id: 1 },
        { name: "Read an article", checked: true, id: 2 },
        { name: "Try not to fall asleep", checked: false, id: 3 },
        { name: "Watch ‘Sherlock’", checked: false, id: 4 },
        { name: "Begin QA for the product", checked: false, id: 5 },
        { name: "Go for a walk", checked: false, id: 6 }
    ]
};

export const manageToDoS = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return addToDo(state.toDos, action.text);
        case "DELETE_TODO":
            return state;
        case "TOGGLE_TODO":
            return toggleTodo(state.toDos, action.item);
        default:
            return state;
    }
};

export const toggleTodo = (toDoList, toDoItem) => {
    const array = toDoList.map(item => {
        if (item.id === toDoItem.id) {
            return {
                ...item,
                checked: !item.checked
            }
        } else {
            return item;
        }
    });

    console.log(array);
}

export const addToDo = (toDoList, toDoText) => {
    const newToDo = {
        name: toDoText,
        checked: false
    }
    console.log([...toDoList, newToDo]);
    return [...toDoList, newToDo];
}
