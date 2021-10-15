import { useHistory } from "react-router-dom";
import {useState} from "react";

const Login = () => {
    const history = useHistory()
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const loginTo = () => {
        if(userName==="spyros" && userPassword==="1234"){
            sessionStorage.setItem('userId', '1')
            history.push("/admin")
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <form>
                <p>first name</p>
                <input
                    value ={userName}
                    type="text"
                    name="fname"
                    autoComplete="off"
                    placeholder="Name.."
                    required
                    onChange={(e)=>setUserName(e.target.value)}
                />
                <p>password</p>
                <input
                    value={userPassword}
                    type="password"
                    name="password"
                    autoComplete="off"
                    placeholder="Password.."
                    required
                    onChange={(e)=>setUserPassword(e.target.value)}
                />
                <button onClick={loginTo}>add</button>
            </form>
        </div>
    )
}

export default Login;