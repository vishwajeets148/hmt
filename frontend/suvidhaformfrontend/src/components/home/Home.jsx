import { useState } from "react"
import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import axios from "axios"
const Home = () => {
  const baseurl = process.env.REACT_APP_BASEURL;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseurl}/contact/register`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        alert('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        }
        )
      } else {
        alert('Error: ' + response.data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };


  return (

    <>
      <div className="landing-page ">
        <div className="back">

          <div className="container">

            <nav className="navbar navbar-expand-lg  back">
              <div className="container-fluid">
                <Link to="#" className="navbar-brand">Suvidha Form</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a href="#home" a className="nav-link " aria-current="page" >Home</a>
                    </li>
                    <li className="nav-item">
                      <a href="#about" className="nav-link">About Us</a>
                    </li>
                    {/* <li className="nav-item">
                  <Link to="#Testemonials" className="nav-link">Testemonials</Link>
                </li> */}


                  </ul>
                  <li className="d-flex">
                    <Link to="/register" className="btn btn-outline-success reg-btn">Hospital Registration</Link>
                  </li>
                  <li className="d-flex m-1">
                    <Link to="/login" className="btn btn-outline-success reg-btn">Hospital Login</Link>
                  </li>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <section className="container" id="home">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <h1 className="home-heading">Online Form Management Portal</h1>
              <div className="home-para">
                <p> Welcome to  Suvidha Form portal, we are the provider of digital forms in diffrent Government facilities & consents , specialized in health care digitalization and consent management. </p>
              </div>

            </div>
            <div className="col-md-6">
              <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="assets/img/crousal1.png" class="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/crousal2.png" class="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src="assets/img/crousal3.png" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* <div className="main-img"> <img src="assets/img/hero.png" alt=""/></div> */}
            </div>

          </div>
        </section>
        <h1 className='text-center  bg-light' style={{ padding: '2rem' }}>
          About Us
        </h1>
        <section className="about container" id="about">
          <div className="row">
            {/* <hr /> */}
            <div className="col-sm-6">
              <div className="about-img">
                <img src="assets/img/about.png" alt="" />
              </div>
            </div>
            <div className="about-heading col-sm-6 align-self-center">

              <p className='home-para text-start'>Suvidha Form has been  developed by <b>Tecraki Technology Solutions & Private Limited </b></p>

              <p className='home-para text-start'>We excel in providing digital forms and consent management solutions, tailored to various government facilities and requirements.</p>
            </div>
          </div>

          {/* <div className="row  card-sec">
            <div className="col-md-4">

              <div className="card text-center">
                <img src="assets/img/const1.gif" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Consultation</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.</p>

                </div>
              </div>
            </div>
            <div className="col-md-4">

              <div className="card text-center">
                <img src="assets/img/injection.gif" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Phramacy</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.</p>

                </div>
              </div>
            </div>
            <div className="col-md-4">

              <div className="card text-center">
                <img src="assets/img/ambu.gif" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Emergency</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>


          </div> */}
        </section>
        <h1 className='text-center bg-light' style={{ padding: '2rem' }}>
          Our Mission
        </h1>
        <section className="mission container " id="mission">

          <div className="row">
            <div className="col-sm-6 mission align-self-center">
              < p className='home-para text-start'>
                We have a mission to digitalize forms (formality forms required for submission of a patient to a
                facility and other such requirements ).We are trying to make this process more streamlined,
                organized and easier for facilities like Nursing Home , Hospitals or other such clinics . </p>
            </div>
            <div className="col-sm-6">
              <div className="misson-img">
                <img src="assets/img/mission.svg" alt="" />
              </div>
            </div>
          </div>

        </section>



        {/* <section className="container" id="Testemonials">
          <div className="testimonials-clean">
            <div className="container">
              <div className="intro">
                <h2 className="text-center">Testimonials </h2>
                <hr />
                <p className="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo ligula.
                  Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
              </div>
              <div className="row people">
                <div className="col-md-6 col-lg-4 item">
                  <div className="box">
                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam
                      in tellus eu gravida. Aliquam varius finibus est.</p>
                  </div>
                  <div className="author"><img className="rounded-circle" src="assets/img/test.jpeg" />
                    <h5 className="name">Ben Johnson</h5>
                    <p className="title">CEO of Company Inc.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                  <div className="box">
                    <p className="description">Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum
                      justo suscipit id.</p>
                  </div>
                  <div className="author"><img className="rounded-circle" src="assets/img/test.jpeg" />
                    <h5 className="name">Carl Kent</h5>
                    <p className="title">Founder of Style Co.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                  <div className="box">
                    <p className="description">Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in,
                      vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
                  </div>
                  <div className="author"><img className="rounded-circle" src="assets/img/test.jpeg" />
                    <h5 className="name">Emily Clark</h5>
                    <p className="title">Owner of Creative Ltd.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <h1 className='text-center bg-light ' style={{ padding: '2rem' }}>
          Contact Us
        </h1>

        <section section class="mb-4 container contact " >

          <div class="row">
            <div class="col-md-6 text-center">
              <iframe className="border border-1 p-2 google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.32422530179!2d77.33165199331178!3d28.639887252642545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb9ddcb1429b%3A0xe900df59c30670e1!2sCloud%209%20Apartments%20Vaishali!5e0!3m2!1sen!2sin!4v1708421768204!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


            <div class="col-md-6 mb-md-0 mb-5 bg-body-tertiary  p-4 rounded-4">
              <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name" className="home-para">Your name</label>
                      <input type="text" id="name" name="name" required className="form-control" value={formData.name} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email" className="home-para">Your email</label>
                      <input type="text" id="email" name="email" required className="form-control" value={formData.email} onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" className="home-para">Subject</label>
                      <input type="text" id="subject" name="subject" required className="form-control" value={formData.subject} onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="message" className='home-para'>Your message</label>
                      <textarea id="message" name="message" rows="2" required className="form-control md-textarea" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                  </div>
                </div>
                <button className='btn btn-primary mt-3 home-para' type='submit'>Send</button>
              </form>

            </div>



          </div>

        </section >


        <section className="footer p-1 ">
          <div className="container ">
            <div className="row">
              <div className="col-sm-4 ">
                <h4>Quicks Links</h4>
                <ul className='text-decoration-none text-start p-0 m-0'>
                  <li className="p-0 text-decoration-none"><a className='text-decoration-none  text-secondary fw-semibold m-0' href='#home'>Home</a></li>
                  <li className="p-0 text-decoration-none"><a className='text-decoration-none  text-secondary fw-semibold m-0' href='#about'>About</a></li>
                  <li className="p-0 text-decoration-none"><a className='text-decoration-none  text-secondary fw-semibold m-0' href='#mission'>Mission</a></li>
                </ul>
              </div>


              <div className="col-sm-4">
                <h4>Socials Links</h4>
                <ul className='text-decoration-none text-start p-0 m-0'>
                  <li className=' text-start'><i class="fs-5 p-1  fab fa-linkedin-in"></i><Link className=" text-center align-self-center text-decoration-none  text-secondary fw-semibold" to="https://www.linkedin.com/company/tecraki-technology-solutions-pvt-ltd/">LinkedIn</Link> </li>
                  <li className=' text-start'><i class="fs-5 p-1  fab fa-facebook-square"></i><Link className=" text-center align-self-center text-decoration-none text-secondary fw-semibold" to="">Facebook</Link> </li>
                  {/* <li className=' text-start'><i class="fs-5 p-1  fab fa-twitter-square"></i><Link className=" text-center align-self-center text-decoration-none  text-secondary fw-semibold" to="">Twitter</Link> </li> */}
                </ul>
              </div>
              <div className="col-sm-4">
                <h4>Address</h4>
                <ul className='m-0 p-0 text-decoration-none'>
                  <li className=' text-start d-flex'><i class="fs-5 p-1  fas fa-map-marker-alt"></i><p className="  m-0 text-decoration-none text-secondary fw-semibold" >Office 421, Rishabh cloud 9 Apartments,Sector 1,Vaishali, Gaziabad, Uttar Pradesh 201019, IN</p> </li>
                  <li className=' text-start'><i class="fs-5 p-1  fas fa-phone"></i><Link className="  align-self-center text-decoration-none  text-secondary fw-semibold" to="tel">+91 1204941137</Link> </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div >
      <div className="copyright text-center m-0"> Copyright © <Link to="https://tecraki.io" className='text-decoration-none  text-secondary fw-semibold'>Tecraki Technology Solutions PVT. LTD.</Link></div>
    </>
  )
}
export default Home