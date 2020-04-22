import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Newsletter() {
    const [formState, setFormState] = useState(({
        name:'',
        lastName: '',
        email: ''
    }));

        //Tarhetting the values in our form
    const inputChange = event => {
        const inputValues = {
                // spread operator is used in order to get EVERYTHING from our formState
            ...formState, [event.target.name] : event.target.value 
        };
            //formState now will be able to monitor the values in our inputs
        setFormState(inputValues)
    }

    const submitForm = event => {
        event.preventDefault();
        axios
        .post("https://reqres.in/api/users", formState)
        .then(response => {
            console.log(response)
            setFormState({
                name: '',
                lastName: '',
                email: ''
            });
        })
        .catch(error => {
            console.log(error.response)
        })
    };

    return(
        <div className='newsletter-container'>
            <div className='newsletter-title'>
              <h1>Newsletter</h1>
              <h3>Join my newsletter and dont miss any new photo!</h3>
            </div>

            <form onSubmit={submitForm}>
                <label htmlFor='name'>Name:
                  <input
                    id='name' 
                    type='text'
                    name='name'
                    autoComplete='off' 
                    value= {formState.name}
                    onChange={inputChange}
                 />
                </label>
                
                <label htmlFor='lastName'>Last Name:
                  <input 
                     id='lastName' 
                     type='text'
                     name='lastName'
                     autoComplete='off' 
                     value= {formState.lastName}
                     onChange={inputChange} 
                 />
                </label>
                <label htmlFor='email'>Email:
                 <input 
                    id='email' 
                    type='email'
                    name='email'
                    autoComplete='off' 
                    value= {formState.email}
                    onChange={inputChange} 
                />
                <button>Submit</button>
                </label>
            </form>
        </div>
    )
};

export default Newsletter;