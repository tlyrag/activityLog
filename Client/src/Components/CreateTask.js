import React, { useState } from 'react';
import apiController from '../Controller/apiController';


const CreateTask =() => {
    const [activity, setOnChangeActivity] = useState(``);
    const [dueDate, setOnChangeDueDate] = useState(``);

    const onSubmit = async (e) => {
        e.preventDefault();
        const activityvar = { 
            activity: activity,
            dueDate:dueDate

        };
        await apiController.addActivity(activityvar)
        window.location ="/";
      };

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
            value={activity}
            onChange={(e) => setOnChangeActivity(e.target.value)}
          />

        <label>Due Date: </label>
          <input
            type="text"
            required
            className="form-control"
            value={dueDate}
            onChange={(e) => setOnChangeDueDate(e.target.value)}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Create Activity Log"
            className="btn btn-primary"
          />
        </div>
      </form>

        </>
    )
}
export default CreateTask