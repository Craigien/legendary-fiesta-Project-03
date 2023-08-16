import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    const isLoggedIn = localStorage.getItem('id_token');

    return (
            <nav>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    {/* Drop down menu of vehicle categories */}
                    <li className="nav-item" >
                        <a className="nav-link" data-bs-toggle="collapse" href="#collapseNav" role="button" aria-expanded="false" aria-controls="collapseNav">View Inventory</a>
                        <div className="collapse" id="collapseNav">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to="/categories/Coupe">Coupes</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/categories/Sedan">Sedans</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/categories/SUV">SUVs</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/categories/Hatchback">Hatchbacks</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/categories/Truck">Trucks</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    {isLoggedIn && (
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