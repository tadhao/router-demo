import './UserForm.scss'

const UserForm = () => {
    return(
			<div className="sign-up-area">
      <form>
        <div className="inputItem shadow">
					<label>Name</label>
					<input type="text" placeholder="Enter your name" />
				</div>
        <div className="inputItem shadow">
					<label>Email</label>
					<input type="email" placeholder="ex. email@gmail.com" />
				</div>

        <button>Submit</button>
      </form>
    </div>  
    )
}

export default UserForm