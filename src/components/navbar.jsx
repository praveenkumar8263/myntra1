import React from "react";
import Logo from "../image/logo.png";
import Like from "../image/like.png";
import Profile from "../image/profile.png";
import Cart from "../image/cart.png";
import "../Styles/navber.css";
function Navbar() {

  let Tags = [
    { Like: "MEN" },
    { Like: "WOMEN" },
    { Like: "KIDS" },
    { Like: "HOME & LIVING" },
    { Like: "BEAUTY" },
    { Like: "STUDIO" }
    
  ]
  return (
    <div className="navber">
      <div className="logo">
        <img width={48} src={Logo} alt="logo" />
      </div>
      <div className="navlist">
        <ul>
          {Tags.map((tags) =>
          {
            return <li><a href="">{tags.Like}</a></li>
            }

          )}
        </ul>
      </div>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search for products, brands and more "
        />
      </div>
      <div className="userOptions">
        <div className="profile">
          <div className="imgpro">
            <img width={30} src={Profile} alt="" />
          </div>
          <div className="datapro">
            <p>Profile</p>
          </div>
        </div>
        <div className="profile">
          <div className="imgpro">
            <img width={30} src={Like} alt="" />
          </div>
          <div className="datapro">
            <p>Like</p>
          </div>
        </div>
        <div className="profile">
          <div className="imgpro">
            <img width={30} src={Cart} alt="" />
          </div>
          <div className="datapro">
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
