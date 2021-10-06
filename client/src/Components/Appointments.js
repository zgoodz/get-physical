import AppointmentCard from "./AppointmentCard"
import AppointmentTrainerCard from "./AppointmentTrainerCard"
import { useState } from "react"
import Grid from "@mui/material/Grid"

export default function Appointments({ classes, setClasses, trainer, member, setMember }) {
    const [addBtn, setAddBtn] = useState(false)
    const [addData, setAddData] = useState({
        location: '',
        level: '',
        duration: '',
        trainer_id: trainer ? trainer.id : null
    })

    function setClick() {
        setAddBtn(!addBtn)
    }

    function handleChange(e) {
        setAddData({
            ...addData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/appointments', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(addData)
        })
            .then(r => r.json())
            .then(data => {
                setClasses(data)
                setAddBtn(!addBtn)
        })
    }

    let filteredClasses = []
    if (trainer) {
        filteredClasses = classes.filter(c => c.trainer.id === trainer.id)
    } else if (member) {
        filteredClasses = classes
    }

    return(
        <div>
            {trainer && !addBtn ? <button onClick={setClick}>Add Class</button> : <></>}
            {addBtn ? 
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Location: </label>
                    <input onChange={handleChange} type="text" name="location"></input>
                    <label>Level: </label>
                    <input onChange={handleChange} type="text" name="level"></input>
                    <label>Duration: </label>
                    <input onChange={handleChange} type="text" name="duration"></input>
                    <button>Submit</button>
                </form>
                <button onClick={setClick}>Cancel</button>
            </div>
            : <></>
            }
            <h1>Upcoming Classes:</h1>
            <Grid container>
            { member ?
            filteredClasses.length > 0 ? filteredClasses.map(c => { return <AppointmentCard key={c.id} setMember={setMember} appointment={c} setClasses={setClasses} member={member} /> }) : <h3>Loading...</h3>
            :
            filteredClasses.length > 0 ? filteredClasses.map(c => { return <AppointmentTrainerCard key={c.id} c={c} member={member} /> }) : <h3>Loading...</h3>
            }
            </Grid>
        </div>
    )
}