import React,{useState, useEffect} from "react";
import apiController from "../Controller/apiController";

const CreateList = (props)=> {
    return props.items.map((item) => {
        return (<li>{`Activity:${item.activity} DueDate:${item.dueDate}`} <button onClick={()=>window.location=`/update/${item._id}`}>Edit</button><button onClick={()=> props.deleteActivity(item._id)}>Delete</button></li> )
    })
}

const SimpleTodoList =(props) => {
    const [todoList, settodoList] = useState([]);
    const [isLoading, setisLoading] = useState(false);


    useEffect( () => {
        const getData = async () => {
            const response = await apiController.getActivities();
            settodoList(response)
            setisLoading(true)
          
        }
        getData();
    }, []);
    
    const deleteActivity = (id) => {
        apiController.deleteActivity(id);
        const newList = todoList.filter((item)=>item._id!==id);
        settodoList(newList);
        
    }
  
    
    if(todoList== null && !isLoading) {
        return (
            <div>
            Nothing in your todo list

            </div>
        )
    }

    return (
        <div>
            <ul>
            <CreateList items={todoList} deleteActivity={deleteActivity}/>
            </ul>
        </div>
    )
}

export default SimpleTodoList