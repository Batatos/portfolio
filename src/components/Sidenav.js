import React, {Component} from "react";


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
                    <li className={"navbar-item"}>ABOUT</li>
                    <li className={"navbar-item"}>EXPERIENCE</li>
                    <li className={"navbar-item"}>EDUCATION</li>
                    <li className={"navbar-item"}>SKILLS</li>
                    <li className={"navbar-item"}>INTERESTS</li>
                </ul>
            </div>
        </nav>
        )
    }
}

export default Sidenav;