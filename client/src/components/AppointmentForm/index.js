import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_APPOINTMENT} from '../../utils/mutations';

const AppointmentForm = ({ carId }) => {
    const [appointmentDate, setDate] = useState('');
    const [appointmentTime, setTime] = useState('');
    const [comments, setComments] = useState('');

    const userId = "64db8ef1e57fa11bfc4b8ce1";
    const appointmentType = "Test-drive";

    const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addAppointment({
                variables: { carId, userId, appointmentType, appointmentDate, appointmentTime, comments },
            });

            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h4>Create an appointment for a test drive</h4>

            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    {/* <label for="dateInput" className="form-label">Please select desired date for test drive</label> */}
                    <input type="text" className="form-control" id="dateInput" placeholder="Please select desired date for test drive" value={appointmentDate} onChange={(event) => setDate(event.target.value)} />
                </div>
                <div className="mb-3">
                    {/* <label for="timeInput" className="form-label">Please select desired time for test drive</label> */}
                    <input type="text" className="form-control" id="timeInput" placeholder="Please select desired time for test drive" value={appointmentTime} onChange={(event) => setTime(event.target.value)} />
                </div>
                <div className="mb-3">
                    {/* <label for="commentsInput" className="form-label">Please leave any comments here</label> */}
                    <textarea type="text" className="form-control" id="commentsInput" placeholder="Please leave any comments here" value={comments} onChange={(event) => setComments(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                {error && (
                    <div>Something went wrong</div>
                )}
            </form>

        </div>
    );
};

export default AppointmentForm;