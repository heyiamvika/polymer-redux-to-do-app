export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHECK_TODO = 'CHECK_TODO';
export const UNCHECK_TODO = 'UNCHECK_TODO';

export const checkToDo = () => {
    console.log("checked");
}

export const uncheckToDo = () => {
    console.log("unchecked");
}

// export const addToDo = (toDoList, newToDo) => {
//     console.log("added");
//     return [...toDoList, newToDo];
// }

export const deleteToDo = (toDoList, toDoToDelete) => {
    const newArray = [...toDoList.filter(item => item._id !== toDoToDelete._id)];
    console.log(newArray);

    return newArray;
}