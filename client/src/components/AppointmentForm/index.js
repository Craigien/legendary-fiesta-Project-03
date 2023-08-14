import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_APPOINTMENT} from '../../utils/mutations';

const AppointmentForm = ({ carId }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [comments, setComments] = useState('');

    const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addAppointment({
                variables: { date, time, comments },
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
                <div class="mb-3">
                    <label for="dateInput" className="form-label">Please select desired date for test drive</label>
                    <input type="text" className="form-control" id="dateInput" value={date} onChange={(event) => setDate(event.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="timeInput" className="form-label">Please select desired time for test drive</label>
                    <input type="text" className="form-control" id="timeInput" value={time} onChange={(event) => setTime(event.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="commentsInput" className="form-label">Please leave any comments here</label>
                    <textarea type="text" className="form-control" id="commentsInput" value={comments} onChange={(event) => setComments(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )

}

export default AppointmentForm;