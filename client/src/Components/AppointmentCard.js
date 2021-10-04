import { useState } from "react"

export default function AppointmentCard({ appointment, member, setClasses }) {
    const [reserveBtn, setReserveBtn] = useState(false)


    console.log(appointment)

    function handleReserveClick() {
        setReserveBtn(!reserveBtn)

        if(!reserveBtn) {
            fetch('/client_appointment_joins', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    client_id: member.id,
                    appointment_id: appointment.id
                })
            })
                .then(r => r.json())
                .then(data => setClasses(data))
        } else {
            fetch('/client_appointment', {
                method: "DELETE",
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(r => r.json())
            .then(data => {
                setClasses(data)

            })
        }
    }

    return(
        <div>
            <h2>{appointment.trainer.name}</h2>
            <ul>
                <li>Location: {appointment.location}</li>
                <li>Class level: {appointment.level}</li>
                <li>Duration: {appointment.duration} mins</li>
                <li>Number of spots: {appointment.capacity}</li>
                <li>Cost: ${appointment.price}</li>
            </ul>
            <button onClick={handleReserveClick}>{reserveBtn ? "Cancel Reservation" : "Reserve a Spot"}</button>
            <button>Show map</button>
        </div>
    )
}