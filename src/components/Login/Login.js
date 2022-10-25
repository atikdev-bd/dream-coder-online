import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSvg from '../../Assets/svg/icons8-google.svg'

const Login = () => {
    return (
      <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form
            onSubmit={''}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                You have no account :
                <button className="btn text-emerald-500 btn-active btn-link">
                  {" "}
                  <Link to="/register">Register here</Link>
                </button>
              </p>
              <div
                id="login-id"
                onClick={''}
                className="flex justify-center items-center border cursor-pointer bg-emerald-200 rounded-full"
              >
                <img className="w-12 " src={GoogleSvg} alt="" />
                <p className="px-4">continue with google</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;