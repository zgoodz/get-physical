import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function ExerciseCard({ exercise, member, setMember }) {

    function handleClick() {
        fetch('/client_exercise_joins', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                client_id: member.id,
                exercise_id: exercise.id
            })
        })
        .then(r => r.json())
        .then(data => setMember(data))

    }

    return(
            <Grid item>
                <Paper style={{ width: "250px", height: "300px"}} >
                    <Box>
                        <h2>{exercise.name} by {exercise.trainer.name}</h2>
                            <h3>Difficulty: {exercise.difficulty}</h3>
                            <h4>{exercise.description}</h4>
                        {member ? <Button onClick={handleClick}>Add to routine</Button> : <></>}
                    </Box>
                </Paper>
            </Grid>
    )
}
