import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button>Login</button>
        <span>Wrong credential!</span>
        <p>Don't have account? <Link to="/register">Signup</Link></p>
      </form>
      
    </div>
  )
}

export default Login
