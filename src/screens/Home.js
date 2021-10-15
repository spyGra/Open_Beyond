import TableComponent from "../components/TableComponent";
import Pagination from "../containers/Pagination";



const Home = () => {
    return (
        <div className="container">
            <TableComponent />
            <Pagination />
        </div>
    )
}

export default Home;