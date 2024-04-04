import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';
import { uid } from 'uid';
import Navbar from './Navbar';
import { useDispatch, useSelector} from 'react-redux';
import Footer from './Footer';
import {addTask, setTask, deleteTask, selectTask } from '../Redux/actions';

export default function Accueil () {
  const TaskSelected = useSelector(state => state.todoListReducer.TaskSelected);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");   
  const [modify , setModify] = useState(false);

  const handleTitle = (event) =>{
    setTitle(event.target.value)
  }
  const handleContent = (event) =>{
    setContent(event.target.value)
  }

  const handleAdd = ()=>{
    dispatch(addTask({
      id : uid(),title,content,
    }))
    setTitle("");
    setContent("");  
  }

  const deleteT= (taskId) =>{
    dispatch(deleteTask(taskId))
  }
  const select = (id)=>{
    dispatch(selectTask(id));
  }
  useEffect(()=>{
    setContent(TaskSelected.content);
    setTitle(TaskSelected.title);
    setModify(true);
  }, [TaskSelected])

    const handleUpdate = (id) =>{
         dispatch(setTask({
            id,
            title,
            content,
          }));
        setContent("");
        setTitle("");
        setModify(false);
      }

    //   const handleSet = (id) =>{
      
    //     dispatch(setTask({
    //       id,title,content
    //     }));
    //     setTitle('');
    //     setContent("");
    //     setModify(false)
    // }


    return (
      <div>
        <Navbar/>
       <div className='container'>
        <div className='main--part--container'>
          <div className='container__todolist__header'>
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Title</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleTitle} value={title}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"> Saisir le contenu</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleContent} value={content}></textarea>
        </div>
        <div className='btn__block'>
        {modify ? <button className="btn--add" onClick={()=>handleSet(selectedTask.id)}>Modifier</button> : <button className="btn--add" onClick={handleAdd}>Ajouter</button>} 
        <button className='btn__add'  onClick={handleAdd}>Ajouter</button>
        </div>
          </div>
          <div className='container__todolist'>
              <div className='todolist__content'>
                <div className='todolist__first__part'>
                  <h5>My vacances</h5>
                  <p>My vacances were incredible</p>
                </div>
                <div className='todolist__second__part'>
              <div className='second__part__content'>
              <i className="fa-solid fa-trash"></i>
              <i className="fa-solid fa-pen-to-square"></i>
              </div>
                </div>
              </div>
              <div className='todolist__content'>
                <div className='todolist__first__part'>
                  <h5>My vacances</h5>
                  <p>My vacances were incredible</p>
                </div>
                <div className='todolist__second__part'>
              <div className='second__part__content'>
              <i className="fa-solid fa-trash" onClick={()=> deleteT(task.id)}></i>
              <i className="fa-solid fa-pen-to-square" onClick={()=>select(task.id)}></i>
              </div>
                </div>
              </div>
          </div>
        </div>
       </div>
            
          <Footer/>
        </div>

    );
}

