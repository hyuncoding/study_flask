// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//     return (
//         <header className="header">
//             <div className="logo">Bizza</div>
//             <nav className="nav">
//                 <ul>
//                     <li>
//                         <Link to="/" className="navlink">
//                             Home
//                         </Link>
//                     </li>

//                     <li>
//                         <Link to="/speakers" className="active navlink">
//                             Speakers
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// };

// export default Header;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleLoginButtonClick = () => {
        navigate("/auth/login");
    };
    const handleSignUpButtonClick = () => {
        navigate("/auth/signup");
    };
    return (
        <header className="header">
            <div className="logo">Bizza</div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/" className="navlink">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="navlink">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/speakers" className="active navlink">
                            Speakers
                        </Link>
                    </li>
                    <li>
                        <Link to="/events" className="navlink">
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link to="/sponsors" className="navlink">
                            Sponsors
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="navlink">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="auth">
                <button onClick={handleLoginButtonClick} className="btn">
                    Login
                </button>
                <button onClick={handleSignUpButtonClick} className="btn">
                    Sign up
                </button>
            </div>
        </header>
    );
};

export default Header;
