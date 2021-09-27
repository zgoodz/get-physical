import { useHistory } from "react-router";

export default function Member({ setMember }) {
    const history = useHistory()

    function handleLogout() {
        fetch('/logout_member', {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setMember(null)
                history.push('/')
            }
        });
    }

    return(
        <div>
            <h1>Member Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}