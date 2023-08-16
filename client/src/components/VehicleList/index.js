import React from 'react';
import { Link } from 'react-router-dom';

const VehicleList = ({ cars, title }) => {
    console.log("Cars: " + cars);

    if (!cars.length) {
        return <h3>No Vehicles Found</h3>
    }

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