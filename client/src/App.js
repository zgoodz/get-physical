import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Trainer from './Components/Trainer'
import Member from './Components/Member'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {


  // useEffect( () => {
  //   // auto-login
  //   fetch("/me_member").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => {

  //         setMember(user)
  //       });
  //     }
  //   });

    // fetch("/me_trainer").then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => {

    //       setTrainer(user)
    //     });
    //   }
    // });
  // }, []);


  return (
    <div>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  )
}

export default App

//   if (trainer) {
//     return(
//       <BrowserRouter>
//         <Switch>
//           <Route exact path = "/trainer">
//             <Trainer/>
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     )
//   } else if (member) {
//     return(
//       <BrowserRouter>
//         <Switch>
//           <Route exact path = "/member">
//             <Member/>
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     )
//   } else {
//     return(
//       <BrowserRouter>
//         <Switch>
//           <Route exact path = "/">
//             <Home/>
//           </Route>
//           <Route path = "/login">
//             <Login setMember={setMember} setTrainer={setTrainer}/>
//           </Route>
//           <Route path = "/register">
//             <Register/>
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     )
//   }