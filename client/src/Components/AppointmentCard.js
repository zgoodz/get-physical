export default function AppointmentCard({ appointment }) {

    return(
        <div>
            <h1>{appointment.trainer.name}</h1>
            <h2>{appointment.location}</h2>
            <h2>Level: {appointment.level}</h2>
            <h2>(time will go here)</h2>
        </div>
    )
}