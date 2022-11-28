import React from "react";
import { Link } from "react-router-dom";
import { Cart, User } from "../tools/svgs";
// import "../Assets/Navbar.css";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="">Ansorbit</div>

      <div className="flex flex-1 justify-evenly">
        <a href="home" className="cursor-pointer">
          <Link to="/">Home</Link>
        </a>

        <a href="beg" className="cursor-pointer">
          Beg
        </a>
        <a href="about" className="cursor-pointer">
          About
        </a>
        <a href="cart" className="cursor-pointer">
          <Link to="/addtocart">Cart</Link>
        </a>
        <a href="productList" className="cursor-pointer">
          <Link to="/productlist">Product List</Link>
        </a>
        <a href="order" className="cursor-pointer">
          <Link to="/conformation">Order Confirmation</Link>
          
        </a>
      </div>

      <div className="flex justify-around">
        <div className="cursor">
          <Cart style={{ height: "2.2rem", width: "2.2rem" }} />
        </div>
        <div>
          <User style={{ height: "2.5rem", width: "2.5rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
