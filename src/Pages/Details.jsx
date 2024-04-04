import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import {Link, useParams} from 'react-router-dom';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, getTask, selectTask, setTask } from '../Redux/actions';

export default function Details () {
    let id = useParams().id
    const selectedTask = useSelector(state => state.taskReducer.selectedTask);
    const tasks = useSelector(state => state.taskReducer.tasks);
    const dispatch = useDispatch();
    const [nameTask, setNameTask] = useState("");
    const [description, setDescription] = useState("");
    const [modify , setModify] = useState(false);
    let task =tasks.find(task => task.id == id);
  
    useEffect(()=>{
      setDescription(selectedTask.description);
      setNameTask(selectedTask.nameTask);
      setModify(false);
    }, [selectedTask]);

    // dispatch(getTask(task))
  
      const delTask = (taskId) =>{
        dispatch(deleteTask(taskId));
      }
  
      const select = (id)=>{
        dispatch(selectTask(id));
      }
      const handleName = (event) =>{
          setNameTask(event.target.value)
        }
        const handleDescription = (event) =>{
          setDescription(event.target.value)
        }
  
        const handleAdd = ()=>{
          dispatch(addTask({
            id : uid(),
            nameTask,
            description
          }))
          setDescription('');
          setNameTask("");
          setModify(true)
        }
  
        const handleSet = (id) =>{
            dispatch(setTask({
              id,
              nameTask,
              description
            }));
            setDescription('');
            setNameTask("");
            setModify(true)
        }
              console.log(task)
            
    return (
     <div>
         <div className='container'>
          <Navbar/>
          <div className='container__back__btn'>

          </div>
          <div className='container__todolist'>
            <div key={id} className='todolist__content'>
                <div className='todolist__first__part'>
                <h4 className='title'>{task.nameTask}</h4>
                  <p className='description'>{task.description}</p>
                  <p className='date'>16/04/2024</p>
                </div>
                <div className='todolist__second__part'>
              <div className='second__part__content'>
              <i className="fa-solid fa-trash" onClick={()=>delTask(task.id)}></i>
              <i className="fa-solid fa-pen-to-square" onClick={()=>select(task.id)}></i>
              <i className="fa-solid fa-check"></i>
              </div>
                </div>
              </div>
                 
          </div>
          <div className='container__todolist__header'>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleName} value={nameTask}/>
            <label for="floatingInput">Titre</label>
          </div>
                <div class="form-floating">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" onChange={handleDescription} value={description}></textarea>
                  <label for="floatingTextarea2">Description(s)</label>
                </div>
      
        <div className='btn__block'>
        <button className="btn__modify" onClick={()=>handleSet(selectedTask.id)} >  <i className="fa-solid fa-pen-to-square"></i> Modifier</button>  
        </div>
          </div>
          
          </div>
     </div>
    );
}

