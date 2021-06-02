import React from "react";
import "./Footer.scss";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Developed by "}
      <Link
        color="inherit"
        href="https://github.com/fyilmazy/"
        target="_blank"
        rel="noreferrer"
      >
        Fahrettin Yılmaz
      </Link>{" "}
      - 2021
    </Typography>
  );
};

const Footer = () => {
  return (
    <div className="Footer">
      <footer>
        <Container maxWidth="xs">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};

export default React.memo(Footer);
