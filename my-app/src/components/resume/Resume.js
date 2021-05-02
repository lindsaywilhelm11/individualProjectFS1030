import React, { useState, useEffect } from "react";

 
const Resume = () => {
    const [resume, setResume] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const res = await fetch("http://localhost:3001/api/resume");
        res
          .json()
          .then((res) => setResume(res))
      }
      fetchData();
    }, []);

    return (
        <div>
        <title>Lindsay Wilhelm's Resume</title>
        <link rel="stylesheet" href="PSstylesheet.css" />
        
        <article className="resume-container">
        <h1 className="contentHeader">Lindsay Wilhelm</h1>
          <h4 className="contentSubHeader">Web Developer</h4>
        </article>
        <hr />
        <main className="resumeContent">
          <article className="imgContainer">
          {resume.map((resume) => (
            <section key={resume.resumeID}>
              <p><b>Company: </b>{resume.company}</p>
              <p><b>Position: </b>{resume.position}</p>
              <p><b>Location: </b>{resume.location}</p>
              <p><b>Start Date: </b>{resume.start_date}</p>
              <p><b>End Date: </b>{resume.end_date}</p>
              <p><b>Description: </b>{resume.description}</p>
              <p><b>Type: </b>{resume.type}</p>
              </section>
          ))}
          </article>
          </main>
          </div>
    );
  };

  // company: "", position: "", location: "", start_date: "", end_date: "", description: "", type: ""
 
export default Resume;