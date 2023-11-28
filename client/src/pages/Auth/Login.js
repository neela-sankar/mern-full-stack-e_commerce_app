import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import {NavLink, useLocation, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '../../context/auth'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation()

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
           <Layout title='Register - Gadget Galaxy'>
<section className="vh-73">
 <div className="container-register h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-lg-12 col-xl-11">
        <div className="card-body p-md-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>

            <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

            <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder='Email Address' required/>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder='Password' required/>
                </div>
            </div>
 <div>
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      
      <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="form2Example34" defaultChecked />
        <label className="form-check-label" htmlFor="form2Example34"> Remember me </label>
      </div>
    </div>
    <div className="col" onClick={() => {navigate('/forgot-password')}}>
      <a href="#">Forgot password?</a>
    </div>
  </div>
 
  <button type="submit" className="btn login-btn-primary">Log in</button>
  
  <div className="text-center">
    <p>Not a member? <NavLink to='/register' href="#" >Register</NavLink></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-facebook-f" />
    </button>
    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-google" />
    </button>
    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-twitter" />
    </button>
    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-github" />
    </button>
  </div>
</div>

            </form>
            </div>
            <div className="col-md-9 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
            </div>

    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </Layout>
    </div>
  )
}

export default Login