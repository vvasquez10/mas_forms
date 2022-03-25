import React, { useState } from  'react';
    
    
const UserForm = (props) => {

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setconfPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [confPassError, setConfPassError] = useState("");
    const [readyToSend, setReadyToSend] = useState(true);

    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };

    const createUser = (e) => {
        e.preventDefault();
        if (readyToSend ){
            const newUser = { firstName, lastName, email, password };
            console.log("Welcome", newUser);
            setHasBeenSubmitted( true );
        } else {
            console.log("Error");
            setHasBeenSubmitted( false );
        }
    };

    const handleValidations = (e) => {   
        if(e.target.id ==='firstName'){ 
            setFirstName(e.target.value);
            if(e.target.value.length === 1) {
                setFnameError("First Name must be at least 2 characters!");
                setReadyToSend( false );
            } else {                
                setFnameError('');
                setReadyToSend( true );
            }
        } else if(e.target.id==='lastName'){
            setLastName(e.target.value);
            if(e.target.value.length === 1) {
                setLnameError("Last Name must be at least 2 characters!");
            } else {
                setLnameError('');
            }
        } else if(e.target.id==='email'){
            setEmail(e.target.value);
            if(e.target.value.length < 5 && e.target.value.length > 0) {
                setEmailError("Email must be at least 5 characters!");
            } else {
                setEmailError('');
            }
        } else if(e.target.id==='password'){
            setPassword(e.target.value);
            if(e.target.value.length < 8 && e.target.value.length > 0) {
                setPassError("Password must be at least 8 characters!");
            } else {
                setPassError('');
            }
        } else if(e.target.id ==='confPassword'){
            setconfPassword(e.target.value);
            if(e.target.value !== password) {
                setConfPassError("Passwords must match!");
            } else {
                setConfPassError('');
            }
        }          
    };
    
    return(
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
            <div>
                <label>First Name: </label> 
                <input type="text" id='firstName' required="True" onChange={ handleValidations  }/>
                {
                    fnameError ?
                    <p style={{color:'red'}} > { fnameError }</p> :
                    ''
                }   
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" id='lastName' required="True" onChange={ handleValidations } />
                {
                    lnameError ?
                    <p style={{color:'red'}} > { lnameError }</p> :
                    ''
                }  
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" id='email' required="True" onChange={ handleValidations } />
                {
                    emailError ?
                    <p style={{color:'red'}} > { emailError }</p> :
                    ''
                } 
            </div>
            <div>
                <label>Password: </label>
                <input type="password" id='password' required="True" onChange={ handleValidations } />
                {
                    passError ?
                    <p style={{color:'red'}} > { passError }</p> :
                    ''
                } 
            </div>
            <div>
                <label>Confirm your password: </label>
                <input type="password" id='confPassword' required="True" onChange={ handleValidations } />
                {
                    confPassError ?
                    <p style={{color:'red'}} > { confPassError }</p> :
                    ''
                } 
            </div>
            <input type="submit" value="Create User" />
        </form>
    );


};


    
export default UserForm;