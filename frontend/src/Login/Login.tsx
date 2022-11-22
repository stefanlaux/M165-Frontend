import { Button, TextField } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './Login.css';

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const MySwal = withReactContent(Swal);
    

        
        const checkValid = () => {
        if(password !== "1234" || username !== "stefan"){
            MySwal.fire({
            title: "Error",
            text: "Wrong Password or Username",
            icon: 'error',
            background: "#fc4442",
            position: "bottom",
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            })
        }else{
            localStorage.setItem("user", "true")
        }
        }
  


  return (
    <div className='container'>
        
        <div className='glasCard2 card'>
            <h1>Login</h1>
            <hr />
            <TextField id="standard-basic" onChange={e => setUsername(e.target.value)} label="Username" className='input mail' variant="standard" />
            <br />
            <TextField id="standard-basic" onChange={e => setPassword(e.target.value)} label="Password" className="input password" variant="standard" type="password" />
            <br />
            <br />
            <Button onClick={checkValid} variant='contained'>Login</Button>
        </div>
  

    </div>
  );
}

