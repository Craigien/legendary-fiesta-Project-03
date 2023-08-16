import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_VEHICLE } from '../utils/queries';

import AppointmentForm from '../components/AppointmentForm';

const Vehicle = () => {
    const { carId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_VEHICLE, {
        variables: { carId: carId },
    });

    const car = data?.car || {};

    if (!car)
    {
        return <h3>No Vehicle Found</h3>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>{car.year} {car.make} {car.model}</h3>
            <div className="card">
                <img src={require(`../images/${car.image}`)} className="card-img-top" alt={car.model} />
                <div className="card-body">
                    <ul style={{ listStyleType: 'none' }}>
                        <li className="card-text">Price: ${car.price}</li>
                        <hr />
                        <li className="card-text">Monthly Payment: {car.monthlyPayment}</li>
                        <hr />
                        <li className="card-text">Condition: {car.condition}</li>
                        <hr />
                        <li className="card-text">Mileage: {car.mileage}</li>
                        <hr />
                        <li className="card-text">Color: {car.color}</li>
                    </ul>
                </div>
            </div>

            <br />

            <div>
                <AppointmentForm carId={car._id} />
            </div>

        </div>
    );
};

export default Vehicle;