import React, { useState } from "react";
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false); // Toggle state for form visibility

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5003/api/auth/register', {
                name,
                email,
                password,
            });
            alert(response.data.message);
            setIsFormVisible(false); // Close form after successful sign-up
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div>
            {/* Header with Sign Up button */}
            <header className="header bg-white text-dark shadow-sm border border-secondary rounded">
                <div className="container py-3 d-flex justify-content-between">
                    <h1>MyApp</h1>
                    <button onClick={() => setIsFormVisible(!isFormVisible)} className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
            </header>

            {/* Conditional rendering for sign-up form */}
            {isFormVisible && (
                <div className="signup-form-container">
                    <form onSubmit={handleSubmit} className="p-3 border rounded">
                        <h2>Sign Up</h2>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-success">Sign Up</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default SignUp;
