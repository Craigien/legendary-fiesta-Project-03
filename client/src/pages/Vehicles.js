import React from 'react';

import { useQuery } from '@apollo/client';

import VehicleList from '../components/VehicleList';

import { QUERY_VEHICLE_TYPE } from '../utils/queries';

// Should return vehicle category from URL
const vehicleCategory = window.location.href.split('/')[4];
console.log("Vehicle Category: " + vehicleCategory);

const Vehicles = () => {

    // Need to load vehicles associated with chosen category
    const { loading, data } = useQuery(QUERY_VEHICLE_TYPE, {
        variables: { type: vehicleCategory },
    });

    const returnedCars = data?.carTypes || [];

    console.log("allCars: " + returnedCars);

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