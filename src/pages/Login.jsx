import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

const Login = () => {
  const [inputs, setInputs] = useState({
		username: "",
		password: "",
	})
	const [err, setError] = useState(null)

	const navigate = useNavigate()

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
		console.log(inputs)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(1);
		try {
			await axios.post("auth/login", inputs)
			console.log(2)
			navigate("/")
		} catch (err) {
			setError(err.response.data)
			console.log(3);
		}
	}

	return (
		<div className="auth">
			<h1>Login</h1>
			<form>
        <input
          required
					type="text"
					placeholder="username"
					name="username"
					onChange={handleChange}
				/>
        <input
          required
					type="password"
					placeholder="password"
					name="password"
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Login</button>
				{err && <span>{err}</span>}
				<p>
					Don't have account? <Link to="/register">Sign up</Link>
				</p>
			</form>
		</div>
	)
}

export default Login
