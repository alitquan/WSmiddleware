import React, { useState } from 'react';
import styles from './Stylesheet.module.css'
import '../App.css'
import axios from 'axios';

function SignIn () {


	const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            });
            localStorage.setItem('token', response.data.token); // Save token
            // Redirect or perform further actions
			
			console.log("Completed");
        } catch (err) {
			console.log(err);
            setError(err.response?.data || 'Login failed');
        }
    };


	return ( 
		<> 
			<div className={`container ${styles.signin}`}>
				<h3> Login </h3> 	

				<div className={styles.signInField}>
					<p> Username </p> 
					<input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
				</div>

				<div className={styles.signInField}>
					<p> Password </p> 
					<input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
				</div>
				<div> 
					{error && <p style={{ color: 'red' }}>{error}</p>}
				</div>


				<button className={styles.loginButton} onClick={handleLogin}> Sign In </button> 


			</div>
		</>
	); 
}

export default SignIn;
