export default function ExerciseCard({ exercise, member, trainer }) {
    return(
        <div>
            <h2>{exercise.name} by {exercise.trainer.name}</h2>
            <ul>
                <li>Exercise difficulty: {exercise.difficulty}</li>
                <li>{exercise.description}</li>
            </ul>
            {member ? <button>Add to routine</button> : <></>}
        </div>
    )
}
