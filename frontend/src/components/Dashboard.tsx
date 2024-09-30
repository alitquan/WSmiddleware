import styles from './Stylesheet.module.css'
import dash from './Dashboard.module.css'
import '../App.css'


function Dashboard() {
	
	return (
		<> 
			<div className={`container ${dash.dashboard}`}>
				<div className={dash.features}>
					Features
				</div> 

				<div className= {dash.space}> 
					Dashboard
				</div>
			</div>
		</>
	)
}


export default Dashboard;
