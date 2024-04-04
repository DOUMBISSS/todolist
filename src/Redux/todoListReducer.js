const initialState = {
    tasks: [],
    TaskSelected:{},
}

export function todoListReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD-TASK":{
            return  {...state, tasks : [...state.tasks, action.payload]}
        }
        case "SELECT-TASK":{
            let newState = [...state.tasks] 
            let task = newState.find(task => task.id == action.payload);
            return {...state, TaskSelected : task};
        }

        case "SET-TASK":{
            let newState = [...state.tasks] 
            let index = newState.findIndex(task => task.id == action.payload.id);
            newState[index] = action.payload;
            return {...state, tasks : newState};
        }
        case "DELETE-TASK" :{
            let newState = [...state.tasks] 
            let index = newState.findIndex(task => task.id == action.payload);
            newState.splice(index, 1);
            return {...state, tasks: [...newState]};
        }
        default: {
            return state;
        }
    }
   
  
}