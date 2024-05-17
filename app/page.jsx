"use client"

import { Home } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {

const [task,setTask]=useState('');
const [taskList,setTaskList]=useState([]);
  
    const ChangHandler = (e) =>{
      setTask(e.target.value)
    }

    const AddValue = () =>{
      setTaskList(prev =>{
        return [...prev,{id:prev.length+1,task:task}]
      })
      setTask('')
    }
    
    const DeleteValue = (id) =>{
     const newtab = taskList.filter((i)=> i.id !=id)
     setTaskList(newtab)
    }
  
  return (
    <section className="mx-8 my-5 fix">
      <div className='flex items-center space-x-2'>
      <Home />
        <h1 className='text-xl font-semibold'>ToDoList</h1>
        </div> 

        <div className='bg-slate-200 h-auto w-full py-2 px-5 my-5'>
         <label className='text-2xl font-semibold mx-2' 
         htmlFor=''>Ajouter un to do list</label>
         <input className='w-full h-10 my-5' value={task} onChange={ChangHandler}
          type='text' placeholder='ajouter un todo' id='task' />
         { task && (<button className='bg-[#171717] text-white 
         rounded px-5 py-1 mx-2 my-2'
         onClick={AddValue}>
              Add Task
              </button>)}
              <h3 className='text-2xl font-semibold my-5 mx-2'>ALL Todos</h3>

              {
                taskList.map((i)=>{
                  return(
                 
                      <ul key={i.id}>
                        <li className='flex justify-between text-xl font-semibold'>{i.task} 
                        <button onClick={()=> DeleteValue(i.id)}
                        className='bg-[#c40f0f]
                         text-white rounded px-5 py-1 mx-2 my-2'>
                               Delete</button>
                        </li>
                      </ul>
                    
                  )
                })
              }
        </div>
        
    </section>
   
  );
}
