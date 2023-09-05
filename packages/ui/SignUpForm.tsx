import React, { useState } from 'react';

export const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSignUp(username, email, password);
  };

  return (
    <div className="flex items-center justify-center p-6 rounded-md shadow-2xl max-w-md mx-auto bg-dark p-4 border">
      <div className="space-y-4">
        <h4 className="text-2xl font-semibold">Signup Form</h4>
        <input
          id="username"
          type="text"
          placeholder="Username"
          className="input w-full max-w-xs"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="input w-full max-w-xs"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="input w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary w-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
