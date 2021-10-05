import { useState } from 'react'
import { useHistory } from 'react-router'

export default function Register({ setMember, setTrainer }) {
    const history = useHistory()

    const [trainerBtn, setTrainerBtn] = useState(false)
    const [memberBtn, setMemberBtn] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        user_type: ''
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleTrainerClick() {
        if (memberBtn) {
            setMemberBtn(!memberBtn)
            setTrainerBtn(!trainerBtn)
            formData.user_type = 'trainer' 
        } else if (memberBtn === false && trainerBtn === false) {
            setTrainerBtn(!trainerBtn)
            formData.user_type = 'trainer'
        } else {
            setTrainerBtn(!trainerBtn)
            formData.user_type = 'trainer'
        }
    }

    function handleMemberClick() {
        if (trainerBtn) {
            setMemberBtn(!memberBtn)
            setTrainerBtn(!trainerBtn)
            formData.user_type = 'member'
        } else if (memberBtn === false && trainerBtn === false) {
            setMemberBtn(!memberBtn)
            formData.user_type = 'member'
        } else {
            setMemberBtn(!memberBtn)
            formData.user_type = 'member'
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        let data = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.confirm_password,
            user_type: formData.user_type
        }
        if (memberBtn) {
            fetch('/clients', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(json => {
                    if (json.errors) {
                        alert(json.errors)
                    }
                    else {
                        setMember(json)
                        history.push("/")
                    }
                })
        } else if (trainerBtn) {
            fetch('/trainers', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(json => {
                    if (json.errors) {
                        alert(json.errors)
                    }
                    else {
                        setTrainer(json)
                        history.push("/")
                    }
                })

        }
    }

    return (
        <div>
            <h1>Pick one:</h1>
            <div className="member-trainer-buttons-container">
                <button className={memberBtn ? "member-trainer-button active" : "member-trainer-button"} onClick={handleMemberClick}>Member</button>
                <button className={trainerBtn ? "member-trainer-button active" : "member-trainer-button"} onClick={handleTrainerClick}>Trainer</button>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input onChange={handleChange} type='text' name='name' id='name' value={formData.name}></input><br/>
                <label htmlFor='email'>Email: </label>
                <input onChange={handleChange} type='text' name='email' id='email' value={formData.email}></input><br/>
                <label htmlFor='password'>Password: </label>
                <input onChange={handleChange} type='text' name='password' id='password' value={formData.password}></input><br/>
                <label htmlFor='confirm_password'>Confirm Password: </label>
                <input onChange={handleChange} type='text' name='confirm_password' id='confirm_password' value={formData.confirm_password}></input><br/>
                <label htmoFor='user_type'>Type of User: </label>
                {memberBtn ? <><input name='user_type' id='user_type' value='member'></input><br/></> : <><input name='user_type' id='user_type' value='trainer'></input><br/></> }
                <button className="submit-button">Submit</button>
            </form>

        </div>
    )
}