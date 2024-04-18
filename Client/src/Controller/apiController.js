const environment = "aaa"

const getBackAPI = () => {
    
    if(environment=== "local") {
        return "http://localhost:5000"
    } 
    return "https://activitylog.onrender.com"
}

const getActivities = () => {
    const baseUrl = getBackAPI();
    return fetch(`${baseUrl}/activity/getact`).then(response=>response.json())
    .then(data=> {
        return data
    })
}

const getActivityByID = (id) => {
    const baseUrl = getBackAPI();
    return fetch(`${baseUrl}/activity//getactbyid/${id}`).then(response=>response.json())
    .then(data=> {
        return data
    })
}
const deleteActivity =(id) => {
    const baseUrl = getBackAPI();
 
    fetch(`${baseUrl}/activity/delete/${id}`,{method:"delete"}).then(response=>response.json())
    .then(data=> {
        return data
    })
}
const addActivity =(activity) => {
    const baseUrl = getBackAPI();
    return fetch(`${baseUrl}/activity/add`,
        {method:"post", 
        headers: {'Content-Type': 'application/json' },
        body:JSON.stringify(activity) }).then(response=>response.json()
    )
    .then(data=> {
        return data
    })
}

const updateActivity = (id,activity) => {
    const baseUrl = getBackAPI();
    return fetch(`${baseUrl}/activity/updateData/${id}`,
    {method:"post", 
    headers: {'Content-Type': 'application/json' },
    body:JSON.stringify(activity) }).then(response=>response.json()
)
}
const apiController = {
    getBackAPI,
    getActivities,
    deleteActivity,
    addActivity,
    getActivityByID,
    updateActivity
}

export default apiController;
