import { useState } from "react"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"

export default function ExerciseTrainerCard({ exercise, setExercises }) {
    const [editMode, setEditMode] = useState(false)
    const [editData, setEditData] = useState({
        description: exercise.description,
        difficulty: exercise.difficulty
    })

    async function handleDelete(id) {
        await fetch(`/exercises/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json'
            }
        })
        .then(r => r.json())
        .then(data => setExercises(data))
    }

    function handleEditMode() {
        setEditMode(true)
    }

    function handleExitEdit() {
        setEditMode(false)
    }

    function handleChange(e) {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e, id) {
        e.preventDefault()
        fetch(`/exercises/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editData)
        })
            .then(response => response.json())
            .then(data => {
                setExercises(data)
                setEditMode(false)
            })
        setEditData({
            description: exercise.description,
            difficulty: exercise.difficulty
        })
    }

    return(
        <div>
            {editMode ? 
                <Grid item>
                    <Paper style={{ height: 300, width: 225 }}>
                        <h3 style={{ color: "red" }}>Edit Mode</h3> 
                        <h3>{exercise.name}</h3>
                        <form onSubmit={(e) => handleSubmit(e, exercise.id)}>
                            <label>Description: </label>
                            <textarea rows="5" cols="50" name="description" value={editData.description} onChange={handleChange} style={{ width: "250px", height: "100px" }} /><br />
                            <label>Difficulty: </label>
                            <input value={editData.difficulty} name="difficulty" onChange={handleChange}></input>
                            <button>Submit</button>
                        </form>
                        <button onClick={handleExitEdit}>Cancel</button>
                    </Paper>
                </Grid>
                :
                <Grid item>
                    <Paper style={{ height: 300, width: 225 }}>
                        <h3>{exercise.name}</h3>
                        <ul>
                            <li>{exercise.description}</li>
                            <li>Difficulty: {exercise.difficulty}</li>
                        </ul>
                        <button onClick={() => handleEditMode()}>Edit</button>
                        <button onClick={() => handleDelete(exercise.id)}>Delete</button>
                    </Paper>
                </Grid>
            }
        </div>
    )
}