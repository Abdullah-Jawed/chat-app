import React from 'react'
import { FaHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const handleSignup = (e) =>{
  e.preventDefault();
}


const Signup = () => {
  return (
    <div className="auth-bg">
      <div className="container p-0">
        <div className="row justify-content-center g-0">
          <div className="col-xl-9 col-lg-8">
            <div className="authentication-page-content shadow-lg">
              <div className="d-flex flex-column h-100 px-4 pt-4">
                <div className="row justify-content-center my-auto">
                  <div className="col-sm-8 col-lg-6 col-xl-6">

                    <div className="py-md-5 py-4">

                      <div className="text-center mb-5">
                        <h3>Register Account</h3>
                        <p className="text-muted">Get your free Chat account now.</p>
                      </div>
                      <form className="needs-validation" onSubmit={handleSignup}>
                        <div className="mb-4">
                          <label htmlFor="useremail" className="form-label">Email</label>
                          <input type="email" className="form-control" id="useremail" placeholder="Enter email" required="" />
                          <div className="invalid-feedback">
                            Please Enter Email
                          </div>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="username" className="form-label">Username</label>
                          <input type="text" className="form-control" id="username" placeholder="Enter username" required="" />
                          <div className="invalid-feedback">
                            Please Enter Username
                          </div>
                        </div>

                        <div className="mb-4">
                          <label htmlFor="userpassword" className="form-label">Password</label>
                          <input type="password" className="form-control" id="userpassword" placeholder="Enter password" required="" />
                          <div className="invalid-feedback">
                            Please Enter Password
                          </div>
                        </div>


                        <div className="mb-3">
                          <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Register</button>
                        </div>
                      </form>
                      {/* <!-- end form --> */}

                      <div className="mt-5 text-center text-muted">
                        <p>Already have an account ? <Link to={'/login'} className="fw-medium text-decoration-underline primary-color">Login</Link></p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}

                <div className="row">
                  <div className="col-xl-12">
                    <div className="text-center text-muted p-4">
                      <p className="mb-0 fs-14">© 2024 Chat App. Crafted with <FaHeart className='text-danger' /> by Abdullah Jawed
                      </p>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}

              </div>
            </div>
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container-fluid --> */}
    </div>
  )
}

export default Signup