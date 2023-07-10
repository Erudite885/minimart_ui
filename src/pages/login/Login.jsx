import React, { useState } from 'react'
import "./Login.scss";
// import axios from 'axios';
// import NewRequest form '../../utils/newRequest';

function Login () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = async (e)=> {
    e.preventDefault();

    try{
    const res = await newRequest.post('auth/login',{ username, password});
    localStorage.getItem('currentUser', JSON.stringify(res.data));
    navigate('/')
  }catch(e){
    setError(err.response.data);
    console.log(err)
  }
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor=''>Username</label>
        <input name='username' type='text' placeholder='johndoe' onChange={e=>setUsername(e.target.value)}/>

        <label htmlFor=''>Password</label>
        <input 
        name='password'
        type='password'
        placeholder='johndoe@gmail.com' 
        onChange={e=>setUsername(e.target.value)}
        />
        <button type='submit'>Login</button>
        {error && error}
      </form>
    </div>
  );
}

export default Login