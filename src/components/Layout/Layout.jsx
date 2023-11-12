import React from "react";
import { NavLink } from "react-router-dom";
import css from "components/Layout/Layout.module.css";

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <NavLink className={css.navBtn} to="/">Home</NavLink>
                <NavLink className={css.navBtn} to="/movies">Movies</NavLink>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;