import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "/sumika.svg";

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="nav__logo">
                    <img src={logo} style={{ width: "2.8rem" }} />
                </div>
                <div className="nav__links">
                    <Link to="./" className="nav__link">
                        Assignments
                    </Link>
                    <Link to="./" className="nav__link">
                        Docs
                    </Link>
                    <Link to="./" className="nav__link">
                        <i className="ri-import-fill"></i>
                    </Link>
                    <Link to="./" className="nav__link">
                        <i className="ri-export-fill"></i>
                    </Link>
                </div>
            </nav>
        </>
    );
}
