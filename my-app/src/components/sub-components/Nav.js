import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "./Context";

const Nav = (props) => {
  const { adminID, setAdminID } = useContext(LoginContext)
  
  const logout = () => {
    setAdminID("")
  }
  
  return (
    <nav>
      <ul>
        <li className="inactive logout">
          <NavLink onClick={logout} to="/">Logout</NavLink>
        </li>
        {adminID ?  
          <>
            <li className={props.adminpage}>
              <NavLink to="/adminpage">Admin Page</NavLink>
            </li>
          </>      
        : null}
      </ul>
    </nav>
  );
};

export default Nav;