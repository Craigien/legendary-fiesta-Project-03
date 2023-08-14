import React from 'react';

import { useQuery } from '@apollo/client';

import VehicleList from '../components/VehicleList';

import { QUERY_VEHICLES } from '../utils/queries';

// Should return vehicle category from URL
// const vehicleCategory = document.location().split('/categories/');
const vehicleCategory = "all";

// console.log("Vehicle Category: " + vehicleCategory);

const Vehicles = () => {

    // Need to load vehicles associated with chosen category
    const { loading, data } = useQuery(QUERY_VEHICLES);
    const allCars = data?.cars || [];

    // console.log("All Vehicles: " + allVehicles);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <VehicleList
                    cars = {allCars}
                    title={`Available ${vehicleCategory}`}
                />
            )}
        </div>
    );
};

export default Vehicles;