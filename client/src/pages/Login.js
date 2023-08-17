import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

// Allows user to login to the application
const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Login user with email and password variables
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token, data.login.user._id);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    // Display login form
    return (
        <div className="card">
            <h4 className="card-header bg-dark text-light p-2">Login</h4>
            <div className="card-body">
                {data ? (
                    <p>
                        Success! You may now head{' '}
                        <Link to="/">back to the homepage.</Link>
                    </p>
                ) : (
                    <form onSubmit={handleFormSubmit}>
                        <input
                            className="form-control mb-3"
                            placeholder="Enter Your email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mb-3"
                            placeholder="Enter Your Password"
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <button
                            className="btn btn-block btn-primary"
                            style={{ cursor: 'pointer' }}
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                )}

                {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;