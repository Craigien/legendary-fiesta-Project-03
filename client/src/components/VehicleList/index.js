import React from 'react';
import { Link } from 'react-router-dom';

const VehicleList = ({ cars, title }) => {
    // console.log(cars);

    if (!cars.length) {
        return <h3>No Vehicles Found</h3>
    }

    return (
        <div>
            <h3>{title}</h3>
            {cars &&
                cars.map((car) => (
                    <Link to={`/categories/vehicles/${car._id}`}>
                        <div key={car._id}>
                            <h4>{car.year} {car.make} {car.model}</h4>
                            <div className="card">
                                <img src={require( `../../images/${car.image}`)} className="card-img-top" alt={car.model} />
                                <div className="card-body">
                                    <p className="card-text">${car.price}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    );
};

export default VehicleList;

// Images are causing GET request