import {useUserContext} from "../context/userContextProvider";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import Navbar from "../components/Navbar";

const UpdateUser = () => {
    const {
        cancelValidation,
        handleEditClick,
        user,
        setUser,
        cancelAndSendToHomePage
    } = useUserContext();

    const params = useParams();
    const id = params.id

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    },[])

    return (
       <>
        <section className="vh-100 bg-light">
            <div className="container-fluid h-100">
                <div className="row align-items-center bg-light">
                    <div className="col-sm-2 col-lg-1">
                        <Navbar />
                    </div>
                    <div className="col-sm-10 col-lg-11">
                        <div className="vh-120 bg-light">
                            <div className="py-5 h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                        <div className="card shadow-2-strong" style={{borderRadius: "3px"}}>
                                            <div className="card-body p-5 text-center">
                                                <h3 className="mb-5">Update user</h3>
                                                <form onSubmit ={(e)=>handleEditClick(e, id)}>
                                                    <div className="form-floating mb-4">
                                                        <input
                                                            value={user.firstName}
                                                            name="firstName"
                                                            type="text"
                                                            id="firstName"
                                                            className="form-control form-control-lg"
                                                            autoComplete="off"
                                                            placeholder="Name"
                                                            required
                                                            onChange={(e)=>setUser({...user, firstName: e.target.value})}
                                                        />
                                                        <label className="form-label" htmlFor="loginName">Name</label>
                                                    </div>
                                                    <div className="form-floating mb-4">
                                                        <input
                                                            value={user.lastName}
                                                            name="lastName"
                                                            type="text"
                                                            id="lastName"
                                                            className="form-control form-control-lg"
                                                            autoComplete="off"
                                                            placeholder="Family name"
                                                            required
                                                            onChange={(e)=>setUser({...user, lastName: e.target.value})}
                                                        />
                                                        <label className="form-label" htmlFor="loginName">Family name</label>
                                                    </div>
                                                    <div className="form-floating mb-4">
                                                        <input
                                                            value={user.email}
                                                            name="email"
                                                            type="email"
                                                            id="email"
                                                            className="form-control form-control-lg"
                                                            autoComplete="off"
                                                            placeholder="E-mail"
                                                            required
                                                            onChange={(e)=>setUser({...user, email: e.target.value})}
                                                        />
                                                        <label className="form-label" htmlFor="loginName">E-mail</label>
                                                    </div>
                                                    <div className="form-floating mb-4">
                                                        <input
                                                            value={user.city}
                                                            name="city"
                                                            type="text"
                                                            id="city"
                                                            className="form-control form-control-lg"
                                                            autoComplete="off"
                                                            placeholder="City"
                                                            required
                                                            onChange={(e)=>setUser({...user, city: e.target.value})}
                                                        />
                                                        <label className="form-label" htmlFor="loginName">City</label>
                                                    </div>
                                                    <button
                                                        className="btn btn-success btn-lg btn-block"
                                                        type="submit"
                                                    >Update user</button>
                                                    <button
                                                        className="btn btn-secondary btn-lg btn-block m-2"
                                                        data-bs-toggle={(user?.firstName||user?.lastName||user?.email||user?.city)&& "modal"}
                                                        data-bs-target={(user?.firstName||user?.lastName||user?.email||user?.city)&& "#reg-modal"}
                                                        onClick={(e)=>cancelValidation(e)}
                                                    >Cancel</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/*Modal*/}
    <div className="modal fade" id="reg-modal" aria-labelledby="modal-title" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Leaving the page</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>
                        Are you sure to cancel?
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-success"
                            data-bs-dismiss="modal"
                            onClick={cancelAndSendToHomePage}
                    >Yes</button>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default UpdateUser;