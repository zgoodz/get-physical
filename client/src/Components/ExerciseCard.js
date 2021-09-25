export default function ExerciseCard({ exercise, member, trainer }) {
    return(
        <div>
            <h1>{exercise.name} by {exercise.trainer.name}</h1>
            <h2>{exercise.description}</h2>
            {trainer ? <button>Edit</button> : null}
        </div>
    )
}
