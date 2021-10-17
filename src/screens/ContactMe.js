import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";

const ContactMe = () => {
 const [myData, setMyData] = useState()
    useEffect(()=>{
        const userId = sessionStorage.getItem(`userId`)
        fetch(`http://localhost:5000/auth/${userId}`)
            .then((response) => response.json())
            .then((data) => setMyData(data));
    },[])
    return (
        <section className="vh-100 bg-light">
            <div className="container-fluid vh-100 ">
                <div className="row bg-light">
                    <div className="col-sm-2 col-lg-1">
                        <div className="row mt-sm-5 pt-sm-5">
                            <div className="col">
                                <Navbar />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 col-lg-11">
                        <div style={{padding: "9% 0"}}>
                            <div className="d-flex justify-content-center">
                                <div className="card" style={{width: "50%"}}>
                                    <div className="card-header display-2 text-light bg-primary">
                                        <i className="bi bi-info-square"/> My Info
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item bg-light text-primary">Name</li>
                                        <li className="list-group-item">{ myData?.firstName}</li>
                                        <li className="list-group-item bg-light text-primary">Family name</li>
                                        <li className="list-group-item">{myData?.lastName}</li>
                                        <li className="list-group-item bg-light text-primary">E-mail</li>
                                        <li className="list-group-item">{myData?.email}</li>
                                        <li className="list-group-item bg-light text-primary">Phone</li>
                                        <li className="list-group-item">{myData?.phone}</li>
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