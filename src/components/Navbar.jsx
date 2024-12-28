import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import logo from "/sumika.svg";

export default function Navbar() {
    return (
        <>
            <nav>
                <div>
                    <img src={logo} className="nav__logo" />
                </div>
                <div className="nav__links">
                    <Link to="./" className="nav__link">
                        Work
                    </Link>
                    <Link to="./" className="nav__link">
                        Docs
                    </Link>
                    <Link to="./" className="nav__link">
                        <i
                            className="ri-import-fill"
                            style={{ fontSize: "1.2rem" }}
                        ></i>
                    </Link>
                    <Link to="./" className="nav__link">
                        <i
                            className="ri-export-fill"
                            style={{ fontSize: "1.2rem" }}
                        ></i>
                    </Link>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
