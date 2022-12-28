import Logo from "../img/logo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="links">
        <Link to="/?cat=art" className="link">
          <h6>ART</h6>
        </Link>
        <Link to="/?cat=art" className="link">
          <h6>ART</h6>
        </Link>
        <Link to="/?cat=art" className="link">
          <h6>ART</h6>
        </Link>
        <Link to="/?cat=art" className="link">
          <h6>ART</h6>
        </Link>
        <Link to="/?cat=art" className="link">
          <h6>ART</h6>
        </Link>
        <Link to="/?cat=art" className="link">
          <h6>ART</h6>
        </Link>
        <Link to="/?cat=art" className="link">
          <h6>ART</h6>
        </Link>
      </div>
    </div>
  )
}

export default Navbar