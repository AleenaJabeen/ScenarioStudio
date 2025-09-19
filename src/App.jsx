import { BrowserRouter,Routes,Route } from "react-router-dom"
import ScenarioStudio from "./pages/ScenarioStudio";
import Layout from "./components/layout/Layout";


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<ScenarioStudio/>} />
      </Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
