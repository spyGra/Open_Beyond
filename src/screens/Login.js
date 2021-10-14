import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const sendToHomePage = () => {
        history.push("/index")
    }

    return(
        <div>
            <h1>Login</h1>
            <form>
                <p>first name</p>
                <input
                    type="text"
                    name="fname"
                    autoComplete="off"
                    placeholder="Name.."
                    required/>
                <p>password</p>
                <input type="password"
                       name="password"
                       autoComplete="off"
                       placeholder="Password.."
                       required/>
                <button onClick={sendToHomePage}>add</button>
            </form>
        </div>
    )
}

export default Login;