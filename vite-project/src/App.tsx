import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Topbar from './components/Topbar.tsx'
import SignIn from './components/Signin.tsx'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};


	return (
		<>
				<Topbar /> 
				<Router>
					<Routes>
						<Route path="/" element={<SignIn/>} />
					</Routes> 
				</Router> 
		</>
	)
}

export default App
