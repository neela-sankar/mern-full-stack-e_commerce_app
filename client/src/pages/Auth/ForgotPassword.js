import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
  
    const navigate = useNavigate();
  
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/v1/auth/forgot-password", {
          email,
          newPassword,
          answer
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  return (
    <Layout title='Forgot Password - Gadget Galaxy'>
        <section className="vh-73">
 <div className="container-register h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-lg-12 col-xl-11">
        <div className="card-body p-md-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Reset Password</p>

            <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

            <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder='Email Address' required/>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-info fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" placeholder='Enter your school friend name' required/>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="form-control" placeholder='Password' required/>
                </div>
            </div>
 <div>
 
  <button type="submit" className="btn login-btn-primary">Reset</button>
  

</div>

</form>
            </div>
            <div className="col-md-9 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                <img src="https://pathwayport.com/saasland/images/reset_pass.png" className="img-fluid" alt="Sample image" />
            </div>

    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </Layout>
  )
}

export default ForgotPassword