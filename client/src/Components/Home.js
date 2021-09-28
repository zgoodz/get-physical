import { Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Member from './Member'
import Trainer from './Trainer'
// import Register from './Register'
// import Login from './Login'
import LoginPage from './LoginPage'
import NavBar from './NavBar'
import Exercises from './Exercises'
import Appointments from './Appointments'

export default function Home() {
    const [member, setMember] = useState(null)
    const [trainer, setTrainer] = useState(null)
    const [exercises, setExercises] = useState([])
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('/me')
        .then(r =>r.json())
        .then(data => {
            if (data && data.user_type === "trainer") {
                setTrainer(data)
            } else if (data && data.user_type === "client") {
                setMember(data)
            }
        })
    }, [])

    useEffect(() => {
        fetch('/exercises')
        .then(r => r.json())
        .then(data => setExercises(data))
    }, [])

    useEffect(() => {
        fetch('/appointments')
        .then(r => r.json())
        .then(data => setClasses(data))
    }, [])

    if (!member && !trainer) return <LoginPage setMember={setMember} setTrainer={setTrainer}/>
            
    return(
        <div>
            <NavBar />
            <Switch>
                <Route exact path = '/'>
                    {member ? <Member member={member} setMember={setMember}/> 
                        : <Trainer classes={classes} setClasses={setClasses} exercises={exercises} setExercises={setExercises} trainer={trainer} setTrainer={setTrainer}/>
                    }
                </Route>
                <Route path = '/exercises'>
                    <Exercises exercises={exercises} memeber={member} trainer={trainer}/>
                </Route>
                <Route path = '/classes'>
                    <Appointments classes={classes}/>
                </Route>
            </Switch>
        </div>
    )
}