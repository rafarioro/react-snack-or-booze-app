import React, {useContext} from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import MenuContext from "./MenuContext";

function NavBar() {

  const { clickedItem, getClicked } = useContext(MenuContext)

  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            {/* added the onClick functions to set the state when either is clicked */}
              <NavLink onClick={()=> getClicked("snacks")}  to="/snacks" >Snacks</NavLink>
          </NavItem>
          <NavItem>
              <NavLink  onClick={()=> getClicked("drinks")} to="/drinks">Drinks</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
