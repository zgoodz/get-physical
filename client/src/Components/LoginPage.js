import { Switch, Route } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Button from '@mui/material/Button'

export default function LoginPage({ setMember, setTrainer }) {
    return(
        <div>
            <h1 className="welcome-logo">GetPhysical</h1>
            <div className="login-buttons">
                <Button sx={{ mx: "10px"}} variant="contained" color="secondary" href="/login">
                    LogIn
                </Button>
                <Button variant="contained" color="secondary" href="/register">
                    Register
                </Button>
            </div>
            <Switch>
                <Route path = '/login'>
                    <Login setMember={setMember} setTrainer={setTrainer}/>
                </Route>
                <Route path = '/register'>
                    <Register setMember={setMember} setTrainer={setTrainer}/>
                </Route>
            </Switch>
        </div>
    )
}