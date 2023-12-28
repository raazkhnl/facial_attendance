import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Call login API or perform other login logic here
      setError(null);
      setRedirectToDashboard(true);
    } else {
      setError('Please enter both email and password');
    }
  }
  return (
    <div className="container-fluid col-lg-5 col-md-6 col-sm-8 mt-5 mb-5  map-frame rounded p-3" style={{ backgroundColor:'#63c5da'}}>
       <form onSubmit={handleSubmit}>
        <h3 style={{textAlign: 'center'}}>Login</h3><hr />
  <div className="form-group ">
    <label >Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email" />
    <small  className="form-text text-muted">Please enter your pcampus email.</small>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input"  />
    <label className="form-check-label" >Remember me</label>
  </div>
  <center>  <button type="submit" className="btn" style={{ backgroundColor: 'lightblue', alignSelf:'center', margin:'8px'}} >Submit</button></center>
  <center>  <a href="#" style={{fontSize:'20px', color:'black'}}>Forgot Password?</a>
</center>
</form>
<center>{error && <div className="error">{error}</div>}
      {redirectToDashboard && <Navigate to="/fas/dashboard" replace />}</center>

    </div>
  )
}

export default Login