import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavLink, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Set the page title here because of it is in navbar
const Navbar = () => {
  // TODO: move the state to redux store
  // title state for pages
  const [title, setTitle] = useState("Home Page");

  const { pathname } = useLocation();

  // Get id from pathname
  const regex = /([^/units/])([^&]+){0,}/g;
  const id = pathname.match(regex);

  // Hold all possible page titles in an Array
  const pageTitles = ["Home Page", "Units Page", "Unit Detail Page"];

  /** Function getPageTitle check if id is truthy,
   * else check pathname itself by switch case.
   * In the end, return the page title.
   */
  const getPageTitle = (pathname, id) => {
    if (id !== null) {
      setTitle(pageTitles[2]);
    } else {
      switch (pathname) {
        case "/units":
          setTitle(pageTitles[1]);
          break;
        case "/":
          setTitle(pageTitles[0]);
          break;
        default:
          setTitle(pageTitles[0]);
      }
    }
  };

  useEffect(() => {
    getPageTitle(pathname, id);
  }, [pathname]);

  return (
    <div className="Navbar">
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h2" color="textPrimary">
            {title}
          </Typography>
          <div className="menuWrapper">
            <NavLink exact to="/">
              <Button variant="contained" display="inline">
                Home
              </Button>
            </NavLink>
            <NavLink exact to="/units">
              <Button variant="contained" display="inline">
                Units
              </Button>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default React.memo(Navbar);
