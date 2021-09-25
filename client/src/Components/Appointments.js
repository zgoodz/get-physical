import AppointmentCard from "./AppointmentCard"

export default function Appointments({ classes }) {
    return(
        <div>
            <h1>Upcoming Classes:</h1>
            {classes.length > 0 ? classes.map(c => { return <AppointmentCard key={c.id} appointment={c} /> }) : <h3>Loading...</h3>}
        </div>
    )
}