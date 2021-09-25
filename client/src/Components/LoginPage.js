import { Link, Switch, Route } from 'react-router-dom'
import Register from './Register'
import Login from './Login'

export default function LoginPage({ setMember, setTrainer}) {
    return(
        <div>
            <h1>Welcome</h1>
            <h2>Let's Get Physical</h2>
            {/* add Login/Register Routes */ }
            <Link to = '/login'>Login</Link>
            <Link to = '/register'>Register</Link>
            <Switch>
                <Route path = '/login'>
                    <Login setMember={setMember} setTrainer={setTrainer}/>
                </Route>
                <Route path = '/register'>
                    <Register />
                </Route>
            </Switch>
        </div>
    )
}