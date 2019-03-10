import React from "react";
import "./UserCarouselCard.css";
import PropTypes from "prop-types";

const UserCarouselCard = ({
  cardClass,
  cardTag,
  cardAvatar,
  cardDetail1,
  cardDetail2,
  cardLogo
}) => {
  return (
    <div className={`user-carousel-card-container ${cardClass}`}>
      <div className="user-carousel-card">
        <span>{cardTag}</span>
        <img src={cardAvatar} alt="card avatar" />
        <p>
          {cardDetail1}
          <br />
          {cardDetail2}
        </p>
        <img className="card-logo" src={cardLogo} alt="card logo" />
      </div>
    </div>
  );
};

UserCarouselCard.propTypes = {
  cardClass: PropTypes.string,
  cardAvatar: PropTypes.string,
  cardDetail1: PropTypes.string,
  cardDetail2: PropTypes.string,
  cardLogo: PropTypes.string
};

export default UserCarouselCard;
