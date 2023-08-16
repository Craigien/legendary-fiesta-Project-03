import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Nav = () => {

    return (
            <nav className="border border-dark rounded">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    {/* Drop down menu of vehicle categories */}
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#collapseNav" role="button" aria-expanded="false" aria-controls="collapseNav">View Inventory</a>
                        <div className="collapse ps-4 pe-4" id="collapseNav">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/categories/Coupe">Coupes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/categories/Sedan">Sedans</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/categories/SUV">SUVs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/categories/Hatchback">Hatchbacks</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/categories/Truck">Trucks</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    {Auth.loggedIn() && (
                        <li className="nav-item">
                            <Link className="nav-link" to="/appointments">View Appointments</Link>
                        </li>
                    )}
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactus">Contact Us</Link>
                    </li>
                </ul>
            </nav>
    );
};

export default Nav;