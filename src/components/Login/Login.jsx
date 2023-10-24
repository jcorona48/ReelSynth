import "./Login.css"
import { useState } from "react"
import SignUp from "./SignUp/SignUp"
import SignIn from "./SignIn/SignIn"
import ToggleContainer from "./ToggleContainer/ToggleContainer"

export default function Login() {
    const [active, setActive] = useState("")
    return (
        <div className="Body-Login">
            <div className={`container ${active}`} id="container">
                <SignUp/>
                <SignIn/>
                <ToggleContainer hook={setActive}/>
            </div>
        </div>
    )
}