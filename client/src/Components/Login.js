import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Login({ setMember, setTrainer }) {
    const history = useHistory()

    const [trainerBtn, setTrainerBtn] = useState(false)
    const [memberBtn, setMemberBtn] = useState(false)
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
        is_member: true
    })

    function handleTrainerClick() {
        if (memberBtn) {
            setMemberBtn(!memberBtn)
            setTrainerBtn(!trainerBtn)
        } else if (memberBtn === false && trainerBtn === false) {
            setTrainerBtn(!trainerBtn)
        } else {
            setTrainerBtn(!trainerBtn)
        }
    }

    function handleMemberClick() {
        if (trainerBtn) {
            setMemberBtn(!memberBtn)
            setTrainerBtn(!trainerBtn)
        } else if (memberBtn === false && trainerBtn === false) {
            setMemberBtn(!memberBtn)
        } else {
            setMemberBtn(!memberBtn)
        }
    }

    function handleChange(e) {
        setLoginInfo({...loginInfo,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (memberBtn) {
            fetch('/login_member', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginInfo)
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        setMember(data)
                        history.push("/home")
                    }
                })
        } else if (trainerBtn) {
            fetch('/login_trainer', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginInfo)
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        setTrainer(data)
                        history.push("/home")
                    }
                })
        } else {
            alert("Please select Member or Trainer")
        }
    }
    
    return (
        <div>
            <h1>Pick one:</h1>
            <div className="member-trainer-buttons-container">
                <button className={memberBtn ? "member-trainer-button active" : "member-trainer-button"} onClick={handleMemberClick}>Member</button>
                <button className={trainerBtn ? "member-trainer-button active" : "member-trainer-button"} onClick={handleTrainerClick}>Trainer</button>
            </div>
            <div className="form-container">
                <form id="login-register" onSubmit={handleSubmit}>
                    <label for="email">Email:</label>
                    <input type="text" name="email" value={loginInfo.email} onChange={handleChange} ></input>
                    <br></br>
                    <label for="password">Password:</label>
                    <input type="password" name="password" value={loginInfo.password} onChange={handleChange} ></input>
                    <br></br>
                    <button className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    )
}