import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className='navbar'>
      {isAuth && <MyButton onClick={() => logout()}>Log out</MyButton>}
      <div className='navbar__links'>
        <Link to='/posts'>Posts</Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  );
}
