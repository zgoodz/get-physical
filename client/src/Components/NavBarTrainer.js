import { Link } from "react-router-dom"

export default function NavBarMember({ member }) {
    return (
        <ul>
            <li><Link to='/exercises'>My Exercises</Link></li>
            <li><Link to='/classes'>My Classes</Link></li>
            <li><Link to='/home'>Home</Link></li>
        </ul>
    )
}