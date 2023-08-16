import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <aside className="col">
            <nav>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    {/* This should become a drop down menu with category choices */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/categories">View Inventory</Link>
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
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/service">Schedule Service</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactus">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Nav;