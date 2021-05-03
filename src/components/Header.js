import React from 'react';
import logo from '../assets/images/logo.png'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <React.Fragment>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="nav-link">
                <NavLink to="/top"

                    activeStyle={{
                        fontWeight: "bold",
                        color: "black",
                        background: "#fbc91b"
                    }}>
                    New
          </NavLink>
                <NavLink to="/new" activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                    background: "#fbc91b"
                }}>
                    Past
          </NavLink>
            </div>
        </React.Fragment >
    );
};

export default Header;