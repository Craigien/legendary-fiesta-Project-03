import React from 'react';

import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_VEHICLE } from '../../utils/queries';

// Display year make and model of vehicle in each of user's appointments
const DisplayVehicle = ({ carId }) => {

    const { loading, data } = useQuery(QUERY_SINGLE_VEHICLE, {
        variables: { carId: carId },
    });

    const car = data?.car || {};

    return (
        <div>
            {loading ? (
                <div>loading...</div>
            ) : (
                <h4 className="pb-2">Test Drive for {car.year} {car.make} {car.model}</h4>
            )}
        </div>
    );
};

export default DisplayVehicle;