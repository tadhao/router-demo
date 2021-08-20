import './UserForm.scss'
import { useHistory } from 'react-router-dom'

const UserForm = () => {
	const history = useHistory();

	const submitHandler = () => {
		// data = {name, email, age}
		history.push("/users"+"?name=Tom&email=gasfdgj&age=45&id=2")
	}
	return(
		<div className="sign-up-area">
			<form onSubmit={submitHandler}>
				<div className="inputItem shadow">
					<label>Name</label>
					<input type="text" placeholder="Enter your name" />
				</div>
				<div className="inputItem shadow">
					<label>Email</label>
					<input type="email" placeholder="ex. email@gmail.com" />
				</div>
				<div className="inputItem shadow">
					<label>Age</label>
					<input type="number" placeholder="ex. 20" />
				</div>

				<button>Submit</button>
			</form>
		</div>  
	)
}

export default UserForm