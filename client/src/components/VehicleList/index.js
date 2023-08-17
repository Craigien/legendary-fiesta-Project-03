import React from 'react';
import { Link } from 'react-router-dom';

// Displays list of vehicles depending on the vehicle type selected
const VehicleList = ({ cars, title }) => {

    if (!cars.length) {
        return <h3>No Vehicles Found</h3>
    }

    // Display list of vehicles
    return (
        <div>
            <h3>{title}</h3>

            {cars &&
                cars.map((car) => (
                    <Link to={`/categories/vehicles/${car._id}`} key={car._id} style={{ textDecoration: "none" }}>
                        <div className="card mb-3" style={{ maxWidth: "1080px" }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={require(`../../images/${car.image}`)} className="card-img" alt={car.model} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{car.year} {car.make} {car.model}</h5>
                                        <p className="card-text">Price: ${car.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    );
};

export default VehicleList;