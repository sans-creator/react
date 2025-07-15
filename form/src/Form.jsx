import { use } from 'react';
import { useState } from 'react';
export default function Form() {
    let [formData, setFormData] = useState({
        fullName: '',
        userName: ''
    });
  

    let handleChange = (event) => {
        let fieldName = event.target.name; // Get the name of the field being changed //fullName
        let fieldValue = event.target.value; // Get the value of the field being changed //value
        setFormData(prevFormData => {
            return {
                ...prevFormData, // Spread the previous form data
                [fieldName]: fieldValue // Update the specific field with the new value
            };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        setFormData({
            fullName: '',
            userName: ''
        }); // Reset the form data to initial state
    }

    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor="name">Name:</label>
            <input placeholder="Enter your name" type="text" value={formData.fullName} onChange={handleChange} id='name' name='fullName'/>
            <br></br>
            <label htmlFor="username">UserName:</label>
            <input placeholder="Enter your name" type="text" value={formData.userName} onChange={handleChange} id='username' name='userName'/>
            <button>Submit</button>
        </form>
    );
}