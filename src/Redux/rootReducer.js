import { combineReducers } from "redux";
import { todoListReducer } from "./todoListReducer";
import { taskReducer } from "./listReducer";



export const rootReducer = combineReducers({
    todolistReducer:todoListReducer,
    taskReducer:taskReducer
})