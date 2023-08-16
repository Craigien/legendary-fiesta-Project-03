import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

// import { QUERY_APPOINTMENTS_BY_USER } from '../../utils/queries';
import { UPDATE_APPOINTMENT } from '../../utils/mutations';
import { DELETE_APPOINTMENT } from '../../utils/mutations';



const UpdateOrDeleteAppointmentForm = ({ id, date, time, comment }) => {
    const [appointmentDate, setDate] = useState(date);
    const [appointmentTime, setTime] = useState(time);
    const [comments, setComments] = useState(comment);

    const appointmentId = id;

    const [updateAppointment, { error }] = useMutation(UPDATE_APPOINTMENT);

    const [deleteAppointment, { error2 }] = useMutation(DELETE_APPOINTMENT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await updateAppointment({
                // Need to add comments to available fields to update
                variables: { appointmentId, appointmentDate, appointmentTime, comments },
            });

            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };
    
    const handleDeleteAppointment = async (event) => {
        event.preventDefault();

        try {
            const { data } = deleteAppointment({
                variables: { appointmentId },
            });

            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h5>Update or delete this appointment</h5>

            <button className="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm">
                Update or Delete
            </button>

            <form className="collapse" id="collapseForm" onSubmit={handleFormSubmit}>
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
                <button onClick={handleDeleteAppointment} className="btn btn-secondary">Delete Appointment</button>
                {(error || error2) && (
                    <div>Something went wrong</div>
                )}
            </form>
            
        </div>
    );
};

export default UpdateOrDeleteAppointmentForm;