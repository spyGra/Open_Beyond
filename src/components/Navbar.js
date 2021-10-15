import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <li>
                <Link to="/admin/">Home</Link>
            </li>
            <li>
                <Link to="/admin/contact">Contact Me</Link>
            </li>
        </ul>
    )
}

export default Navbar;

