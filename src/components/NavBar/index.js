import React from 'react';
import {Nav, NavLink, Bars, NavMenu} from './NavBarElement';
import Logo from '../../components/Cards/images/mindal-logo.png';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={Logo} alt="" />
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    
                    <NavLink to="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to="/">
                        Sign In
                    </NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    )
}

export default NavBar;
