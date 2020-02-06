import React from 'react';
import StyledParagraph from './styledComponent/StyledParagraph';
import StyledHeading from './styledComponent/StyledHeading';
import TopBorderImg from '../resource/divider.gif';
import HDivider from "../resource/HeaderDivider.gif";
import jet1 from "../resource/spaceship.gif";
import jet2 from "../resource/spaceship2.gif";

export default function Header() {
    const styleImg ={
        transform: 'rotate(180deg)',
        height: "2rem"
    }
    return (
        <div className="call-outs-container">
            <div style={{"flex-grow":"1"}}>
                <img src={jet1}></img>
            </div>
            <div style={{"flex-grow":"2"}}>
                    <img src={TopBorderImg} className="w-100" style={styleImg} alt="not-available"/>
                    <StyledHeading className='rainbow'>Intergalactic Federation Organization</StyledHeading>
                    <img src ={HDivider} className="w-50" alt="not-available"/>
                    <StyledParagraph>For over 850 glaagnars, the Galactic Federation has helped quintillions of other sentient life forms assimilate into our vision of one united universe. We stand scrung in scrung with thousands of planets; perhaps yours will be next!</StyledParagraph>
            </div>
            <div style={{"flex-grow":"1"}}>
                <img src={jet2}></img>
            </div>
        </div>
    )
}
