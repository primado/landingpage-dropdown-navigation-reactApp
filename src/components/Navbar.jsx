import React, {useState} from "react";

// Components
import Feature from "./nav-features";
import Company from "./nav-company";

// Images
import nav_brand from "../assets/logo.svg"
import arrow_down from "../assets/icon-arrow-down.svg"
import arrow_up from "../assets/icon-arrow-up.svg"
// Styles
import "../css/styles.css";

export default function Navbar() {

    const useToggle = (initialState) => {
        const [toggleValue, setToggleValue] = useState(initialState);
    
        const toggler = () => { setToggleValue(!toggleValue) };
        return [toggleValue, toggler]
      };
    
      const [toggle1, setToggle1] = useToggle();
      const[toggle2, setToggle2] = useToggle()

    return (
        <div>
            <header>
                <nav id="nav">
                    <div className="navbar-flex">
                        <div className="nav-brand">
                            <a className="nav-brand-link" href="#">
                                <img src={nav_brand} alt="brand logo" />
                            </a>
                        </div>


                        <div className="navbar-items">
                            <div className="navbar-items">
                                <div className="nav-items-lf">
                                   <div className="dropdown">
                                        <button onClick={ setToggle1 } className="dropbtn">Features
                                            <img src={arrow_down} alt="arrow-down icon" />
                                        </button>

                                        {toggle1 && (
                                            <Feature />
                                        )}
                                   </div>
                                   <div className="dropdown">
                                        <button onClick={ setToggle2 } className="dropbtn">Company
                                            <img src={arrow_down} alt="arrow-down icon" />
                                        </button>

                                        {  toggle2 && (   
                                            <Company />
                                        )}
                                   </div>
                                   <a className="nav-link" href="#">Careers</a>
                                   <a className="nav-link" href="#">About</a>
                                </div>
                            </div>
        
                            <div className="nav-items-rt">
                                <a className="nav-login" href="#">Login</a>
                                <a className="nav-link-regis" href="#">Register</a>
                            </div>

                        </div>
                    </div>
                   
                </nav>
            </header>
        </div>
    )
}
