import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const OneResume = (props) => {
    console.log(props);
    let resumeID = props.match.params.resumeID
    const [resume, setResume] = useState([]);
    const [form, setForm] = useState({display: "none"});
    const [resumeInfo, setResumeInfo] = useState({ company: "", position: "", location: "", start_date: "", end_date: "", description: "", type: "" });
    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:3001/api/resume/${resumeID}`);
            res.json().then((res) => setResume(res));
        }
        fetchData();
    }, [resumeID]);

    
    const handleDelete = (event, resumeID) => {
        event.preventDefault();
        console.log(resumeID);

        fetch(`/api/resume/${resumeID}`, {
            method: "delete",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }).then((response) => response.json());
        history.push("/resume");
    };

    const handleEdit = (event, resumeInfo) => {
        event.preventDefault();
        console.log(resumeInfo);
        setForm({ display: "block" });
        setResumeInfo(resumeInfo);
    };

    const handleChange = (event) => { 
        setResumeInfo((prevState) => ({
            ...prevState, 
            [event.target.name]: event.target.value,
        }));
    };

    const handleEditSubmit = (event, resumeID) => {
        event.preventDefault();
        console.log(resumeID);
        fetch(`/api/resume/${resumeID}`, {
            method: "put",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(resumeInfo)
        }).then((response) => response.json());
        history.push("/resume");
    }

    return(
     <article>
            {resume.map((resume) => (
            <section key={resume.resumeID}>
              <p><b>Company: </b>{resume.company}</p>
              <p><b>Position: </b>{resume.position}</p>
              <p><b>Location: </b>{resume.location}</p>
              <p><b>Start Date: </b>{resume.start_date}</p>
              <p><b>End Date: </b>{resume.end_date}</p>
              <p><b>Description: </b>{resume.description}</p>
              <p><b>Type: </b>{resume.type}</p>
              <button onClick={(e) => {handleDelete(e, resume.resumeID)}}>Delete Resume Item</button>
              <button onClick={(e) => handleEdit(e, resumeInfo)}>Edit Resume Item</button>
              </section>
          ))}
    
        <form onSubmit={(e) => handleEditSubmit (e, resume.resumeID)} style={form}>
            <label>Company</label>
            <input type="text" name="company" value={resume.company} onChange={handleChange} />
            <label>Position</label>
            <input type="text" name="position" value={resume.position} onChange={handleChange} />
            <label>Location</label>
            <input type="text" name="location" value={resume.location} onChange={handleChange} />
            <label>Start Date</label>
            <input type="text" name="start_date" value={resume.start_date} onChange={handleChange} />
            <label>End Date</label>
            <input type="text" name="end_date" value={resume.end_date} onChange={handleChange} />
            <label>Description</label>
            <input type="text" name="description" value={resume.description} onChange={handleChange} />
            <label>Type</label>
            <input type="text" name="type" value={resume.type} onChange={handleChange} />
            <button type="submit" value="Submit">Submit Edit</button>
    </form>
    </article>
    
    )
}





export default OneResume;