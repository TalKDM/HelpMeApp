import React, { useState } from 'react'
import '../style/signUp.css'
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  const [errors,setErrors] = useState([]);

  const nav = useNavigate()

  const checkUser = () => {
    const numbers = /[0-9]/
    const regex = /"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"/
    const error = {};
    if(props.fullName.length < 3 || numbers.test(props.fullName)) {
      error.name = 'Error'
      setErrors(error)
    } if(props.password.length < 7 || !numbers.test(props.password)) {
      error.pass = 'Error'
      setErrors(error)
    }else {
      nav(`/UserPage/${props.fullName}`)
    }
  }









  return (
    <div className='mainSignUpDiv'>
      <div className="title">
        <h1>Sign up</h1>
      </div>
      <div className="inputs">
        <form onChange={checkUser}>
        {errors.name && <div className='error'>{errors.name}</div>}
        <input type="text" placeholder='Enter your Full name:'  onChange={(e) => {props.setFullName(e.target.value)}}/><br />
        {errors.pass && <div className='error'>{errors.pass}</div>}
        <input type="password" placeholder='Enter your Password:' onChange={(e) => {props.setPassword(e.target.value)}}/><br />
        </form>
      </div>
      
    </div>
  )
}

export default SignUp