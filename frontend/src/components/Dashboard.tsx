import styles from './Stylesheet.module.css'
import dash from './Dashboard.module.css'
import '../App.css'


function Dashboard() {
	
	return (
		<> 
			<div className={`container ${dash.dashboard}`}>
				<div className={dash.features}>
					<ul className={dash.temp}> 
						<li> Dashboard </li> 
						<li> Incoming Calls</li> 
						<li> All Tickets </li> 
						<li> Announcements </li> 
						<li> Feature 5 </li> 
					</ul> 
				</div> 

				<div className= {dash.space}> 
					Dashboard
				</div>
			</div>
		</>
	)
}


export default Dashboard;
