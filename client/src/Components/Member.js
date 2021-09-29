import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import TrainerCard from "./TrainerCard";

export default function Member({ member, setMember }) {
    const history = useHistory()
    const [showTrainers, setShowTrainers] = useState([])

    useEffect(() => {
        fetch('/trainers')
        .then(r => r.json())
        .then(data => setShowTrainers(data))
    }, [])

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

    let filteredTrainers = showTrainers.filter(trainer => trainer.taking_new_clients === true)

    return(
        <div>
            <h1>Member Page</h1>
            <h2>My Bio:</h2>
            <h3>"{member.bio}"</h3>
            <h2>Available Trainers</h2>
            {/* map over filteredTrainers */}
            {filteredTrainers.map(trainer => <TrainerCard key={trainer.id} setShowTrainers={setShowTrainers} member={member} trainer={trainer}/>)}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}