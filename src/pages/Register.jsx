import { useState } from "react"
import {Link} from "react-router-dom"

const Register = () => {
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    setInputs(prev=> ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }


  console.log(inputs)
  return (
    <div className='auth'>
    <h1>Sign up</h1>
    <form>
      <input type="text" placeholder='username' name='username' onChange={handleChange}/>
      <input type="email" placeholder='email'  name='email' onChange={handleChange}/>
      <input type="password" placeholder='password'  name='password' onChange={handleChange}/>
      <button onClick={handleSubmit}>Sign up</button>
      <span>Wrong credential!</span>
      <p>already have account? <Link to="/login">Login</Link></p>
    </form>
    
  </div>
  )
}

export default Register
