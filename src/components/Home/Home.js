import React, { useEffect } from "react";
import "./Home.scss";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import aoeImage from "../../images/aoe.jpg";
import { updatePageTitle } from "../../redux/actionCreators/";

const Home = ({ pageTitle }) => {
  useEffect(() => {
    updatePageTitle(pageTitle);
  }, [pageTitle]);

  return (
    <div className="Home">
      <Container>
        <Card>
          <CardMedia
            component="img"
            image={aoeImage}
            title="Age of Empires Image"
            alt="Age of Empires Image"
          />
        </Card>
      </Container>
    </div>
  );
};

export default React.memo(Home);
