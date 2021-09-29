import { useHistory } from "react-router";
import AppointmentTrainerCard from "./AppointmentTrainerCard";
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

    let filteredClasses = []
    if(classes) {
        filteredClasses = classes.filter(e => e.trainer.id === trainer.id)
    }
     

    return(
        <div>
            <h1>Trainer Page</h1>
            <h2>{trainer.name}'s Exercises</h2>
            {filteredExercises.map(exercise => <ExerciseTrainerCard key={exercise.id} exercise={exercise} setExercises={setExercises}/>)}
            <h2>{trainer.name}'s Upcoming Classes</h2>
            {filteredClasses.map(c => <AppointmentTrainerCard key={c.id} c={c} setClasses={setClasses}/>)}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}