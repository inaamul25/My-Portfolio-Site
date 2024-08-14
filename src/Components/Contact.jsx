import React, { useState } from 'react';
function Success() {

    return (
        <div className='success-div'>
           <h2>Succesfully Submitted&#10003;</h2>
        </div>
    );
}


function Contact() {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(event.target.checkValidity()){
            setSubmitted(true);
        }
        
    }
    return (
        <div className="form-div">
            {submitted ? (<Success />) : (
                <>
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="FirstName">FirstName:</label>
                        <input type="text" placeholder="FirstName"  required/><br />
                        <label htmlFor="LastName">LastName:</label>
                        <input type="text" placeholder="LastName" required /><br />
                        <label htmlFor="Email">Email:</label>
                        <input type="email" placeholder="Email" required /><br />
                        <button type='submit'>Subscribe</button>
                    </form>

                </>
            )}

        </div>
    );
}
export default Contact;