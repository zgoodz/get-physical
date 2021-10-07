import { useHistory } from "react-router";
import Button from '@mui/material/Button'

export default function Trainer({ setTrainer, trainer, exercises, classes }) {
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

    let filteredExercises = []
    if(exercises) {
        filteredExercises = exercises.filter(e => e.trainer.id === trainer.id)
    }

    let filteredClasses = []
    if(classes) {
        filteredClasses = classes.filter(e => e.trainer.id === trainer.id)
    }
     
    console.log(trainer)

    return(
        <div>
            <h1>{trainer.name}'s Profile</h1>
            <h2>Bio</h2>
            <h3>{trainer.bio}</h3>
            <h2>My Average Rating</h2>
            <h3>{trainer.average_rating}</h3>
            <h2>My Reviews</h2>
            <ul>
                {trainer.review_ratings.map(review => <li>{review.review}</li>)}
            </ul>
            <Button variant="contained" onClick={handleLogout}>Logout</Button>
        </div>
    )
}