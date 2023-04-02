import React from 'react';

const Login = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title mx-auto text-2xl ">Login</h2>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Password</span>
  </label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  <label class="label">
    <span class="label-text-alt">Forgot Password ?</span>
  </label>
</div>
<input type="submit" value='LOGIN' class="btn btn-accent w-full max-w-xs" />
<p>New to Doctors Portal?</p> <input type="submit" />
  </div>
</div>
        </div>
    );
};

export default Login;   <h1>Log in</h1>