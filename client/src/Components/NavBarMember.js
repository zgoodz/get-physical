import { Link } from "react-router-dom"

export default function NavBarMember({ member }) {
    return(
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/routine'>My Routine</Link></li>
            <li><Link to='/exercises'>Exercises</Link></li>
            <li><Link to='/classes'>Upcoming Classes</Link></li>
        </ul>
    )
}