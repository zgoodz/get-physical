import { BrowserRouter } from "react-router-dom"
import Home from './Components/Home'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  )
}

export default App