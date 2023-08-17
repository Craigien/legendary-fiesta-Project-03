import React from 'react';

import { useQuery } from '@apollo/client';

import VehicleList from '../components/VehicleList';

import { QUERY_VEHICLE_TYPE } from '../utils/queries';

// Display list of vehicles
const Vehicles = () => {

    // Returns vehicle category from URL
    const vehicleCategory = window.location.href.split('/')[4];

    // Query all vehicles from chosen category
    const { loading, data } = useQuery(QUERY_VEHICLE_TYPE, {
        variables: { type: vehicleCategory },
    });

    const returnedCars = data?.carTypes || [];

    // Display list of vehicles using vehiclelist component
    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <VehicleList
                    cars = {returnedCars}
                    title={`Available ${vehicleCategory}s`}
                />
            )}
        </div>
    );
};

export default Vehicles;