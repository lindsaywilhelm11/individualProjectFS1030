import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const Contact = () => {
  const [userInput, setUserInput] = useState(
    { firstName: '', lastName: '', email: '', message: '' }
  );
  

const handleChange = (e) => {
  setUserInput({...userInput, [e.target.name]: e.target.value})
}

const handleSubmit = (e) => {
  e.preventDefault(
    axios.post(`http://localhost:5000/contact_form/entries`, userInput)
      .then(function (response) {
        console.log(response)
        alert('Your message was submitted successfully')
      })
      .catch(function(error){
        console.log(error)
        alert('There was an error submitting your message')
      })
  )
}


    return (
        <article className="contactContent">
        <section className="top-container">
        <h1 className="contentHeader">Lindsay Wilhelm</h1>
          <h4 className="contentSubHeader">Web Developer</h4>
        </section>
        <hr />
        <section className="contactContent">
        <h2>Get In Touch</h2>
        <p>Send me a message and I'll get back to you as soon as possible!</p>
        </section>
        <article className="contactContent">
          <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          }} 
          validationSchema={Yup.object({
            firstName: Yup.string()
              .min(3, 'Must be at least 3 characters')
              .max(15, 'Must be 15 characters or less')
              .required('This field is required'),
            lastName: Yup.string()
              .min(3, 'Must be at least 3 characters')
              .max(15, 'Must be 15 characters or less')
              .required('This field is required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('This field is required'),
            message: Yup.string()
              .min(50, 'Must be at least 50 characters')
              .max(650, 'Must be less than 650 characters')
              .required('This field is required'),

          })}>
              <Form onSubmit={handleSubmit}>
                <input label="First Name: " name="firstName"  type="text" placeholder="Anakin" onChange={handleChange} />
                <br />
                <input label="Last Name: " name="lastName"  type="text" placeholder="Skywalker" onChange={handleChange} />
                <br />
                <input label="Email: " name="email" type="email" placeholder="anakin@starwars.com" onChange={handleChange} />
                <br />
                <textarea label="Message: " name="message"  type="textarea" placeholder="Type your message here" onChange={handleChange} />  
                <br />
                <button className="button" type="submit">Submit</button>
              </Form>
          </Formik>
          
        </article>
      </article>
    );
  }



 
export default Contact;