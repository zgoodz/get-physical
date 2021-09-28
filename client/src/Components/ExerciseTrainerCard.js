import { useState } from "react"

export default function ExerciseTrainerCard({ exercise, setExercises }) {
    const [editMode, setEditMode] = useState(false)

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

    return(
        <div>
            {/* if statement to get in and out of edit mode */}
            {editMode ? 
                <>
                    <h3>Edit Mode</h3> 
                    <button onClick={handleExitEdit}>Cancel</button>
                </>
                :
                <>
                    <h2>{exercise.name}</h2>
                    <h3>{exercise.description}</h3>
                    <h3>Difficulty: {exercise.difficulty}</h3>
                    <button onClick={() => handleEditMode()}>Edit</button>
                    <button onClick={() => handleDelete(exercise.id)}>Delete</button>
                </>
            }
        </div>
    )
}