import AppointmentCard from "./AppointmentCard"
import AppointmentTrainerCard from "./AppointmentTrainerCard"
import { useState } from "react"
import Grid from "@mui/material/Grid"
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function Appointments({ classes, setClasses, trainer, member, setMember }) {
    const [addBtn, setAddBtn] = useState(false)
    const [addData, setAddData] = useState({
        location: '',
        level: '',
        duration: '',
        capacity: '',
        price: '',
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
        <Grid container spacing={3} justify="center">
            <div style={{ paddingTop: "30px" }}>
                <div style={{ paddingTop: "20px" }}>
                    {trainer && !addBtn ? <Button style={{ marginLeft: "10px"}} color="primary" variant="outlined" onClick={setClick}>Add Class</Button> : <></>}
                </div>
                {addBtn ?
                    <Grid item spacing={3} >
                        <Paper>
                            <Box>
                                <form onSubmit={handleSubmit} style={{ left: "50%" }}>
                                    <label>Location: </label>
                                    <input onChange={handleChange} type="text" name="location"></input>
                                    <br></br>
                                    <label>Duration: </label>
                                    <input onChange={handleChange} type="text" name="duration"></input>
                                    <br></br>
                                    <label>Capacity: </label>
                                    <input onChange={handleChange} type="text" name="capacity"></input>
                                    <br></br>
                                    <label>Price: </label>
                                    <input onChange={handleChange} type="text" name="price"></input>
                                    <br></br>
                                    <label>Level: </label>
                                    <select name="level" onChange={handleChange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <br></br>
                                    
                                    <Button onClick={handleSubmit}>Submit</Button>
                                </form>
                                <Button spacing={3} variant="contained" onClick={setClick}>Cancel</Button>
                            </Box>
                        </Paper>
                    </Grid>
                    : <></>
                }
                { member ?
                filteredClasses.length > 0 ? filteredClasses.map(c => { return <AppointmentCard key={c.id} setMember={setMember} appointment={c} setClasses={setClasses} member={member} /> }) : <h3>Loading...</h3>
                :
                filteredClasses.length > 0 ? filteredClasses.map(c => { return <AppointmentTrainerCard key={c.id} c={c} member={member} setClasses={setClasses} /> }) : <h3>Loading...</h3>
                }
               
           </div>
        </Grid>
    )
}