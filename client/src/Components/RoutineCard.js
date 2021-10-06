import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

export default function RoutineCard({ exercise, setMember }) {

    function handleClick() {
        fetch('/client_exercise', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json'
            }
        })
        .then(r => r.json())
        .then(data => setMember(data))
        .then(window.location.reload())
    }

    return(
        <Grid item>
            <Paper style={{ height: 300, width: 225 }} >
                <h2>{exercise.name}</h2>
                <h3>Difficulty: {exercise.difficulty}</h3>
                <ul>
                    <li>{exercise.description}</li>
                </ul>
                <button onClick={handleClick}>Delete from Routine</button>
            </Paper>
        </Grid>
    )
}