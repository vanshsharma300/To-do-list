import React, {useState,useEffect} from 'react'
import Task from './Task'



const Home = () => {
  
  const initialArr=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")): [];

  const [tasks,setTasks] = useState(initialArr);
  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")
 
  const submitHandler = (e)=>{
    e.preventDefault();
    setTasks([...tasks,{title, description }]);
    setTitle("")
    setDescription("")
  }

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val,i)=>{
      return i !== index;
      }
    )

    setTasks(filteredArr)
  }
  
  useEffect(()=>{
   
     localStorage.setItem("tasks",JSON.stringify(tasks));

  },[tasks])


  return (

   <div className='bg-stone-400 min-h-[100vh] sm:mx-[120px] mx-[10px] pb-6'>
     <h1 className='text-3xl text-center p-5 font-bold'>Daily Goals </h1>

     <form className='flex flex-col m-3 items-center justify-center'
     onSubmit={submitHandler} >

       <input type="text" placeholder='Title' className='bg-white border-2 border-orange-700 rounded-3xl p-5 w-5/6 text-2xl  m-5' value={title} onChange={
        (e)=>setTitle(e.target.value)} />
        <textarea placeholder='Description' className='bg-white border-2 border-orange-700 rounded-3xl p-5 w-5/6 text-2xl m-5' value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <button type='Submit' className='text-white bg-black  rounded-3xl p-3 w-5/6 text-2xl m-5 hover:bg-zinc-900'>ADD</button>
        
     </form>
    
    {tasks.map((item,index)=>(
        <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index}/>
    ))}
   
   </div>
  )
}

export default Home
