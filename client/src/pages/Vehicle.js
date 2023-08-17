import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_VEHICLE } from '../utils/queries';

import AppointmentForm from '../components/AppointmentForm';

// Displays vehicle selected by user
const Vehicle = () => {
    const { carId } = useParams();

    // Query a single vehicle using vehicle ID
    const { loading, data } = useQuery(QUERY_SINGLE_VEHICLE, {
        variables: { carId: carId },
    });

    const car = data?.car || {};

    if (!car) {
        return <h3>No Vehicle Found</h3>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    // Displays vehicle with details in card
    return (
        <div className="container">
            <h3>{car.year} {car.make} {car.model}</h3>
                <div className="card">
                    <div className="row">
                        <div className="col-6">
                            <img src={require(`../images/${car.image}`)} className="card-img-top %" alt={car.model} />
                        </div>
                        <div className="card-body col-6">
                            <ul style={{ listStyleType: 'none' }}>
                                <li className="card-text">Price: ${car.price}</li>
                                <hr />
                                <li className="card-text">Monthly Payment: ${car.monthlyPayment}</li>
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

                    {/* Display form to create appointment for test drive */}
                    <div className="row p-2">
                        <AppointmentForm carId={car._id} />
                    </div>
                </div>
        </div>
    );
};

export default Vehicle;