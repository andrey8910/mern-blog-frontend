import {Header} from "./components";
import Container from "@mui/material/Container";
import {Home} from "./pages/Home.tsx";
function App() {


  return (
    <>
        <Header />
        <Container>
            <Home />
        </Container>

    </>
  )
}

export default App
