import React from 'react'
import Layout from '../components/layout/Layout'
import about from './assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg'

const About = () => {
  return (
    <Layout title='About Us - Gadget Galaxy'>
        <section className="about-us py-5 " id="about-us">
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6">
        <h1 className="text">Welcome!</h1>
        <p>Welcome to <b>Gadget Galaxy</b>, where cutting-edge technology meets unbeatable deals! We're not just an e-commerce platform; we're your gateway to the latest gadgets that elevate your lifestyle.</p>
        <h2>Our Mission</h2>
        <hr />
        <p>At Gadget Galaxy, our mission is to bring innovation to your fingertips. We believe that everyone deserves access to the latest and greatest in technology, and we're here to make that happen. We're not just selling gadgets; we're delivering experiences that make your everyday life extraordinary.</p>
        <h2>Who We Are</h2>
        <hr />
        <p>Founded 2000, Gadget Galaxy is a team of tech enthusiasts who are passionate about making the latest gadgets accessible to everyone. We understand the excitement of unboxing a new device and the joy it brings when technology seamlessly integrates into your life. That's why we curate a collection of the hottest gadgets, ensuring you stay ahead in the fast-paced world of technology.</p>
        <button type="button" className="btn btn-success">Let's Know More</button>
      </div>
      <div className="col-md-6">
        <img src={about} alt />
      </div>
    </div>
  </div>
</section>

    </Layout>
  )
}

Layout.defaultProps = {
  title: "Gadget Galaxy - Show Now",
  description: "E-Commerce Website",
  keywords: "mobiles,laptops,gadgets,watches,computers,electronics",
  author:"Neelavathi"
}

export default About