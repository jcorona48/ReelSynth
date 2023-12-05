
export default function ToggleContainer({ hook }){
            return(
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome</h1>
                                <p>If you already have an active account you can login with it.</p>
                                <button className="hidden" id="login" onClick={ ()=> {
                                    hook("")
                                } }>Login</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Ships</h1>
                                <p>
                                    Do not you have an account yet?<br/>
                                    You can create one right now
                                </p>
                                <button className="hidden" id="register" onClick={ ()=> {
                                    hook("active")
                                } }>Register</button>
                            </div>
                        </div>
                    </div>
                )
}