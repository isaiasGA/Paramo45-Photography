import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';

//Validation for each input in our form
const formValidation = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    lastName: yup.string().required("Last Name is a required field"),
    email: yup.string().required("Please provide an email")
});

function Newsletter() {
    const [formState, setFormState] = useState({
        name:"",
        lastName: "",
        email: ""
    });        //Creating a state for our validation
    const [errors, setErrors] = useState({
        name: "",
        lastName: "",
        email: ""
    }); 

    //Button validation for form's inputs
    const [buttonDisabled, setbuttonDisabled] = useState(true);

    //Toggle button for submitting form
    useEffect(() => {
        formValidation.isValid(formState).then(valid => {
            setbuttonDisabled(!valid);
        });
    }, [formState]);

    //validation for every input in our form
    const checkInputs = event => {
        yup
        .reach(formValidation, event.target.name)
        .validate(event.target.value)
        .then(()=> {
            setErrors({
                ...errors, [event.target.name]:""
            });
        })
        .catch(error => {
            setErrors({
                ...errors, 
                [event.target.name]: error.errors[0]
            })
        })
    };

        //Targetting the values in our form
    const inputChange = event => {
        event.persist();
        const formValues = {
                // spread operator is used in order to get EVERYTHING from our formState
            ...formState, 
            [event.target.name]: event.target.value 
        };
            //formState now will be able to monitor the values in our inputs
        checkInputs(event);
        setFormState(formValues);
    };


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
                 {errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}
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
                 {errors.lastName.length > 0 ? <p className='error'>{errors.lastName}</p> : null}
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
                {errors.email.length > 0 ? <p className='error'>{errors.email}</p> : null}
                </label>
                
                <button disabled={buttonDisabled}>Submit</button>
            </form>
        </div>
    )
};

export default Newsletter;