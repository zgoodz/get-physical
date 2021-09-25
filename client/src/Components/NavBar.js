import { Link } from "react-router-dom"

export default function NavBar() {
    return(
        <ul>
            <li><Link to='/classes'>Classes</Link></li>
            <li><Link to='/exercises'>Exercises</Link></li>
            <li><Link to='/'>Profile</Link></li>
        </ul>
    )
}