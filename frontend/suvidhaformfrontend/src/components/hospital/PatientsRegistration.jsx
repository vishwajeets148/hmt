import React from 'react'
import "./Hospital.css"
import DashboardNav from "./DashboardNav";
const PatientsRegistration = () => {
  return (
    <>
    <DashboardNav></DashboardNav>
    
    <section class="get-in-touch">
    <h1 class="title">Patients Registration Form</h1>
    <form class="contact-form row">
        <div class="form-field col-lg-3">
            <input id="name" className="input-text js-input" name="firstname" required />
            <label className="label" for="name"> First Name</label>
        </div>
        <div className="form-field col-lg-3">
            <input id="name" className="input-text js-input" name="lastname" required />
            <label className="label" for="name">Last Name</label>
        </div>
        <div className="form-field col-lg-6">
            <input id="email" className="input-text js-input" type="email" name="email" required />
            <label className="label" for="email">E-mail</label>
        </div>
        <div className="form-field col-lg-3">
            <input id="company" className="input-text js-input" name="age" required />
            <label className="label" for="company">Age</label>
        </div>
        <div className="form-field col-lg-3">
            <select id="company" className="input-text js-input" name="gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">others</option>
            </select>
            <label className="label" for="company">Gender</label>
        </div>
        <div className="form-field col-lg-6">
            <input id="phone" className="input-text js-input" name="phone" required />
            <label className="label" for="phone">Contact Number</label>
        </div>
        <div className="form-field col-lg-8">
            <input id="message" className="input-text js-input" name="address" required />
            <label className="label" for="message">Address</label>
        </div>
        <div className="form-field col-lg-4">
            <input id="message" className="input-text js-input" name="zip" required />
            <label className="label" for="message">Zip</label>
        </div>
        <div className="form-field col-lg-4">
            <input id="message" className="input-text js-input" name="city" required />
            <label className="label" for="message">City </label>
        </div>
        <div className="form-field col-lg-4">
            <select id="message" className="input-text js-input" name="state" required>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                </option>
                <option>Others</option>
            </select>
            <label className="label" for="message">State</label>

        </div>
        <div className="form-field col-lg-4">
            <select id="message" className="input-text js-input" name="country" required>
                <option value="Indian">Indian</option>
                <option value="Others Conntry ">Others</option>
            </select>
            <label className="label" for="message">Country</label>

        </div>
        <div className="form-field col-lg-12">
            <input className="submit-btn" type="submit" value="Submit" />
        </div>
    </form>
</section>
  </>
  )
}

export default PatientsRegistration
