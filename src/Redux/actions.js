// export function addTask(task){
//     return {
//         type :"ADD-TASK",
//         payload: task
//     }          
// }
// export function deleteTask (taskId){
//     return {
//         type : "DELETE-TASK",
//         payload : taskId
//     }
// }
// export function selectTask(id){
//     return {
//         type : "SELECT-TASK",
//         payload : id
//     }
// }
// export function setTask(obj) {
//     return {
//         type : "SET-TASK",
//         payload : obj
//     }
// }


export function addTask(task) {
    return {
        type : "ADD-TODO",
        payload : task
    }
}

export function setTask(obj) {
    return {
        type : "SET-TASK",
        payload : obj
    }
}

export function selectTask(id){
    return {
        type : "SELECT-TASK",
        payload : id
    }
}

export function deleteTask (taskId){
    return {
        type :"DELETE-TASK",
        payload : taskId
    }
}
