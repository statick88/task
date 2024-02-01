import { Route, Routes } from "react-router-dom"
import Auth from "../components/Auth"
import Welcome from "../components/Welcome"



const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path="login" element={<Auth />} />
        </Routes>
    )
}

export default AppRouter