import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/16954207/pexels-photo-16954207/free-photo-of-innocent-kid.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" />
        <span>John</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
