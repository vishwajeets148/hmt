import React from 'react'

const PatientRegister = () => {
  return (
    <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="registrationModalLabel">
                  Patient Registration Form
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body ">
                <form className="bg-body-tertiary p-2 rounded-2 ">
                  <div className="row">
                    <div className="mb-3 col-8">
                      <label for="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="mb-3 col-4">
                      <label for="age" className="form-label">
                        Age
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="age"
                        placeholder="Enter your age"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 col-3 gender">
                    <label className="form-label">Gender</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        required
                      />
                      <label className="form-check-label" for="male">
                        Male
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                      />
                      <label className="form-check-label" for="female">
                        Female
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3 col-6">
                      <label for="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <label for="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Enter your address"
                      required
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-5">
                      <label for="city" className="form-label">
                        City
                      </label>
                      <select className="form-select" id="city" required>
                        <option selected disabled value="">
                          Choose...
                        </option>
                        <option value="city1">City 1</option>
                        <option value="city2">City 2</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label for="state" className="form-label">
                        State
                      </label>
                      <select className="form-select" id="state" required>
                        <option selected disabled value="">
                          Choose...
                        </option>
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                      </select>
                    </div>
                    <div className="mb-3 col-3">
                      <label for="pincode" className="form-label">
                        Pincode
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="pincode"
                        placeholder="Enter your pincode"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <hr
                    className="mt-3"
                  />
                  <div className="uhid row gap-1 mt-2">
                    <div className="col-6 border border-info rounded-3 bg-primary-subtle">
                      <h5 className="text d-flex mt-1">
                        UHID : HOSUHID10203394
                      </h5>
                    </div>
                    <div className="col-5">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
  )
}

export default PatientRegister