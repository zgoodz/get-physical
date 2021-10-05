export default function RoutineCard({ exercise, setMember }) {

    function handleClick() {
        fetch('/client_exercise', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json'
            }
        })
        .then(r => r.json())
        .then(data => setMember(data))
        .then(window.location.reload())
    }

    return(
        <div>
            <h2>{exercise.name}</h2>
            <ul>
                <li>{exercise.description}</li>
                <li>Difficulty: {exercise.difficulty}</li>
            </ul>
            <button onClick={handleClick}>Delete from Routine</button>
        </div>
    )
}