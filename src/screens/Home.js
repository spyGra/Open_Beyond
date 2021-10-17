import TableComponent from "../components/TableComponent";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <section className="vh-100 bg-light">
            <div className="container-fluid h-100">
                <div className="row bg-light">
                    <div className="col-sm-2 col-lg-1">
                        <div className="row mt-sm-5 pt-sm-5">
                            <div className="col">
                                <Navbar />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 col-lg-11">
                        <TableComponent />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;