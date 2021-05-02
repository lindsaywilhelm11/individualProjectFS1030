import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ResumeAdd = () => {
    const [newResume, setNewResume] = useState({ company: "", position: "", location: "", start_date: "", end_date: "", description: "", type: "" })
    const history = useHistory();

    const handleChange = (event) => { 
        setNewResume((prevState) => ({
            ...prevState, 
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        fetch("/api/resume", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newResume)
        }).then((response) => response.json());
        history.push("/resume");
    };

return (
<div>
    <h4>Add New Resume Item</h4>
    <form onSubmit={handleSubmit}>
        <label>Company</label>
        <input type="text" name="company" value={newResume.title} onChange={handleChange} />
        <label>Position</label>
        <input type="text" name="position" value={newResume.position} onChange={handleChange} />
        <label>Location</label>
        <input type="text" name="location" value={newResume.location} onChange={handleChange} />
        <label>Start Date</label>
        <input type="date" name="start_date" value={newResume.start_date} onChange={handleChange} />
        <label>End Date</label>
        <input type="date" name="end_date" value={newResume.end_date} onChange={handleChange} />
        <label>Description</label>
        <input type="text" name="description" value={newResume.description} onChange={handleChange} />
        <label>Type</label>
        <input type="text" name="type" value={newResume.type} onChange={handleChange} />
        <button>Add To Portfolio</button>
    </form>
</div>
)}


export default ResumeAdd;