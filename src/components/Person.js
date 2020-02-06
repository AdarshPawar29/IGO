/** @format */

import React from "react";
import profilePic from "../resource/notfound.png";
import StyledProfileDiv from "./styledComponent/StyledProfileDiv";
import StyledParagraph from "./styledComponent/StyledParagraph";
const Person = props => {
  return (
    // <div className='scrollbar' id='style-9'>
    //   <div className='force-overflow'>
        <StyledProfileDiv>
          <div className='call-out-container1'>
            <div className='call-out1' style={{ "flex-grow": "1" }}>
              <img src={profilePic} alt="na"/>
            </div>
            <div className='call-out1' style={{ "flex-grow": "100" }}>
              <StyledParagraph>
                I'm {props.name}, Belongs to {props.age}
                My body type is {props.gender}I protect myself with the help of{" "}
                {props.weapons}. JOINING IFO!
              </StyledParagraph>
            </div>
          </div>
        </StyledProfileDiv>
    //   </div>
    // </div>
  );
};

export default Person;
