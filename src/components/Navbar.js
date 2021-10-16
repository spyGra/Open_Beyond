import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="btn-group-vertical d-flex justify-content-center my-2">
            <Link className="btn btn-outline-primary" aria-current="page" to="/admin/"><i className="bi bi-house"/> Home</Link>
            <Link className="btn btn-outline-primary" to="/admin/contact"><i className="bi bi-envelope"/> Contact</Link>
        </div>
    )
}

export default Navbar;

