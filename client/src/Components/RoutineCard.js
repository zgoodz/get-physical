import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

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
                <Box>
                    <h2>{exercise.name}</h2>
                    <h3>Difficulty: {exercise.difficulty}</h3>
                    <ul>
                        <li>{exercise.description}</li>
                    </ul>
                    <Button onClick={handleClick}>Delete from Routine</Button>
                </Box>
            </Paper>
        </Grid>
    )
}