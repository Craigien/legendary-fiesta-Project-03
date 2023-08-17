import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

// Display header with organization name and buttons
const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    // Display organization name and either login and signup or logout buttons depending on user login status
    return (
        <header className="bg-primary mb-4 py-3 display-flex align-center">
            <div className="container-flex">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <Link className="text-white" to="/" style={{ textDecoration: "none" }}>
                            <h1 className="m-0 text-center" style={{ fontSize: '3rem' }}>
                                C&M Dealerships
                            </h1>
                        </Link>
                    </div>

                    <div className="col-md-2 col-sm-8">
                        {Auth.loggedIn() ? (
                            <>
                                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link className="btn btn-lg btn-light m-2" to="/login">
                                    Login
                                </Link>
                                <Link className="btn btn-lg btn-light m-2" to="/signup">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <br />
            <br />

        </header>
    );
};

export default Header;