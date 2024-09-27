import styles from './Stylesheet.module.css'
import '../App.css'


function SignIn () {

	return ( 
		<> 
			<div className={`container ${styles.signin}`}>
				<h3> Login </h3> 	

				<div className={styles.signInField}>
					<p> Username </p> 
					<input type="text"/>
				</div>


				<div className={styles.signInField}>
					<p> Password </p> 
					<input type="password"/>
				</div>


				<button className={styles.loginButton}> Sign In </button> 


			</div>
		</>
	); 
}

export default SignIn;
