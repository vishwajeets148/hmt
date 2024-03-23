
import React, { useState, useEffect } from 'react';
import "./Auth.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { validateName, validateSecPhone, validatePassword3, validatePassword2, validatePassword1, validateState, validateCity, validateAddress, validateEmail, validatePassword, validatePasswordMatch, validatePhone, validateWeb, validatePincode, validateCnfPassword, validateLogo } from "../../Validation.js";
const Hregister = () => {
    const baseurl = process.env.REACT_APP_BASEURL;
    const [errors, setErrors] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        logo: null,
        state_id: "",
        city_id: "",
        pincode: "",
        phone_primary: "",
        phone_secondary: "",
        website: "",
        address: "",
    });

    // this is the function of otp verification ====================================================================
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']); // Array to store OTP digits
    const [verificationStatus, setVerificationStatus] = useState(false);
    const [errorverificationStatus, setErrorVerificationStatus] = useState(null);
    const [isMobileVerified, setIsMobileVerified] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [otpMes, setOtpMes] = useState(" ")
    const [otpPhone , setPhoneNumber] = useState(" ");

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const verify = async () => {
        handleModalOpen();

        try {
     
     
            const response = await axios.post(`${baseurl}/otp/sendOtp`,{phone_number : formValue.phone_primary});
            if (response.data.success === true) {
                console.log("otp send" + response.data);
                setOtpMes(" OTP send successfully to " + otpPhone);
            }
        } catch (error) {
            setOtpMes("Error While Sending OTP");

        }

    };

    const handleOtpChange = (e, index) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = e.target.value;
        setOtp(updatedOtp);
        // console.log(otp)
    };
    const verifyOTP = async () => {
        try {
            const otpValue = otp.join('');
            const response = await axios.post(`${baseurl}/otp/verifyOtp`, {  phone_number: formValue.phone_primary , generated_otp : otpValue });
            console.log(otpValue);
            if (response.data.success === true) {
                setVerificationStatus(true);
                setIsMobileVerified(true);
                setDisabled(true);

            } else {
                setErrorVerificationStatus(response.data.message);
                setVerificationStatus(true);
                setDisabled(true);
                setIsMobileVerified(true);
            }
        } catch (error) {
            setVerificationStatus(true);
            setIsMobileVerified(true);
            setErrorVerificationStatus('Error verifying OTP. Please try again');
        }
        console.log(disabled)
    };
    //========================== above code was  otp verification code =========================================================

    // error handling    =========================================================
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value });
        // If the changed input is the state select, fetch cities for the selected state
        if (name === 'state_id') {
            fetchCities(value);
        }

        const newErrors = { ...errors };
        switch (name) {
            case 'name':
                newErrors[name] = validateName(value, true, true) ? null : "Hospital Name is required";
                break;
            case 'email':
                newErrors[name] = validateEmail(value, true, true) ? null : "Please Enter Correct Email Address";
                break;
            // case 'password':
            //     newErrors[name] = validatePassword(value, true, true) ? null : "Password is required and must contain a special character";
            //     break;
            case 'password':
                newErrors[name] = validatePassword(value);
                break;

            case 'password_confirmation':
                newErrors[name] = validatePassword3(value);
                break;

            // case 'password_confirmation':
            //     newErrors[name] = validateCnfPassword(value, true, true) ? null : "Password is required and must contain a special character";
            //     break;
            case 'state_id':
                newErrors[name] = validateState(value, true, true) ? null : "Please Select State";
                break;
            case 'city_id':
                newErrors[name] = validateCity(value, true, true) ? null : "Please Select City";
                break;
            case 'address':
                newErrors[name] = validateAddress(value, true, true) ? null : "Please Enter Address";
                break;
            // case 'phone_primary':
            //     newErrors[name] = validatePhone(value, true, true) ? null : "Please Enter 10 Digit Number";
            //     break;
            case 'phone_primary':
                newErrors[name] = validatePhone(value);
                break;
            case 'pincode':
                newErrors[name] = validatePincode(value, true, true) ? null : "Please Enter 6 Digit Number";
                break;
            default:
                break;
        }
        setErrors(newErrors);

    }

    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     setFormValue.logo=file;
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setSelectedImage(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file)); // Set image preview
        setFormValue({ ...formValue, logo: file }); // Update logo field in formValue

        const error = validateLogo(file);
        setErrors({ ...errors, logo: error });
    };


    useEffect(() => {
        fetchStates();
    }, []);


    const fetchStates = async () => {
        try {
            const response = await axios.get(`${baseurl}/states/`);
            setStates(response.data);
            // Assuming the API response contains an array of states
        } catch (error) {
            console.error('Error fetching states:', error);
        }
    };


    const fetchCities = async (stateId) => {
        try {
            const response = await axios.get(`${baseurl}/city/getcitiesByState/${stateId}`);
            setCities(response.data);
            // Assuming the API response contains an array of cities for the given stateId
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (isMobileVerified==false) {
            newErrors.phone_primary= "Mobile number is not verified";
        }

        if (!validateName(formValue.name, true, true)) {
            newErrors.name = "Hospital Name is required";
        }

        const logoError = validateLogo(formValue.logo);
        if (logoError) {
            newErrors.logo = logoError;
        }

        if (!validateEmail(formValue.email, true, true)) {
            newErrors.email = "Email is required";
        }
        if (!validatePassword1(formValue.password, true, true)) {
            newErrors.password = "Password must be at least 8 characters with one special character";
        }

        if (!validatePassword1(formValue.password_confirmation, true, true)) {
            newErrors.passwordConfirm = "Password must be at least 8 characters with one special character";
        }

        if (!validateAddress(formValue.address, true, true)) {
            newErrors.address = "Address is required";
        }

        if (!validateCity(formValue.city_id, true, true)) {
            newErrors.city = "Please Select city";
        }

        if (!validateState(formValue.state_id, true, true)) {
            newErrors.state = "Please Select State";
        }
        // if (!validatePhone(formValue.phone_primary, true, true)) {
        //     newErrors.phone1 = "Phone is required";
        // }

        // if (!validateSecPhone(formValue.phone_secondary, true, true)) {
        //     newErrors.phone2 = "Phone is required";
        // }

        if (!validatePincode(formValue.pincode, true, true)) {
            newErrors.pincode = "Pincode  is required and must be 6 digit ";
        }
        if (validateWeb(formValue.website, true, true)) {
            newErrors.website = "Website is required";
        }
        setErrors(newErrors);

        // Update errors state

        //         if (Object.keys(newErrors).length === 0) {
        //             console.log(formValue); // Print form data if no errors
        //             try {
        //                 const response = await axios.post(`${baseurl}/hospital/addHospital`, formValue)
        //                 alert("Registration Success");

        //                   navigate("/login")
        //             }
        //             catch (error) {
        //                 alert(error.message);
        //                 console.error('Registration failed:', error);
        //             }
        //         }



        if (Object.keys(newErrors).length === 0) {
            const formData = new FormData();
            formData.append('name', formValue.name);
            formData.append('email', formValue.email);
            formData.append('password', formValue.password);
            formData.append('password_confirmation', formValue.password_confirmation);
            formData.append('state_id', formValue.state_id);
            formData.append('city_id', formValue.city_id);
            formData.append('pincode', formValue.pincode);
            formData.append('phone_primary', formValue.phone_primary);
            formData.append('phone_secondary', formValue.phone_secondary);
            formData.append('website', formValue.website);
            formData.append('address', formValue.address);
            // Check if selectedImage exists before appending it
            // formData.append('logo', formValue.logo);
            if (formValue.logo) {
                formData.append('logo', formValue.logo);
            }
            try {
                const response = await axios.post(`${baseurl}/hospital/addHospital`, formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                alert("Registration Success");
                navigate("/login");
                // console.log(response.data);
            } catch (error) {
                alert("Registration Failed", error);
                console.error('Registration failed:', error);
            }
        } else {
            setErrors(newErrors);
        }

    };
    return (
        <div className="body1">
            <div className="login-root">
                <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
                    <div className="loginbackground box-background--white padding-top--64">
                        <div className="loginbackground-gridContainer">
                            <div className="box-root flex-flex" style={{ gridArea: 'top / start / 8 / end' }}>
                                <div className="box-root" style={{
                                    backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)',
                                    flexGrow: 1
                                }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
                                <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
                                <div className="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
                                <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
                                <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
                                <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
                                <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
                                <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
                            </div>
                            <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
                                <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
                        <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                            <h1 className="heading-page">
                                <Link to="#" rel="dofollow">Hospital Registration</Link>
                            </h1>
                        </div>
                        <div className="formbg-outer">
                            <div className="formbg">
                                <div className="formbg-inner padding-horizontal--48 col-12">
                                    <form className="row g-3" onSubmit={handleRegister}>
                                        <div className="col-md-6 field padding-bottom--24">
                                            <label className="form-label">Hospital Name</label>
                                            <input type="text" className="form-control" placeholder="Hospital name" name="name" aria-label="Hospital name" onChange={handleChange} />
                                            {<span className='small'>{errors.name}</span> && <span className='text text-danger small'>{errors.name}</span>}
                                        </div>
                                        <div className="col-md-4 field padding-bottom--24">
                                            <label htmlFor="hospitallogo" className="form-label">Hospital Logo</label>
                                            <input type="file" id="logo" className="form-control" name='logo' onChange={handleImageChange} />
                                            {<span className='small'>{errors.logo}</span> && <span className='text text-danger small'>{errors.logo}</span>}
                                        </div>
                                        <div className="col-md-2 field padding-bottom--24">
                                            {selectedImage && <img src={selectedImage} width="100px" height="100px" alt="Hospital Logo" />}
                                        </div>
                                        <div className="col-md-6 field padding-bottom--24">
                                            <label className="form-label">Hospital Email</label>
                                            <input type="email" className="form-control" id="" placeholder="example@email.com"
                                                name="email" onChange={handleChange} />
                                            {<span className='small'>{errors.email}</span> && <span className='text text-danger small'>{errors.email}</span>}
                                        </div>

                                        <div className="col-md-4 field padding-bottom--24">
                                            <label className="form-label">Hospital Primary Phone Number</label>
                                            <input type="tel" className="form-control" disabled={disabled} id="" name="phone_primary"
                                                placeholder="phone_primary" onChange={handleChange} />
                                            {/* <input type="tel" className="form-control" id="" name="phone_primary"
                                                placeholder="phone_primary" onChange={handleChange} /> */}
                                            {<span className='small'>{errors.phone1}</span> && <span className='text text-danger small'>{errors.phone1}</span>}
                                            {<span className='small'>{errors.phone_primary}</span> && <span className='text text-danger small'>{errors.phone_primary}</span>}
                                        </div>

                                        <div className="col-md-2 field padding-bottom--24">
                                            <label htmlFor="" className="form-lable">.</label>


                                            {isMobileVerified ? (
                                                <span className="mainHeading text-success d-flex">Verified &#10004;</span>
                                            ) :
                                                <>
                                                    <button type="button" className='btn btn-primary form-control' onClick={verify}>Verify OTP</button>
                                                </>}
                                            {/* <button type="button" className='btn btn-primary form-control' onClick={verify}>Verify</button> */}

                                            {isModalOpen && (
                                                <div className="modal" style={modalStyle}>
                                                    <div className="modal-content" style={modalContentStyle}>
                                                        <span className='text text-center'>{otpMes}</span>
                                                        <span className=" small close btn-close" onClick={handleModalClose}></span>

                                                        <div className="otp-Form">
                                                            {verificationStatus ? (
                                                                <>
                                                                    <span className="mainHeading text-success">OTP Verified <span className="text-success text-center">&#10004;</span></span>
                                                                    <p className="resendNote fs-2"><button className="resendBtn btn btn-outline-success" onClick={handleModalClose}>Close</button></p>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <span className="mainHeading">Enter OTP</span>
                                                                    <p className="otpSubheading">We have sent a verification code to your mobile number</p>
                                                                    <div className="inputContainer">
                                                                        <input required maxLength="1" type="text" className="otp-input" value={otp[0]} onChange={(e) => handleOtpChange(e, 0)} />
                                                                        <input required maxLength="1" type="text" className="otp-input" value={otp[1]} onChange={(e) => handleOtpChange(e, 1)} />
                                                                        <input required maxLength="1" type="text" className="otp-input" value={otp[2]} onChange={(e) => handleOtpChange(e, 2)} />
                                                                        <input required maxLength="1" type="text" className="otp-input" value={otp[3]} onChange={(e) => handleOtpChange(e, 3)} />
                                                                    </div>
                                                                    <button className="verifyButton" type="submit" onClick={verifyOTP}>Verify</button>
                                                                    <p className="resendNote">Didn't receive the code? <button className="resendBtn" onClick={verify}>Resend Code</button></p>
                                                                    <span className='text text-danger small'> {errorverificationStatus}</span>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6 field padding-bottom--24">
                                            <label className="form-label">Hospital Secondray Phone Number</label>
                                            <input type="tel" className="form-control" id="" name="phone_secondary"
                                                placeholder="phone_secondary" onChange={handleChange} />
                                            {/* {<span className='small'>{errors.phone2}</span> && <span className='text text-danger small'>{errors.phone2}</span>} */}
                                        </div>

                                        <div className="col-md-6 field padding-bottom--24">
                                            <label className="form-label">Hospital Website</label>
                                            <input className="form-control" id="" placeholder="www.hospi123.com"
                                                name="website" onChange={handleChange} />
                                            {<span className='small'>{errors.website}</span> && <span className='text text-danger small'>{errors.website}</span>}
                                        </div>

                                        <div className="col-md-12 field padding-bottom--24">
                                            <label htmlFor="inputAddress" className="form-label">Hospital Address</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
                                                name="address" onChange={handleChange} />
                                            {<span className='small'>{errors.address}</span> && <span className='text text-danger small'>{errors.address}</span>}
                                        </div>

                                        <div className="col-md-4 field padding-bottom--24">
                                            <label htmlFor="inputState" className="form-label">State</label>
                                            <select name="state_id" value={formValue.state_id} className='form-control' onChange={handleChange}>
                                                <option>Please Select State</option>
                                                {states.map((state) => (
                                                    <option key={state.id} value={state.id}>{state.state_name}</option>
                                                ))}
                                            </select>
                                            {<span className='small'>{errors.state}</span> && <span className='text text-danger small'>{errors.state}</span>}
                                        </div>

                                        <div className="col-md-5 field padding-bottom--24">
                                            <label htmlFor="inputCity" className="form-label">City</label>


                                            <select name="city_id" value={formValue.city_id} className='form-control' onChange={handleChange}>
                                                <option > Please Select City </option>
                                                {
                                                    cities.map((city) => (

                                                        <option key={city.id} value={city.id}>{city.city_name}</option>
                                                    ))
                                                }
                                            </select>
                                            {<span className='small'>{errors.city}</span> && <span className='text text-danger small'>{errors.city}</span>}

                                        </div>

                                        <div className="col-md-3 field padding-bottom--24">
                                            <label htmlFor="inputZip" className="form-label">Pincode</label>
                                            <input type="text" className="form-control" id="inputZip" name="pincode" onChange={handleChange} />
                                            {<span className='small'>{errors.pincode}</span> && <span className='text text-danger small'>{errors.pincode}</span>}
                                        </div>
                                        <div className="col-md-6 field padding-bottom--24">
                                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="inputPassword4" name="password"
                                                placeholder="password" onChange={handleChange} />
                                            {<span className='small'>{errors.password}</span> && <span className='text text-danger small'>{errors.password}</span>}
                                            <div className="error">
                                                Your password must
                                                <ul>
                                                    <li>Include an UPPER and lowercase letter</li>
                                                    <li>Include a number</li>
                                                    <li>Include one or more of these special characters: .@$!%*#?&gt;&lt;/)(^-_ •</li>
                                                    <li>Password must Contain 8 character </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6 field padding-bottom--24">
                                            <label htmlFor="confirmPassword" className="form-label">                                                       Confirm Password</label>
                                            <input type="password" className="form-control" id="inputPassword4"
                                                name="password_confirmation" placeholder="confirmPassword" onChange={handleChange} />
                                            {<span className='small error'>{errors.passwordConfirm}</span> && <span className='text text-danger small error'>{errors.passwordConfirm}</span>}
                                        </div>
                                        <div className="col-6 field padding-bottom--24">
                                            <button type="submit" className="signup-button btn btn-primary">
                                                Register
                                            </button>
                                        </div>
                                        <p>
                                            Already have a account
                                            <Link to="/login"> Login Here </Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                            <div className="footer-link padding-top--24">
                                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                    <span><Link target='_blank' to="https://tecraki.io">© Tecraki Technology Solutions </Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


        </div >
    );
}
const modalStyle = {
    display: 'block', /* Ensure the modal is visible */
    position: 'fixed',
    zIndex: '1',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)'
};

const modalContentStyle = {
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '30%'
};
export default Hregister;
