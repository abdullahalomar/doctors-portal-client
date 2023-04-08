import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loader from "../Shared/Loader";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/appointment';

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  if (loading || gLoading) {
    return <Loader></Loader>
  }

  if (error || gError) {
    signInError= <p className="text-red-600">{error?.message || gError?.message}</p>
  }

  if (user|| gUser) {
    navigate(from, {replace: true});
  }

  
  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title mx-auto text-2xl ">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: 'Email is required'
                  },
                  pattern: {
                    value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                    message: 'Provide a valid email'
                  }
                })}
              />
              <label class="label">
              {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                
              </label>
            </div>


            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: 'Password is required'
                  },
                  minLength: {
                    value: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$",
                    message: 'Must be 5 character or longer'
                  }
                })}
              />
              <label class="label">
              {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
              {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                
              </label>
            </div>

             {signInError}   
            <input className="btn w-full max-w-xs" type="submit" value='LOGIN' />
          </form>
          <p>New to Doctors Portal? <Link className="text-primary" to='/signup'>Create new account</Link></p>
          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline btn-info"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
<h1>Log in</h1>;
