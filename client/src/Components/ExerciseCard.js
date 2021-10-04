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
        <div>
            <h2>{exercise.name} by {exercise.trainer.name}</h2>
            <ul>
                <li>Exercise difficulty: {exercise.difficulty}</li>
                <li>{exercise.description}</li>
            </ul>
            {member ? <button onClick={handleClick}>Add to routine</button> : <></>}
        </div>
    )
}
