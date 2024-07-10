
const Navigation = () =>{
    return(
        <nav>
          <div className="logo">
            <img src="./images/brand_logo.png" alt="brand logo img" />
          </div>
          <ul>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="login-btn">Login</button>
        </nav>
    )
}

export default Navigation;