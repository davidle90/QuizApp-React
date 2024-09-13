import { Route, Routes } from "react-router-dom"
import MasterLayout from "./views/layouts/MasterLayout"
import Home from "./views/pages/Home/Home"
import Quiz from "./views/pages/Quiz/Quiz"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MasterLayout />}>
        <Route index element={<Home />} />
        <Route element={<Quiz />} />
      </Route>
    </Routes>
  )
}

export default App
