import { useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Topbar from './components/Topbar.tsx'
import SignIn from './components/Signin.tsx'
import Dashboard from './components/Dashboard.tsx'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	window.onload = () => {
		const token = localStorage.getItem('token');
		if (token) {
	// 		// Optionally decode the token and update the UI
			const userInfo = jwtDecode(token);
			console.log("yes");
			console.log(userInfo);
			handleLogin();
		}
	};


	return (
		<>
				<Topbar /> 
				<Router>
					<Routes>
						<Route path="/" element={!isLoggedIn ? <SignIn onLogin={handleLogin}/> : <Dashboard />} />
					</Routes> 
				</Router> 
		</>
	)
}

export default App
