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

    //For filtering "available" trainers
    let filteredTrainers = showTrainers.filter(trainer => trainer.taking_new_clients === true)

    return(
        <div>
            <h1>My Profile</h1>
            <h2>My Bio:</h2>
            <h3>"{member.bio}"</h3>
            <button>Edit Bio</button>
            <h2>My Reservations:</h2>
            <ul>
                {member.appointments.map(appointment => <li>{appointment.location} at (insert Datetime here)</li>)}
            </ul>
            <h2>Available Trainers</h2>
            {showTrainers.map(trainer => <TrainerCard key={trainer.id} setShowTrainers={setShowTrainers} member={member} trainer={trainer}/>)}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}