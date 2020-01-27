import React from "react";
import Homecard from "./Homecard";
import Springcard from "./Springcard";
import { Spring } from "react-spring";
import { animated, useSpring } from "react-spring";


export default function Section({ title, subtitle, dark, id }) {

  // const animatedStyles = useSpring({opacity: 0})


  return (
    <Spring from={{opacity: 0, marginTop: -1000}} to={{opacity: 1, marginTop: 0}} >
      { props => (
      <div className={"section" + (dark ? " section-dark" : "")} style={props}>
        <div className="section-content" id={id}>
          <h1>{title}</h1>
          <Springcard/>
        </div>
      </div>
      )}
    </Spring>
  );
}