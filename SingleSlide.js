//npm install nuka-carousel

import React from "react";
import Team1 from "../../assets/HomePage/team1.jpg";
import Team2 from "../../assets/HomePage/team2.jpg";
import Team3 from "../../assets/HomePage/team3.jpg";
import Carousel from 'nuka-carousel';

export default class SingleSlide extends React.Component {
  render() {
      
    return (
      <Carousel autoplay="true">
         
        <img src={Team1} style={{width:"70%",margin:"auto"}} />
        <img src={Team2} style={{width:"70%",margin:"auto"}}/>
        <img src={Team3} style={{width:"70%",margin:"auto"}}/>
       
      </Carousel>
    );
  }
}
