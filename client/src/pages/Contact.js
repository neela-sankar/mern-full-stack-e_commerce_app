import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import contact from './assets/website-content-sections.png'

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message, phone } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
      phone: phone.value,
    }
    console.log(conFom)
  }
  return (
    <Layout title='Contact Us - Gadget Galaxy'>
       <div className="container">
          <div className="map">
            <img src={contact} alt="" />
          </div>
          <div className="contact-form">
            <h1 className="title">Get in touch.</h1>
            <h2 className="subtitle">Chat with us</h2>
            <p className="subtitle">If you'd prefer to chat in real time with our support team, we're online 24x7.</p>
            <form onSubmit={onSubmit}>
              <input type="text" id="name" placeholder="Name" />
              <input type="email" id="email" placeholder="Email address" />
              <input type="tel" id="phone" placeholder="Phone number" />
              <textarea name="text" id="message" rows={8} placeholder="Your message" defaultValue={""} />
              <button className="btn-send" type="submit">{formStatus}</button>
            </form>
          </div>
        </div>
    </Layout>
  )
}

export default Contact