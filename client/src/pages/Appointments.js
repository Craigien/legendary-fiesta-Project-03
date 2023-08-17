import React from 'react';

import { useQuery } from '@apollo/client';

import AppointmentUpdateForm from '../components/AppointmentUpdateForm';
import DisplayVehicleName from '../components/DisplayVehicleName';

import { QUERY_APPOINTMENTS_BY_USER } from '../utils/queries';

import Auth from '../utils/auth';

// Displays list of appointments
const AppointmentList = () => {
    
    const id = localStorage.getItem('userId');

    // Query all appointments belonging to specified user
    const { loading, data } = useQuery(QUERY_APPOINTMENTS_BY_USER, {
        variables: { userId: id },
    });

    const appointments = data?.appointmentsByUser || [];

    if (appointments.length === 0) {
        return <h3>You do not have any scheduled appointments</h3>;
    }

    if (!Auth.loggedIn())
    {
        return <h3>Please login to view appointments</h3>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    // Display list of appointments
    return (
        <div>
            <h3>Here are your current test drive appointments:</h3>

            <hr />

            {appointments &&
                appointments.map((appointment) => (
                    <div key={appointment._id}>
                        <DisplayVehicleName
                            carId={appointment.carId}
                        />
                        <h5>Appointment Date: {appointment.appointmentDate}</h5>
                        <h5>Appointment Time: {appointment.appointmentTime}</h5>
                        <p>Comments: {appointment.comments}</p>
                        
                        <AppointmentUpdateForm
                            id={appointment._id}
                            date={appointment.appointmentDate}
                            time={appointment.appointmentTime}
                            comment={appointment.comments}
                        />
                        <hr />
                        <br />
                    </div>
                ))}


        </div>
    );
};

export default AppointmentList;