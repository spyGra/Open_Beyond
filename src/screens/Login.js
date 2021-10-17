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

    return (
        <section className="vh-100" style={{borderRadius: "3px"}}>
            <div className="container-fluid h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{backgroundColor:"#e5edfa"}}>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: "3px"}}>
                            <div className="card-body p-5 text-center">
                                <h3 className="mb-5">Sign in</h3>
                                <form>
                                    <div className="form-floating mb-4">
                                        <input
                                            value ={userName}
                                            name="fname"
                                            type="text"
                                            id="loginName"
                                            className="form-control form-control-lg"
                                            autoComplete="off"
                                            placeholder="Name"
                                            required
                                            onChange={(e)=>setUserName(e.target.value)}
                                        />
                                        <label className="form-label" htmlFor="loginName">Name</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input
                                            value={userPassword}
                                            name="password"
                                            type="password"
                                            id="loginPassword"
                                            className="form-control form-control-lg"
                                            placeholder="Password"
                                            required
                                            autoComplete="off"
                                            onChange={(e)=>setUserPassword(e.target.value)}
                                        />
                                        <label className="form-label" htmlFor="loginPassword">Password</label>
                                    </div>
                                    <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={loginTo}>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login;