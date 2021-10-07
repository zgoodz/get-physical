import { useState } from "react"
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import moment from "moment"

export default function AppointmentTrainerCard({ c, setClasses}) {
    const [editMode, setEditMode] = useState(false)
    const [editData, setEditData] = useState({
        location: c.location,
        level: c.level,
        duration: c.duration,
        capacity: c.capacity,
        cost: c.price
    })

    async function handleDelete(id) {
        await fetch(`/appointments/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json'
            }
        })
            .then(r => r.json())
            .then(data => setClasses(data))
    }

    function handleEditMode() {
        setEditMode(true)
    }

    function handleExitEdit() {
        setEditMode(false)
    }

    function handleChange(e) {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e, id) {
        e.preventDefault()
        fetch(`/appointments/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editData)
        })
            .then(response => response.json())
            .then(data => {
                setClasses(data)
                setEditMode(false)
            })
        setEditData({
            location: c.location,
            level: c.level,
            duration: c.duration
        })
    }

    return(
        <Grid item>
            {editMode ? 
                <Grid item>
                    <Paper>
                        <Box>
                            <h3 style={{ color: "red" }}>Edit Mode</h3>
                            <form onSubmit={(e) => handleSubmit(e, c.id)} style={{ left: "50%"}}>
                                <label>Location: </label>
                                <input type="text" name="location" value={editData.location} onChange={handleChange}></input>
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
                                <label>Duration: </label>
                                <input type="text" name="duration" value={editData.duration} onChange={handleChange}></input>
                                <br></br>
                                <label>capacity: </label>
                                <input type="text" name="capacity" value={editData.cost} onChange={handleChange}></input>
                                <br></br>
                                <label>Cost: </label>
                                <input type="text" name="cost" value={editData.cost} onChange={handleChange}></input>
                                <br></br>
                                <Button onClick={(e) => handleSubmit(e, c.id)}>Submit</Button>
                            </form>
                            <Button variant="contained" onClick={handleExitEdit}>Cancel</Button>
                        </Box>
                    </Paper>
                </Grid>
                :
                <Paper style={{ height: "180px", width: "200px", justifyContent: "center"}}>
                    <Box>
                        <h3>{c.location}</h3>
                        <ul>
                            <li>{c.date ? `Date: ${moment(`${c.date}`).format("llll")}` : "Date: TBD"}</li>
                            <li>Level: {c.level}</li>
                            <li>Duration: {c.duration}</li>
                        </ul>
                        <Button onClick={() => handleEditMode()}>Edit</Button>
                        <Button variant="contained" onClick={() => handleDelete(c.id)}>Delete</Button>
                    </Box>
                </Paper>
            }
        </Grid>
    )
}