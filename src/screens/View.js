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
        <section className="vh-100 bg-light">
            <div className="container-fluid h-100">
                <div className="row align-items-center bg-light">
                    <div className="col-sm-2 col-lg-1">
                        <Navbar />
                    </div>
                    <div className="col-sm-10 col-lg-11">
                        <div style={{padding: "5% 0"}}>
                            <div className="d-flex justify-content-center my-5 top-100">
                                <div className="card" style={{width: "50%"}}>
                                    <div className="card-header display-2 text-light bg-info">
                                        <i className="bi bi-info-square"/> Info
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item bg-light text-info">Name</li>
                                        <li className="list-group-item">{user?.firstName}</li>
                                        <li className="list-group-item bg-light text-info">Family name</li>
                                        <li className="list-group-item">{user?.lastName}</li>
                                        <li className="list-group-item bg-light text-info">E-mail</li>
                                        <li className="list-group-item">{user?.email}</li>
                                        <li className="list-group-item bg-light text-info">City</li>
                                        <li className="list-group-item">{user?.city}</li>
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