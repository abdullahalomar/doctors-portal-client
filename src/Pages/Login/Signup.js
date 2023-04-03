import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loader from "../Shared/Loader";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let signInError;

  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name});
    console.log('update done');
    navigate('/appointment');
  };

  if (loading || gLoading || updating) {
    return <Loader></Loader>
  }

  if (error || gError || updateError) {
    signInError= <p className="text-red-600">{error?.message || gError?.message || updateError?.message}</p>
  }

  if (user|| gUser) {
    console.log(user|| gUser);
  }
    return (
        <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title mx-auto text-2xl uppercase">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: 'Name is required'
                  }
                })}
              />
              <label class="label">
              {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
                
              </label>
            </div>


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
            <input className="btn w-full max-w-xs" type="submit" value='SIGNUP' />
          </form>
          <p>Already have an account? <Link className="text-primary" to='/login'> Please login</Link></p>
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

export default Signup;