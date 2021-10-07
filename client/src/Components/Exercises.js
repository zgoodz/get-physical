import ExerciseCard from "./ExerciseCard";
import ExerciseTrainerCard from "./ExerciseTrainerCard";
import { useState } from "react"
import Button from '@mui/material/Button'
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Box from '@mui/material/Box'

export default function Exercises({ exercises, member, trainer, setExercises, setMember }) {
    const [addBtn, setAddBtn] = useState(false)
    const [newExercise, setNewExercise] = useState({
        name: '',
        description: '',
        difficulty: null,
        video: null,
        trainer_id: trainer ? trainer.id : null
    })


    function handleChange(e) {
        setNewExercise({
            ...newExercise,
            [e.target.name]: e.target.value
        })
    }

    function handleClick() {
        setAddBtn(!addBtn)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/exercises', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newExercise)
        })
            .then(r => r.json())
            .then(data => {
                setExercises(data)
                setAddBtn(!addBtn)
            })
    }

    let filteredExercises = []
    if (trainer) {
        filteredExercises = exercises.filter(exercise => exercise.trainer.id === trainer.id)
    } else if (member) {
        filteredExercises = exercises
    }


    return(
        <div style={{ paddingTop: "20px" }}>
            <div style={{ paddingBottom: "20px" }}>
                {trainer && !addBtn ? <Button variant="outlined" onClick={handleClick}>Add Exercise</Button> : <></>}
                {addBtn ?
                    <div>
                        <Grid>
                            <Paper style={{ width: "600px"}}>
                                <Box>
                                    <form onSubmit={handleSubmit}>
                                        <label>Name: </label>
                                        <input type="text" name="name" onChange={handleChange}></input>
                                        <br></br>
                                        <label>Desription: </label>
                                        <textarea rows="5" cols="50" name="description" onChange={handleChange}></textarea>
                                        <br></br>
                                        <label>Difficulty: </label>
                                        <select name="difficulty" onChange={handleChange}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <br></br>
                                        <Button onClick={e => handleSubmit(e)}>Submit</Button>
                                    </form>
                                    <Button variant="contained" onClick={handleClick}>Cancel</Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </div>
                    :
                    <></>
                }
            </div>
            <Grid container spacing={3} justify="center">
            {member ?
                filteredExercises.length > 0 ? filteredExercises.map(exercise => { return <ExerciseCard key={exercise.id} exercise={exercise} setExercises={setExercises} setMember={setMember} member={member} /> }) : <h3>Loading...</h3>
                :
                filteredExercises.length > 0 ? filteredExercises.map(exercise => { return <ExerciseTrainerCard key={exercise.id} exercise={exercise} member={member} setMember={setMember} setExercises={setExercises} /> }) : <h3>Loading...</h3>
            }
            </Grid>
          
        </div>
    )
}