import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './UserList.scss'

const UserList = () => {
	
	const localtion = useLocation();
	useEffect(()=>{
		let obj = new URLSearchParams(localtion.search)
		console.log("name = ",obj.get('name'))
		console.log("age = ",obj.get('age'))
	})

	return(
		<>
			<div className="block shadow">
				<p>Name: John Doe</p>
				<Link to="/users/abcd">User Detail</Link>
			</div>
		</>
	)
}

export default UserList;