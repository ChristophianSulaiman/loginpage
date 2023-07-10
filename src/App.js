
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';
// import RedirectPanel from './RedirectPanel';

import './App.css';
import gear from './gear.jpg';
import Untitled from './Untitled.png';
import testt from './testt.png';
import copas from './copas.png';
import threedots from './threedots.png';
import RedirectedPanel from './components/redirect';

function App() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    // Perform login logic here
  
    // Redirect to the panel
    setRedirect(true);
  };
  
  if (redirect) {
    return <redirect to="/redirected-panel" />;
  }
  


  return (
    <router>
      <div className="panel-container">
        <div className="purple-layer">

          <h1 className="text">partie with Me</h1>
          <div className="bottom-layer">
            <div className='pwv'>
              <p>Partie with Viewers + Chat Bot</p>
            </div>
            <div className='cop'>
              <img src={copas} alt="logo" className='logo-image' />
            </div>
            <div className='tdots'>
              <img src={threedots} alt="logo" className='logo-im' />
            </div>
          </div>
          <div className="submessage">
            <p>
              <span className="white-text">Type </span>
              <span className="green-text">!partie</span>
              <span className="white-text"> in chat to join the Queue</span>
            </p>
          </div>
          <div className="logo">
            <img src={testt} alt="logo" className="logo-image" />
          </div>
          <div className="setting">
            <img src={gear} alt="gear" className="gear-image" />
          </div>
          <div className="tooltip-container">
            <div
              className={`tooltip-icon ${showTooltip ? 'active' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="circle">
                <span className="icon">i</span>
              </div>
              <span className={`tooltip ${showTooltip ? 'visible' : ''}`}>
                This is a tooltip
              </span>
              <div className="sub-partie">
                <img src={testt} alt="logo" className="logo-imagee" />
                <h2>partie</h2>
              </div>
              <div className="welcome">
                <h3>Welcome Back!</h3>
                
              </div>
              <div className="username">
                  <p>Username</p>
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Enter username"
                  />
                </div>
                <div className="password">
                  <p>Password</p>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                  />
                </div>
                <div className="forgot-password">
                  <p onClick={() => console.log('Forgot password clicked!')}>
                    Forgot Password?
                  </p>
                </div>
                <div className="login-button">
                  <button onClick={handleLogin}>Login</button>
                </div>
                <div className="amazon-button">
                  <button>Login with Amazon</button>
                </div>
                
            </div>
          </div>
        </div>
        
      </div>
      {/* <Switch>
        <Route path="/redirected-panel" component={RedirectedPanel} />
      </Switch> */}
    </router>
  );
}

export default App;
