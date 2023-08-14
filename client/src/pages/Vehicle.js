import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_VEHICLE } from '../utils/queries';

const Vehicle = () => {
    const { carId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_VEHICLE, {
        variables: { carId: carId },
    });

    const car = data?.car || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>{car.year} {car.make} {car.model}</h3>
            <div className="card">
                <img src={`../../images/${car.image}`} className="card-img-top" alt={car.model} />
                <div className="card-body">
                    <p className="card-text">${car.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Vehicle;