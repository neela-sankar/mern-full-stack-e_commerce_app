import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'

const Register = () => {
    
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [answer, setAnswer] = useState('')
    const navigate = useNavigate()

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post('/api/v1/auth/register',{name,email,password,phone,address,answer})
            if(res && res.data.success){
                toast.success(res.data.message)
                navigate('/login')
            }else{
                toast.error(res.data.message)
            }
        }
        catch(error){
            console.log(error)
            toast.error('Something went wrong')
        }
    }

  return (
    <Layout title='Register - Gadget Galaxy'>
<section className="vh-73">
 <div className="container-register h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-lg-12 col-xl-11">
        <div className="card-body p-md-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

            <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
            <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder='Name' required/>
                </div>
            </div>
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
            <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder='Phone Number' required/>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-address-card fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder='Address' required/>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" placeholder='Enter your school friend name' required/>
                </div>
            </div>
            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button type="submit" className="btn btn-primary">Register</button>
            </div>
            <div className="text-center">
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
            </form>
            </div>
            <div className="col-md-9 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg" className="img-fluid" alt="Sample image" />
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

export default Register