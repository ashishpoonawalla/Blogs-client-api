import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

const Register = () => {
	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
	})
	const [err, setError] = useState(null)

	const navigate = useNavigate()

	const handleChange = (e) => {
		setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await axios.post("auth/register", inputs)
			navigate("/login")
		} catch (err) {
			setError(err.response.data)
		}
	}

	return (
		<div className="auth">
			<h1>Sign up</h1>
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
					type="email"
					placeholder="email"
					name="email"
					onChange={handleChange}
				/>
        <input
          required
					type="password"
					placeholder="password"
					name="password"
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Sign up</button>
				{err && <span>{err}</span>}
				<p>
					already have account? <Link to="/login">Login</Link>
				</p>
			</form>
		</div>
	)
}

export default Register
