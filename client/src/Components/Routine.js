import RoutineCard from "./RoutineCard"
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

export default function Routine({ member, setMember }) {
    return(
        <div>
            <h1>My Routine:</h1>
            <Grid container spacing={3} justify="center">
                {member.exercises.map(exercise => <RoutineCard id={exercise.id} exercise={exercise} setMember={setMember} />)}
            </Grid>
        </div>
    )
}