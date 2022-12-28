import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div className='auth'>
    <h1>Sign up</h1>
    <form>
      <input type="text" placeholder='username' />
      <input type="email" placeholder='email' />
      <input type="password" placeholder='password' />
      <button>Sign up</button>
      <span>Wrong credential!</span>
      <p>already have account? <Link to="/login">Login</Link></p>
    </form>
    
  </div>
  )
}

export default Register
