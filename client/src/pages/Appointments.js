import React from 'react';

// import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import AppointmentUpdateForm from '../components/AppointmentUpdateForm';

// import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import { QUERY_APPOINTMENTS_BY_USER } from '../utils/queries';

// import Auth from '../utils/auth';

const AppointmentList = () => {
    // Need to query all appointments with userId
    const id = localStorage.getItem('userId');

    const { loading, data } = useQuery(QUERY_APPOINTMENTS_BY_USER, {
        variables: { userId: id },
    });

    const appointments = data?.appointmentsByUser || [];

    if (!appointments) {
        return <h3>You do not have any scheduled appointments</h3>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>Here are your current test drive appointments:</h3>

            <hr />

            {appointments &&
                appointments.map((appointment) => (
                    <div key={appointment._id}>
                        <h5>Appointment Date: {appointment.appointmentDate}</h5>
                        <h5>Appointment Time: {appointment.appointmentTime}</h5>
                        <p>Comments: {appointment.comments}</p>
                        <hr />
                        <AppointmentUpdateForm
                            id={appointment._id}
                            date={appointment.appointmentDate}
                            time={appointment.appointmentTime}
                            comment={appointment.comments}
                        />
                        <hr />
                    </div>
                ))}


        </div>
    );
};

export default AppointmentList;