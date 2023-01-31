import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgLogin from '../../assets/images/login/login.svg';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { AuthContext } from '../../ContextAPI/UserContext';

const Login = () => {
    const { logIn, googlePopLogin } = useContext(AuthContext)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const signHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password, name)
        setSuccess(false)
        setError('')
        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setSuccess(true)
                navigate('/')
                form.reset()
            })
            .catch(error => {
                const errorMessage = error.message
                setError(errorMessage)
                console.error(error)
            })
    }
    const popUpHandler = () => {
        googlePopLogin()
            .then(result => {
                const user = result.user
                console.log(user)
                setSuccess(true)
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message
                setError(errorMessage)
            })
    }
    return (
        <div>
            <div className="hero  hero-content flex-col lg:flex-row bg-white-200">

                <div className="mr-14">
                    <img style={{ width: '360px', height: '502px' }} src={imgLogin} alt="" />
                </div>
                <div>
                    <h1 className="text-5xl text-center font-semibold my-5">Login now!</h1>
                    <form onSubmit={signHandler} className="card flex-shrink-0 w-96  max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    <Link to='/register' className="label-text-alt link link-hover">No Account? Register</Link>
                                </label>
                            </div>
                            <div>
                                <p className='text-red-500'>{error}</p>
                                {
                                    success ? <div className='text-green-500'>Succesfully Login</div> : undefined
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='text-center mt-5 mb-5'>
                                <p>Or Login with</p>
                                <div className='flex gap-6 mt-5 ml-28'>
                                    <FaGoogle onClick={popUpHandler} className='text-red-400' />
                                    <FaGithub />
                                    <FaFacebook className='text-blue-500' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;