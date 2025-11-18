import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"


function App() {
  return (
    <div className="w-full bg-black bg-[url('./src/assets/bgImage.svg')] bg-contain bg-no-repeat">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/Profile" Component={ProfilePage} />
      </Routes>
    </div>
  )
}

export default App
