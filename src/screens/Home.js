import TableComponent from "../components/TableComponent";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <section className="vh-100">
            <div className="container-fluid bg-light h-100">
                <div className="row align-items-center ">
                    <div className="col-sm-2 col-lg-1">
                        <Navbar />
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