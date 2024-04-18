import React, { useState, useEffect } from 'react';
import apiController from '../Controller/apiController';



const EditTask =() => {

    const [activity, setOnChangeActivity] = useState("");

    useEffect(() => {
        const id= window.location.pathname.split('/')[2]
            const getAct = async() => {
                let activity = await apiController.getActivityByID(id)
                setOnChangeActivity(activity);
                
            }
            getAct();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Essa desgraca " + activity._id)
        console.log(activity)
        apiController.updateActivity(activity._id,activity)
        window.location = "/";
        
        
    }

    return (    
    <>
        <h3>Create New Task</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Task: </label>
          <input
            type="text"
            required
            className="form-control"
            name="testactivity"
            value={activity.activity}
            onChange={(e) => {setOnChangeActivity({
                _id:activity._id,
                activity:e.target.value,
                dueDate:activity.dueDate
            })
            }}
          />
        </div>
        <br></br>

        <div className="form-group">
          <input
            type="submit"
            value="Update Activity Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </>)

}

export default EditTask;