import React from 'react';
import { Link } from 'react-router-dom';

const VehicleList = ({ vehicles, title }) => {
    if (!vehicles.length) {
        return <h3>No Vehicles Found</h3>
    }

    return (
        <div>
            {vehicles &&
                vehicles.map((vehicle) => (
                    <Link to={`/vehicles/${vehicle.id}`}>
                        <div key={vehicle._id}>
                            <h4>{vehicle.year} {vehicle.make} {vehicle.model}</h4>
                            <div className="card">
                                <img src={vehicle.image} className="card-img-top" alt={vehicle.name} />
                                <div className="card-body">
                                    <p className="card-text">{vehicle.price}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    );
};

export default VehicleList;