import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import TrainerCard from "./TrainerCard";
import Button from "@mui/material/Button"
import Grid from '@mui/material/Grid'

export default function Member({ member, setMember, classes }) {
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
            <h1>{member.name}'s Profile</h1>
            <h2>My Bio:</h2>
            <h3>"{member.bio}"</h3>
                <h2>Available Trainers</h2>
            <Grid container spacing={3} justify="center">
                {showTrainers.map(trainer => <TrainerCard key={trainer.id} setShowTrainers={setShowTrainers} member={member} trainer={trainer}/>)}
            </Grid>
            <Button sx={{ mx: "10px" }} variant="contained" color="primary" onClick={handleLogout}>Logout</Button>
        </div>
    )
}