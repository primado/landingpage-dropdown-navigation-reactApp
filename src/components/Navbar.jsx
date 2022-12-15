import  React, { useState } from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';




// Components
import Feature from "./nav-features";
import Company from "./nav-company";

// Images
import nav_brand from "../assets/logo.svg"
import arrow_down from "../assets/icon-arrow-down.svg"
import arrow_up from "../assets/icon-arrow-up.svg"
import close_menu from "../assets/icon-close-menu.svg"
import menu from "../assets/icon-menu.svg"
// Styles
import "../css/styles.css";

export default function Navbar() {

    const [ open, setOpen ] = useState(false);
    const [ open2, setOpen2 ] = useState(false)
    const [ navOpen, setNavOpen ] = useState(false)

    const handleClick = () => {
        setOpen((prev) => !prev);
    }
    const handleClick2 = () => {
        setOpen2( (prev) => !prev);
    }
    const handleClickAway = () => {
          setOpen(false);
    }
    const handleClickAway2 = () => {
          setOpen2(false);
    };
    
    const handleNavClick = () => {
        setNavOpen( (close) => !close )
    }
    const handleNavClickAway = () => {
        setNavOpen(false)
    }


    return (
        <div>
            <header>
                <nav id="nav">
                    <div className="nav-brand">
                            <a className="nav-brand-link" href="#">
                                <img src={nav_brand} alt="brand logo" />
                            </a>
                        </div>
                    <div className={ navOpen ? "navbar-flex active" : "navbar-flex" }>
        
                        <div className="nav-items-lf">
                           <ClickAwayListener  onClickAway={handleClickAway}> 
                                <div className="dropdown">
                                     <button onClick={ handleClick } className="dropbtn">
                                         Features
                                        {open ?
                                         <img src={arrow_up} alt="arrow-down icon" />
                                         : <img src={arrow_down} alt="arrow-down icon" />
                                        }
                                     </button>
                                     {open ? (
                                         <Feature  />
                                     ) : null}
                                </div>
                           </ClickAwayListener>
                           <ClickAwayListener onClickAway={ handleClickAway2 }>
                           <div className="dropdown">
                                <button onClick={ handleClick2 } className="dropbtn">Company
                                {open2 ?
                                    <img  src={arrow_up} alt="arrow-down icon" />
                                     : <img src={arrow_down} alt="arrow-down icon" />
                                }
                                </button>
                                {  open2 ? (   
                                    <Company />
                                ) : null}
                           </div>
                           </ClickAwayListener>

                           <a className="nav-link" href="#">Careers</a>
                           <a className="nav-link" href="#">About</a>
                        </div>

                        <div className="nav-items-rt">
                            <a className="nav-login" href="#">Login</a>
                            <a className="nav-link-regis" href="#">Register</a>
                        </div>
                    </div>

                    

                    {/* `<ClickAwayListener onClickAway={ handleNavClickAway }>  */}
                        <button onClick={ handleNavClick } className='menuIcon' type='button'>
                            { navOpen ? 
                            <img src={close_menu} alt="Menu icon" />
                            :  <img src={menu} alt="Menu icon" />
                            }         
                        </button>
                    {/* </ClickAwayListener> */}
                   
                </nav>
            </header>
        </div>
    )
}
