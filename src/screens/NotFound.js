import Navbar from "../components/Navbar";

const NotFound = () => {
    return (
        <section className="vh-100 bg-light">
            <div className="container-fluid h-100">
                <div className="row align-items-center bg-light">
                    <div className="col-sm-2 col-lg-1">
                        <Navbar />
                    </div>
                    <div className="col-sm-10 col-lg-11">
                        <div style={{padding: "200px 0"}}>
                            <div className="d-flex justify-content-center my-5 top-100">
                                <div className="card display-1" style={{width: "50%"}}>
                                    <p>Oops!</p>
                                    <p>Page not found!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound;