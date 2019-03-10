import React, { Component } from "react";
import "./UserCarousel.css";
import UserCarouselCard from "../UserCarouselCard/UserCarouselCard";
import itunesLogo from "../../assets/itunes/apple-itunes.svg";
import itunesAvatar from "../../assets/itunes/itunes.jpg";
import nikeLogo from "../../assets/nike/nike.svg";
import nikeAvatar from "../../assets/nike/nike.jpg";
import paneraLogo from "../../assets/panera/panera-bread.svg";
import paneraAvatar from "../../assets/panera/panera.jpg";
import starbucksLogo from "../../assets/starbucks/starbucks.svg";
import starbucksAvatar from "../../assets/starbucks/starbucks.jpg";

class UserCarousel extends Component {
  state = {
    activeIndex: 0
  };

  speed = this.props.speed * 1000;

  cardData = [
    {
      tag: "NEW",
      avatar: itunesAvatar,
      detail1: "You earned $1.12",
      detail2: "from fluzmaster21",
      logo: itunesLogo
    },
    {
      tag: "NEW",
      avatar: nikeAvatar,
      detail1: "You earned $0.91",
      detail2: "from highlife18",
      logo: nikeLogo
    },
    {
      tag: "NEW",
      avatar: paneraAvatar,
      detail1: "You earned $0.82",
      detail2: "from breezy36",
      logo: paneraLogo
    },
    {
      tag: "NEW",
      avatar: starbucksAvatar,
      detail1: "You earned $0.79",
      detail2: " from connected26",
      logo: starbucksLogo
    }
  ];

  componentDidMount = () => {
    setInterval(() => {
      this.setState((prev, props) => {
        if (this.state.activeIndex < 3) {
          return { activeIndex: prev.activeIndex + 1 };
        } else return { activeIndex: 0 };
      });
    }, this.speed);
  };

  render() {
    const { activeIndex } = this.state;

    const fetchCards = this.cardData.map((card, index) => {
      let computedCardContainerClass = index === activeIndex ? "show" : "hide";
      let computedCardClass = index === activeIndex ? "in" : "out";
      return (
        <div
          className={`${computedCardContainerClass} carouselWrap`}
          key={index}
        >
          <UserCarouselCard
            cardTag={card.tag}
            cardAvatar={card.avatar}
            cardDetail1={card.detail1}
            cardDetail2={card.detail2}
            cardLogo={card.logo}
            cardClass={computedCardClass}
          />
        </div>
      );
    });

    return <div className="carousel-container"> {fetchCards} </div>;
  }
}

export default UserCarousel;
