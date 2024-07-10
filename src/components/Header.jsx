
const Header = () =>{
    return(
   <header>
          <div className="header-content">
            <div className="main-cnt">
              <h1>
              YOUR FEET DESERVE THE BEST
            </h1>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            </div>
            <div className="header-btn">
              <button id="shop-btn">Shop Now</button>
              <button id="category-btn">Category</button>
            </div>
            <div className="logo-social">
            <p>Also Available on</p>
              <div className="img-shop">
                <img src="./images/flipkart.png" alt="" />
              <img src="./images/amazon.png" alt="" />
              </div>
            </div>
          </div>
          <div className="header-img">
            <img src="./images/shoe_image.png" alt="Shoe Image" />
          </div>
 </header>
    )
}

export default Header;