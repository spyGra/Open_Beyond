import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";

const View = () => {
    const [user, setUser] = useState();
    const params = useParams();
    const id = params.id

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    },[])

    console.log("data",user)

    return (
        <section className="vh-100">
            <div className="container-fluid bg-light h-100">
                <div className="row align-items-center ">
                    <div className="col-sm-2 col-lg-1">
                        <Navbar />
                    </div>
                    <div className="col-sm-10 col-lg-11">
                        <div style={{padding: "200px 0"}}>
                            <div className="d-flex justify-content-center my-5 top-100">
                                <div className="card" style={{width: "50%"}}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item display-2 text-secondary"><i className="bi bi-info-square"/> Users Info</li>
                                        <li className="input-group mb-3 ">
                                            <span className="input-group-text" id="basic-addon1">Name:</span>
                                            <span className="form-control">{ user?.firstName}</span>
                                        </li>
                                        <li className="input-group mb-3 ">
                                            <span className="input-group-text" id="basic-addon1">Family name:</span>
                                            <span className="form-control">{user?.lastName}</span>
                                        </li>
                                        <li className="input-group mb-3 ">
                                            <span className="input-group-text" id="basic-addon1">E-mail:</span>
                                            <span className="form-control">{user?.email}</span>
                                        </li>
                                        <li className="input-group mb-3 ">
                                            <span className="input-group-text" id="basic-addon1">City:</span>
                                            <span className="form-control">{user?.city}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default View;