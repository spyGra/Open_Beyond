import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <li>
                <Link to="/index">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact Me</Link>
            </li>
        </ul>
    )
}

export default Navbar;
