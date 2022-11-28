import React from "react";
import { Cart, User } from "../tools/svgs";

const Navbar = () => {
  return (
    <div>
      <div>Ansorbit</div>

      <div>
        <a>Home</a>
        <a>Beg</a>
        <a>About</a>
        <a>Cart</a>
        <a>Product List</a>
        <a>Order Confirmation</a>
      </div>
      

      <div>
        <a><Cart style={{ height: "2.5rem", width: "2.5rem" }} /></a>
        <a><User style={{ height: "2.5rem", width: "2.5rem" }} /></a>
      </div>
    </div>
  );
};

export default Navbar;
