import React from "react";
import Homecard from "./Homecard";
import Springcard from "./Springcard";
import { Spring } from "react-spring";
import { animated, useSpring } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';

export default function Section({ title, lastName, city, email, paragraph,
                                  dark, id, socialIcons, about, experience }) {

  // const animatedStyles = useSpring({opacity: 0})


  return (
    <Spring from={{opacity: 0, marginTop: -1000}} to={{opacity: 1, marginTop: 0}} >
      { props => (
      <div className={"section" + (dark ? " section-dark" : "")} style={props}>
        <div className={about ? id : "section-none"} id={id}>
          <Springcard/>
          <div className={"InfoDiv"}>
            <div className={"titleDiv"}>
              <h1 className={"firstName"}>{title}</h1><h1 className={"lastName"}>{lastName}</h1>
            </div>
            <div className={"subtitle"}>
              {city}<a href="mailto:ahed.ist@gmail.com" style={{color: "#101011"}}>{email}</a>
            </div>
            <p className={"personalPara"}>{paragraph}</p>
            <div className={"social" + (socialIcons ? "Icons" : "No")}>
              <a target="_blank" href="https://github.com/Batatos">
                <FontAwesomeIcon className={"socialIcon"} icon={faGithub} size='3x'/>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/ahed-istaitih-96b67a127/">
                <FontAwesomeIcon className={"socialIcon"} icon={faLinkedin} size='3x'/>
              </a>
              <a target="_blank" href="https://medium.com/@ahedistaitih">
                <FontAwesomeIcon className={"socialIcon"} icon={faMedium} size='3x'/>
              </a>
            </div>
          </div>
        </div>
        
        
        <div className={experience ? id : "section-none"} id={id}>
          <div>
            <h2>{title}</h2>
            <img src={require('../assets/walterwhite.png')} style={{width: "19ch"}}/>
          </div>
          <div className={"InfoDiv"}>
            <h3>Backend Developer</h3>
            <div className={"subHeader"}>Amdocs</div>
            <h3>Junior Developer</h3>
            <div className={"subHeader"}>MoovingON</div>
            <h3>NOC Engineer</h3>
            <div className={"subHeader"}>MoovingON</div>
          </div>
        </div>
      </div>
 
      )}
    </Spring>
  );
}