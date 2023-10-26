import "./Login.css"
import { useState } from "react"
import SignUp from "./SignUp/SignUp"
import SignIn from "./SignIn/SignIn"
import ToggleContainer from "./ToggleContainer/ToggleContainer"
import useSEO from "../../Hooks/useSEO"
import Alert from "../Alert/Alert"

export default function Login() {
    const [active, setActive] = useState("")

    if(active === ""){
        useSEO({title: "Login", description: "Login to your account"})
    }else{
        useSEO({title: "Sign Up", description: "Create a new account"})
    }
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