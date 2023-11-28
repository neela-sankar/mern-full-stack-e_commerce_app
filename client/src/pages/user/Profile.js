import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import UserMenu from '../../components/layout/UserMenu'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
import axios from 'axios'

const Profile = () => {
    //context
    const [auth,setAuth] = useAuth()

    //state
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [answer, setAnswer] = useState('')

    //get user data
    useEffect(() => {
        const {email,name, phone,address} = auth.user
        setName(name)
        setPhone(phone)
        setEmail(email)
        setAddress(address)
    }, [auth?.user])

        //form function
        const handleSubmit = async (e) => {
            e.preventDefault()
            try{
                const {data} = await axios.put('/api/v1/auth/profile',{name,email,password,phone,address})
                if(data?.error){
                    toast.error(data?.error)
                }else{
                    setAuth({...auth, user: data?.updatedUser})
                    let ls = localStorage.getItem("auth")
                    ls = JSON.parse(ls)
                    ls.user = data.updatedUser
                    localStorage.setItem("auth", JSON.stringify(ls))
                    toast.success("Profile has been updated successfully")
                }
            }
            catch(error){
                console.log(error)
                toast.error('Something went wrong')
            }
        }
  return (
    <Layout title='Your Profile - Dashboard'>
        <div className="container-fluid p-3 m-3">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu />
                </div>
                <div className="col-md-9">
                <section className="vh-73">
 <div className="container-register h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-lg-12 col-xl-11">
        <div className="card-body p-md-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">User Profile</p>

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
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
                    className="form-control" placeholder='Email Address' required disabled/>
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
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder='Address'/>
                </div>
            </div>
            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button type="submit" className="btn btn-primary">Update</button>
            </div>
            </form>
            </div>

    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Profile