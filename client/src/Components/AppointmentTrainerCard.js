import { useState } from "react"

export default function AppointmentTrainerCard({ c, setClasses}) {
    const [editMode, setEditMode] = useState(false)
    const [editData, setEditData] = useState({
        location: c.location,
        level: c.level,
        duration: c.duration
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
        <div>
            {editMode ? 
                <>
                    <h3 style={{ color: "red" }}>Edit Mode</h3>
                    <form onSubmit={(e) => handleSubmit(e, c.id)}>
                        <label>Location: </label>
                        <input type="text" name="location" value={editData.location} onChange={handleChange}></input>
                        <label>Level: </label>
                        <input type="text" name="level" value={editData.level} onChange={handleChange}></input>
                        <label>Duration: </label>
                        <input type="text" name="duration" value={editData.duration} onChange={handleChange}></input>
                        <button>Submit</button>
                    </form>
                    <button onClick={handleExitEdit}>Cancel</button>
                </>
                :
                <div>
                    <h3>{c.location}</h3>
                    <ul>
                        <li>Level: {c.level}</li>
                        <li>Duration: {c.duration}</li>
                    </ul>
                    <button onClick={() => handleEditMode()}>Edit</button>
                    <button onClick={() => handleDelete(c.id)}>Delete</button>
                </div>
            }
        </div>
    )
}