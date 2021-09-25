import { useState } from 'react'

export default function Register() {

    const [trainerBtn, setTrainerBtn] = useState(false)
    const [memberBtn, setMemberBtn] = useState(false)

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

    return (
        <div>
            <h1>Register as:</h1>
            <button onClick={handleTrainerClick}>Trainer</button>
            <button onClick={handleMemberClick}>Member</button>


        </div>
    )
}