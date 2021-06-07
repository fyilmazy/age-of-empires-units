import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

// Set the page title here because of it is in navbar
const Navbar = ({ title }) => {
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

const mapStateToProps = (state) => {
  const { title } = state.pageTitle;
  return {
    title,
  };
};

export default connect(mapStateToProps)(React.memo(Navbar));
