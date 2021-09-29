export default function AppointmentCard({ appointment, member }) {

    return(
        <div>
            <h2>{appointment.trainer.name}</h2>
            <ul>
                <li>Location: {appointment.location}</li>
                <li>Class level: {appointment.level}</li>
                <li>Duration: {appointment.duration} mins</li>
            </ul>
            {member ? <button>Add to Schedule</button> : <></>}
        </div>
    )
}