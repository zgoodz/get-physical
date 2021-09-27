import { useHistory } from "react-router";

export default function Trainer({ setTrainer }) {
    const history = useHistory()

    function handleLogout() {
        fetch('/logout_trainer', {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setTrainer(null)
                history.push('/')
            }
        });
    }

    return(
        <div>
            <h1>Trainer Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}