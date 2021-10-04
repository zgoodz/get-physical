import ExerciseCard from "./ExerciseCard";
import ExerciseTrainerCard from "./ExerciseTrainerCard";
import { useState } from "react"

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
        <div>
            {trainer && !addBtn ? <button onClick={handleClick}>Add Exercise</button> : <></>}
            {addBtn ?
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>Name: </label>
                        <input type="text" name="name" onChange={handleChange}></input>
                        <label>Desription: </label>
                        <textarea rows="5" cols="50" name="description" onChange={handleChange}></textarea>
                        <label>Difficulty: </label>
                        <input type="text" name="difficulty" onChange={handleChange}></input>
                        <button>Submit</button>
                    </form>
                    <button onClick={handleClick}>Cancel</button>
                </div>
                :
                <></>
            }
            {member ?
                filteredExercises.length > 0 ? filteredExercises.map(exercise => { return <ExerciseCard key={exercise.id} exercise={exercise} setExercises={setExercises} setMember={setMember} member={member} /> }) : <h3>Loading...</h3>
                :
                filteredExercises.length > 0 ? filteredExercises.map(exercise => { return <ExerciseTrainerCard key={exercise.id} exercise={exercise} member={member} setMember={setMember} /> }) : <h3>Loading...</h3>
            }
        </div>
    )
}