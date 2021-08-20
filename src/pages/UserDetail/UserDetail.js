import './UserDetail.scss'
import { Link, Route, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Random from '../Random'

const UserDetail = () => {
    const params = useParams()

    const [listing, setListing] = useState([
        {id: 1, name: "Jone Doe", age: 45, email: "random@gmail.com"}
    ])

    useEffect(()=>{
        console.log(params.userId)
    }, [])
	return(
		<> 
        <h3>User Detail page</h3>
			<div className="block shadow">
				<p>Name: John Doe</p>
				<p>Email: johndoe@gmail.com</p>
				<p>Age: 45</p>
			</div>
            <Link to={`/users/${params.userId}/random`}>Random</Link>
            <Route path={`/users/${params.userId}/random`}>
                <Random />
            </Route>
		</>
	)
}

export default UserDetail;