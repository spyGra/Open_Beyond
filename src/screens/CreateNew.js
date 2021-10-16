import {useUserContext} from "../context/userContextProvider";
import Navbar from "../components/Navbar";

const CreateNew = () => {

    const{
        cancelAndSendToIndexPage,
        handleCreateClick,
        user,
        setUser
    } = useUserContext()

    return (
    <section className="vh-100">
        <div className="container-fluid bg-light h-100">
            <div className="row align-items-center">
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
                                            <h3 className="mb-5">Create user</h3>
                                            <form>
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
                                                        type="text"
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
                                                    className="btn btn-primary btn-lg btn-block"
                                                    type="submit"
                                                    onClick={(e)=>handleCreateClick(e)}
                                                >Add new user</button>
                                                <button
                                                    className="btn btn-secondary btn-lg btn-block m-2"
                                                    type="submit"
                                                    onClick={(e)=>cancelAndSendToIndexPage(e)}
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
    )
}

export default CreateNew;