import React from 'react';
import ReactDOM from 'react-dom';
import LoginDashboard from './LoginDashboard';
import './App.css';  

const App = () => {
  return (
    <div className='app-container'>
      <h1 className='app-heading'>Main Application</h1>
      <div className='dashboard-container'>
      <LoginDashboard />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))
export default App;
