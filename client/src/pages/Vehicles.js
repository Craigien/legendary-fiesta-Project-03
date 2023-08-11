import React from 'react';

import { useQuery } from '@apollo/client';

import VehicleList from '../components/VehicleList';

import { QUERY_VEHICLES } from '../utils/queries';

// Should return vehicle category from URL
const vehicleCategory = document.location().split('/categories/');

const Vehicles = () => {

    // Need to load vehicles associated with chosen category


    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <VehicleList
                    vehicles = {vehicles}
                    title={`Available ${vehicleCategory}`}
                />
            )}
        </div>
    );
};

export default Vehicles;