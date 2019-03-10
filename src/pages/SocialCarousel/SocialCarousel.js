import React from "react";
import "./SocialCarousel.css";
import ExpansionButton from "../../components/ExpansionButton/ExpansionButton";
import UserCarousel from "./../../components/UserCarousel/UserCarousel";
import Grid from "@material-ui/core/Grid";

function SocialCarousel() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={24}
      className="socialCarousel-container"
    >
      <Grid item xs={12} sm={12} className="Carousel">
        <UserCarousel speed="3" />
      </Grid>

      <Grid item xs={12} sm={12} className="socialInfoContainer">
        <div className="socialInfo">
          <div className="socialInfo-header">
            <h5>
              <span>EARN FOR BEING SOCIAL</span>
            </h5>
            <h1> Strength In Numbers</h1>
          </div>
          <p>
            The little things add up. We use dozens of apps to connect to each
            other and to brands. At Fluz, we’re trying to bridge the two. Our
            mission is to connect as many shoppers as possible, so that earning
            money becomes as easy as spending it.
          </p>
          <ExpansionButton />
        </div>
      </Grid>
    </Grid>
  );
}

export default SocialCarousel;
