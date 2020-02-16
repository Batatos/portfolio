import React, {Component} from "react";
import {Link, animateScroll as scroll} from 'react-scroll';


class Sidenav extends Component{
    render(){
        return(
        <nav className={"navbar navbar-expand-lg navbar-dark bg-primary fixed-top"} id={"sideNav"}>
            <a className={"navbar-brand"} href="#page-top">
                <span>
                    <img className={"avatar-img"} src={require('../assets/avatar.png')} />
                </span>
            </a>
            <div className={"navbar-content"}>
                <ul className={"navbar-nav"}>
                    
                    <li className={"navbar-item"}><a className={"nav-but"}>ABOUT</a></li>
                    <Link
                    activeClass="active"
                    to="section2-content"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration= {500}
                    >
                        <li className={"navbar-item"}><a className={"nav-but"}>EXPERIENCE</a></li>
                    </Link>
                    <Link
                    activeClass="active"
                    to="section3-content"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration= {500}
                    >
                        <li className={"navbar-item"}><a className={"nav-but"}>EDUCATION</a></li>
                    </Link>
                    <Link
                    activeClass="active"
                    to="section4-content"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration= {500}
                    >
                        <li className={"navbar-item"}><a className={"nav-but"}>SKILLS</a></li>
                    </Link>
                    <Link
                    activeClass="active"
                    to="section5-content"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration= {500}
                    >
                    <li className={"navbar-item"}><a className={"nav-but"}>INTERESTS</a></li>
                    </Link>
                </ul>
            </div>
        </nav>
        )
    }
}

export default Sidenav;