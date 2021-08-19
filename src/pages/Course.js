import { Link } from "react-router-dom";

const Course = () => {
    return(
        <div>
            <h1>Courses Component</h1>
            <Link to="/events">Events</Link>
        </div>
    )
}

export default Course;