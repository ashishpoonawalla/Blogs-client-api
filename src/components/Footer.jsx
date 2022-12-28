import Logo from "../img/logo.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="item">
          <img src={Logo} alt="" />
        </div>
        <div className="item">Spread ❤️ to my blogs. &copy; 2022</div>
      </div>
    </div>
  )
}

export default Footer