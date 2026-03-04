import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    loginEmail: '',
    loginPassword: ''
  });

  const [focusedFields, setFocusedFields] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setFocusedFields(prev => ({ ...prev, [name]: { focused: true, hasValue: !!e.target.value } }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFocusedFields(prev => ({ ...prev, [name]: { focused: false, hasValue: !!value } }));
  };

  // Logic remains for potential future use or consistency, though labels are removed
  const getLabelClass = (name) => {
    const state = focusedFields[name];
    if (!state) return "";
    let classes = "";
    if (state?.focused || state?.hasValue) classes += " active";
    if (state?.focused) classes += " highlight";
    return classes;
  };

  return (
    <div className="login-wrapper">
    
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600');
        
        .login-wrapper {
          background: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') no-repeat center center fixed;
          background-size: cover;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Titillium Web', sans-serif;
          padding: 20px;
        }

        .form {
          background: rgba(19, 35, 47, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 40px;
          max-width: 600px;
          width: 100%;
          border-radius: 8px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tab-group {
          list-style: none;
          padding: 0;
          margin: 0 0 40px 0;
          display: flex;
        }
        
        .tab-group li {
          flex: 1;
        }

        .tab-group li a {
          display: block;
          text-decoration: none;
          padding: 15px;
          background: rgba(160, 179, 176, 0.15);
          color: #a0b3b0;
          font-size: 20px;
          text-align: center;
          cursor: pointer;
          transition: .5s ease;
        }

        .tab-group li a:hover {
          background: #179b77;
          color: #ffffff;
        }

        .tab-group .active a {
          background: #1ab188;
          color: #ffffff;
        }

        h1 {
          text-align: center;
          color: #ffffff;
          font-weight: 300;
          margin: 0 0 40px;
        }

        .field-wrap {
          position: relative;
          margin-bottom: 40px;
        }

        input {
          font-size: 22px;
          display: block;
          width: 100%;
          padding: 12px;
          
          border: 1px solid #a0b3b0;
          color: #ffffff;
          border-radius: 0;
          transition: border-color .25s ease;
        }

        input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        input:focus {
          outline: 0;
          border-color: #1ab188;
       
        }

        .top-row {
          display: flex;
          gap: 4%;
        }

        .top-row > div {
          flex: 1;
        }

        .button {
          border: 0;
          outline: none;
          padding: 15px 0;
          font-size: 2rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: .1em;
          background: #1ab188;
          color: #ffffff;
          transition: all .5s ease;
          width: 100%;
          cursor: pointer;
      
        }

        .button:hover {
          background: #179b77;
          transform: translateY(-1px);
        }

        .forgot {
          margin-top: -20px;
          text-align: right;
          margin-bottom: 30px;
        }

        .forgot a {
          color: #1ab188;
          text-decoration: none;
          font-size: 14px;
        }
      `}</style>

      <div className="form">
      <Link to={"/"} className='text-white'>Back</Link>
        <ul className="tab-group">
          <li className={activeTab === 'signup' ? 'active' : ''}>
            <a onClick={() => setActiveTab('signup')}>Sign Up</a>
          </li>
          <li className={activeTab === 'login' ? 'active' : ''}>
            <a onClick={() => setActiveTab('login')}>Log In</a>
          </li>
        </ul>

        <div className="tab-content">
          {activeTab === 'signup' ? (
            <div id="signup">
              <h1>Sign Up for Free</h1>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="top-row">
                  <div className="field-wrap">
                    <input name="firstName" type="text" required placeholder="First Name *" value={formState.firstName} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                  <div className="field-wrap">
                    <input name="lastName" type="text" required placeholder="Last Name *" value={formState.lastName} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                </div>

                <div className="field-wrap">
                  <input name="email" type="email" required placeholder="Email Address *" value={formState.email} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                <div className="field-wrap">
                  <input name="password" type="password" required placeholder="Set A Password *" value={formState.password} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                <button type="submit" className="button">Get Started</button>
              </form>
            </div>
          ) : (
            <div id="login">
              <h1>Welcome Back!</h1>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="field-wrap">
                  <input name="loginEmail" type="email" required placeholder="Email Address *" value={formState.loginEmail} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                <div className="field-wrap">
                  <input name="loginPassword" type="password" required placeholder="Password *" value={formState.loginPassword} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                <p className="forgot"><a href="#">Forgot Password?</a></p>
                <button type="submit" className="button">Log In</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};