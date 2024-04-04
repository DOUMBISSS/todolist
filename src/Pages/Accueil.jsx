import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { uid } from 'uid';
import Navbar from './Navbar';
import { deleteTask, selectTask,setTask,addTask } from '../Redux/actions';
import { Link } from 'react-router-dom';


export default function Accueil () {

  const selectedTask = useSelector(state => state.taskReducer.selectedTask);
  const tasks = useSelector(state => state.taskReducer.tasks);
  const dispatch = useDispatch();
  const [nameTask, setNameTask] = useState("");
  const [description, setDescription] = useState("");
  const [modify , setModify] = useState(false);
  const [search, setSearch]=useState('')
  // const [tas,setData]=useState(tasks);
  // const keys = ["title"];

  useEffect(()=>{
    setDescription(selectedTask.description);
    setNameTask(selectedTask.nameTask);
    setModify(false);
  }, [selectedTask]);

    const delTask = (taskId) =>{
      dispatch(deleteTask(taskId));
    }

    const select = (id)=>{
      dispatch(selectTask(id));
    }

    const handleSearching = (event)=>{
      setSearch(event.target.value)
    }
    const handleName = (event) =>{
        setNameTask(event.target.value)
      }
      const handleDescription = (event) =>{
        setDescription(event.target.value)
        // setModify(true)
      }

      console.log(search)
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

      const filterResult = (catItem)=>{
        const filterData = tasks.filter((task) =>  task.status === catItem )
            setData(filterData);
            console.log(filterData)
            }

      
    return (
      <div className='main'>
          <div className='container'>
          <Navbar/>
          <div className='container__todolist__header'>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleName} value={nameTask}/>
            <label for="floatingInput">Titre</label>
          </div>
                <div class="form-floating">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" onChange={handleDescription} value={description}></textarea>
                  <label for="floatingTextarea2">Description(s)</label>
                </div>
                {/* <div className='todolist__block__title'>
                    <div className=''>

                    </div>
                </div> */}
        <div className='btn__block'>
        {modify ? <button className="btn__add" onClick={handleAdd}><i className="fa-solid fa-plus"></i> Ajouter</button> : <button className="btn__modify" onClick={()=>handleSet(selectedTask.id)} >  <i className="fa-solid fa-pen-to-square"></i> Modifier</button>   }
        {/* <button className='btn__add'  onClick={handleAdd}>Ajouter</button> */}
        </div>
          </div>
          <div className='container__filter__todolist'>
               <div className='container__filter__todolist__left'>
               <button className='btn__filter' onClick={()=>{filterResult('En cours')}}>En cours</button>
                <button className='btn__filter' onClick={()=>{filterResult('Effectué')}}>Effectué</button>
               </div>
               <div className='container__filter__todolist__right'>
               <div class="form-floating col-8">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleSearching} value={search}/>
                <label for="floatingInput">Rechercher</label>
              </div>
               </div>
          </div>
          <div className='container__todolist'>
            {tasks?.filter((task) => {
            if (search === ""){
                return task;
              }
              else if (task.nameTask?.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                return task;
              }
              return 0;
            }).map((task) => <div key={task.id} className='todolist__content'>
                <div className='todolist__first__part'>
                <Link className='liste' to={`/details/${task.id}`}><h4 className='title'>{task.nameTask}</h4></Link>
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
                 )}
          </div>
          </div>
     
      </div>
    );
}

