import RoutineCard from "./RoutineCard"

export default function Routine({ member, setMember }) {
    return(
        <div>
            <h1>My Routine:</h1>
            {member.exercises.map(exercise => <RoutineCard id={exercise.id} exercise={exercise} setMember={setMember} />)}
        </div>
    )
}