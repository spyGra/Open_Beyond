import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import TableComponent from "../components/TableComponent";

const ContactMe = () => {
 const [myData, setMyData] = useState()
    useEffect(()=>{
        const userId = sessionStorage.getItem(`userId`)
        fetch(`http://localhost:5000/auth/${userId}`)
            .then((response) => response.json())
            .then((data) => setMyData(data));
    },[])
    return (
        <section className="vh-100">
            <div className="container-fluid bg-light h-100">
                <div className="row align-items-center">
                    <div className="col-sm-2 col-lg-1">
                        <Navbar />
                    </div>
                    <div className="col-sm-10 col-lg-11">
                        <div style={{padding: "250px 0"}}>
                            <div className="d-flex justify-content-center">
                                <div className="card" style={{width: "50%"}}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item display-2 text-secondary"><i className="bi bi-info-square"/> My Info</li>
                                        <li className="input-group mb-3 ">
                                            <span className="input-group-text" id="basic-addon1">Name:</span>
                                            <span className="form-control">{ myData?.firstName}</span>
                                        </li>
                                        <li className="input-group mb-3 ">
                                            <span className="input-group-text" id="basic-addon1">Family name:</span>
                                            <span className="form-control">{myData?.lastName}</span>
                                        </li>
                                        <li className="input-group mb-3 ">
                                            <span className="input-group-text" id="basic-addon1">E-mail:</span>
                                            <span className="form-control">{myData?.email}</span>
                                        </li>
                                        <li className="input-group mb-3 ">
                                            <span className="input-group-text" id="basic-addon1">Phone:</span>
                                            <span className="form-control">{myData?.phone}</span>
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

export default ContactMe;