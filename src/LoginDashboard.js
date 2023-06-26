import React, { useState } from 'react';

const LoginDashboard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUser, setIsUser] = useState(false);

 
  const predefinedEmail = 'admin@gmail.com';
  const predefinedPassword = 'password123';

  const handleLogin = () => {
    if (email === predefinedEmail && password === predefinedPassword) {
        setIsUser(false);
      setIsLoggedIn(true);
    } else {
    setIsUser(true);
    setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome, {isUser && 'user'} {isUser ? email : predefinedEmail}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }else{
      return (
        <div>
          <h2>Login Dashboard</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      );
  }
};

export default LoginDashboard;
