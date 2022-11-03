import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
// import logo from "../img/logo.svg";
import logo from "../img/logo-mancavalarete.svg";

const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: "",
        };
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                          navBarActiveClass: "is-active",
                      })
                    : this.setState({
                          navBarActiveClass: "",
                      });
            }
        );
    };

    render() {
        return (
            <nav
                className="navbar is-primary"
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="container">
                    <div className="navbar-brand">
                        <div className="header_brand has-text-warning">
                            <Link to="/" title="Mancava La rete">
                                <img
                                    src={logo}
                                    alt="Mancava la Rete - Parrocchie di Manzolino, Cavazzona, Panzano, Riolo, Recovato e Rastellino"
                                    style={{ width: "320px" }}
                                />
                            </Link>
                        </div>
                        <div
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            onClick={() => this.toggleHamburger()}
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>

                    <div
                        id="navMenu"
                        className={`navbar-menu ${this.state.navBarActiveClass}`}
                    >
                        <div className="navbar-end has-text-centered">
                            <Link
                                className=" navbar-item has-text-weight-bold"
                                to="/parrocchie"
                                activeClassName="has-text-black"
                            >
                                Parrocchie
                            </Link>
                            {/* <Link
                                className=" navbar-item has-text-white has-text-weight-bold"
                                to="/dynamis"
                                activeClassName="has-text-black"
                            >
                                Dynamis
                            </Link> */}

                            <div className="navbar-item has-dropdown is-hoverable">
                                <div className="navbar-link has-text-weight-bold">
                                    Scuole
                                </div>

                                <div className="navbar-dropdown">
                                    <Link className="navbar-item" to="/scuola">
                                        Manzolino
                                    </Link>
                                    <Link
                                        className="navbar-item"
                                        to="/scuola/savioli"
                                    >
                                        Riolo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Navbar;
