import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const handleLogin = (e) =>{
    e.preventDefault();
}


const Login = () => {
    return (
        <div className="auth-bg">
            <div className="container p-0">
                <div className="row justify-content-center g-0">
                    <div className="col-xl-9 col-lg-8">
                        <div className="authentication-page-content shadow-lg">
                            <div className="d-flex flex-column h-100 px-4 pt-4">
                                <div className="row justify-content-center">
                                    <div className="col-sm-8 col-lg-6 col-xl-6">

                                        <div className="py-md-5 py-4">

                                            <div className="text-center mb-5">
                                                <h3>Welcome Back !</h3>
                                                <p className="text-muted">Sign in to continue to Chat.</p>
                                            </div>
                                            <form onSubmit={handleLogin}>
                                                <div className="mb-3">
                                                    <label htmlhtmlFor="username" className="form-label">Username</label>
                                                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                                </div>

                                                <div className="mb-3">
                                                    <div className="float-end">
                                                        <a href="auth-recoverpw.html" className="text-muted fs-14">Forgot password?</a>
                                                    </div>
                                                    <label htmlFor="userpassword" className="form-label">Password</label>
                                                    <div className="position-relative auth-pass-inputgroup mb-3">
                                                        <input type="password" className="form-control pe-5" placeholder="Enter Password" id="password-input" />
                                                        <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                    </div>
                                                </div>

                                                <div className="form-check form-check-info fs-16">
                                                    <input className="form-check-input" type="checkbox" id="remember-check" />
                                                    <label className="form-check-label fs-14" htmlhtmlFor="remember-check">
                                                        Remember me
                                                    </label>
                                                </div>

                                                <div className="text-center mt-4">
                                                    <button className="btn btn-primary w-100" type="submit">Log In</button>
                                                </div>
                                            </form>
                                            {/* <!-- end form --> */}

                                            <div className="mt-5 text-center text-muted">
                                                <p>Don't have an account ? <Link to={'/signup'} className="fw-medium primary-color text-decoration-underline"> Register</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end col --> */}
                                </div>
                                {/* <!-- end row --> */}

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="text-center text-muted p-4">
                                            <p className="mb-0 fs-14">© 2024 Chat App. Crafted with <FaHeart className='text-danger' /> by <a href=''></a> Abdullah Jawed
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

export default Login