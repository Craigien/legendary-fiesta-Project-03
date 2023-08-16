import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_APPOINTMENT } from '../../utils/mutations';

const AppointmentForm = ({ carId }) => {
    const [appointmentDate, setDate] = useState('');
    const [appointmentTime, setTime] = useState('');
    const [comments, setComments] = useState('');

    const isLoggedIn = localStorage.getItem('id_token');
    const userId = localStorage.getItem('userId');

    const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addAppointment({
                variables: { carId, userId, appointmentDate, appointmentTime, comments },
            });

            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    if (!isLoggedIn) {
        return <h4>Please login to create an appointment for a test drive</h4>;
    }

    return (
        <div>
            {isLoggedIn && (
                <h4>Create an appointment for a test drive</h4>
            )}

            {isLoggedIn && (
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="dateInput" className="form-label">Please select desired date for test drive</label>
                        <input type="date" className="form-control" id="dateInput" value={appointmentDate} onChange={(event) => setDate(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="timeInput" className="form-label">Please select desired time for test drive</label>
                        <input type="time" className="form-control" id="timeInput" min="9:00" max="18:00" value={appointmentTime} onChange={(event) => setTime(event.target.value)} />
                        <small>Operating hours from 9:00 AM to 5:00 PM</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="commentsInput" className="form-label">Please leave any comments here</label>
                        <textarea type="text" className="form-control" id="commentsInput" placeholder="Please leave any comments here" value={comments} onChange={(event) => setComments(event.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {error && (
                        <div>Something went wrong</div>
                    )}
                </form>
            )}
        </div>
    );
};

export default AppointmentForm;