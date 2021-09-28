import ExerciseCard from "./ExerciseCard";



export default function Exercises({ exercises, member, trainer }) {
    return(
        <div>
            {exercises.length > 0 ? exercises.map(exercise => { 
                return <ExerciseCard key={exercise.id} 
                                    exercise={exercise} 
                                    member={member} 
                                    trainer={trainer}/> 
                }) : <h3>Loading...</h3>}
        </div>
    )
}