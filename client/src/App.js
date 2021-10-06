import { BrowserRouter } from "react-router-dom"
import Home from './Components/Home'
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ad0909'
    }
  }
})

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App