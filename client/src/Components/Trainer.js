import { useHistory } from "react-router";
import ExerciseTrainerCard from "./ExerciseTrainerCard";

export default function Trainer({ setTrainer, trainer, exercises, setExercises, classes, setClasses }) {
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
     

    return(
        <div>
            <h1>Trainer Page</h1>
            <h1>{trainer.name}'s Exercises</h1>
            {filteredExercises.map(exercise => <ExerciseTrainerCard key={exercise.id} exercise={exercise} setExercises={setExercises}/>)}
            
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}