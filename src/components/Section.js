import React from "react";
import Homecard from "./Homecard";
import Springcard from "./Springcard";
import { Spring } from "react-spring";
import { animated, useSpring } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium, faReact, faJava, faPhp, 
          faAngular, faAndroid, faAws,faPython, faDocker, faLinux,
          faGit } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

export default function Section({ title, lastName, city, email, paragraph,
                                  dark, id, socialIcons, about, experience,
                                  education, skills, interests }) {

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
          <br/>
          <hr/>
        </div>
        <hr/>
        
        <div className={experience ? id : "section-none"} id={id}>
          <div>
            <h2>{title}</h2>
            <img src={require('../assets/walterwhite.png')} style={{width: "19ch"}}/>
          </div>
          <div className={"InfoDiv"}>
            <div className={"careerStation"}>
              <div className={"profession"}>
                <h3>Backend Developer</h3>
                <h7>Nazareth, Israel</h7>
              </div>
              <div className={"company"}>
                <div className={"subHeader"}>Amdocs</div>
                <h7>Summer 2019 - Present</h7>
              </div>
              <p>● Part of an agile development team working on Amdocs Optima project. </p>
              <p>● Java Spring backend developer of micro services architecture.</p>
            </div>
            <br/>
            <div className={"careerStation"}>
              <div className={"profession"}>
                <h3>Junior Developer</h3>
                <h7>Nesher, Israel</h7>
              </div>
              <div className={"company"}>
                <div className={"subHeader"}>MoovingON</div>
                <h7>Summer 2018</h7>
              </div>
              <p>● Developed and maintained web BI reports based on client’s needs.</p>
              <p>● Developed and maintained web monitoring dashboards.</p>
              <p>● Developed and maintained openTSDB metric scripts.</p>
              <p>● Developed alert system web application to assist business department.Using PHP and AngularJS.</p>
              <p>● Developed BASH and Python scripts that enhanced NOC automation abilities, using AWS api.</p>
              <p>● Developed a web tool which collects website performance and statistical data. Using Angularjs and PHP.</p>
              <p>● Developed and Implemented automation tools for R&D and QA teams, such as slack bot.</p>
              <p>● Developed BASH and Python plugins for monitoring services (Nagios/Icinga).</p>
              <p>● Developing an Android App as a side project.</p>
            </div>
            <br/>
            <div className={"careerStation"}>
              <div className={"profession"}>
                <h3>NOC Engineer</h3>
                <h7>Nesher, Israel</h7>
              </div>
              <div className={"company"}>
                <div className={"subHeader"}>MoovingON</div>
                <h7>Spring 2016</h7>
              </div>
            </div>
          </div>
          <br/>
          <hr/>
        </div>


        <div className={education ? id : "section-none"} id={id}>
          <div>
            <h2>{title}</h2>
            <img src={require('../assets/school.png')} style={{width: "19ch"}}/>
          </div>
          <div className={"InfoDiv"}>
            <div className={"educationStation"}>
              <div className={"university"}>
                <h3>University of Haifa</h3>
                <h7>2014-2018</h7>
              </div>
              <div className={"degree"}>
                <a target="_blank" href="https://is-web.hevra.haifa.ac.il/index.php/en/" style={{color: "#5d6369"}}>BSC in Information Systems</a>
              </div>
            </div>
            <br/>
            <div className={"educationStation"}>
              <div className={"certificate"}>
                <h3>Excellence</h3>
                <h7>Elected as best <a target="_blank" href="https://drive.google.com/file/d/1x4h6bgS_VjXNOsbIIn4yBcFFXszgk9Y-/view" style={{color: "#5d6369"}}>final project 2018</a> , Android app that assists restaurant crew.</h7>
              </div>
            </div>
            <br/>
          </div>
          <br/>
          <hr/>
        </div>

        <div className={skills ? id : "section-none"} id={id}>
          <div>
            <h2>{title}</h2>
            <img src={require('../assets/skills.png')} style={{width: "19ch"}}/>
          </div>
          <div className={"InfoDiv"}>
            <div className={"educationStation"}>
              <div className={"degree"}>
              Programming languages and tools
              </div>
              <div className={"socialIcons"}>
                <FontAwesomeIcon className={"socialIcon"} icon={faReact} size='3x'/>
                <FontAwesomeIcon className={"socialIcon"} icon={faAngular} size='3x'/>
                <FontAwesomeIcon className={"socialIcon"} icon={faAndroid} size='3x'/>
                <FontAwesomeIcon className={"socialIcon"} icon={faJava} size='3x'/>
                <FontAwesomeIcon className={"socialIcon"} icon={faPython} size='3x'/>
                <FontAwesomeIcon className={"socialIcon"} icon={faPhp} size='3x'/>
                <FontAwesomeIcon className={"socialIcon"} icon={faAws} size='3x'/>
                <FontAwesomeIcon className={"socialIcon"} icon={faDocker} size='3x'/>
                <FontAwesomeIcon className={"socialIcon"} icon={faLinux} size='3x'/>
                <FontAwesomeIcon className={"socialIcon"} icon={faGit} size='3x'/>
            </div>
            </div>
            <br/>
            <div className={"educationStation"}>
              <div className={"certificate"}>
                <h3>Skills</h3>
                  <div>● Web development</div>
                  <p>- Backend development with Java/Python/Php languages</p>
                  <p>- Frontend development with React/AngularJS and standart JS HTML</p>
                  <div>● Devops mindset</div>
                  <p>- Well aware of standards and best practices in DevOps world</p>
                <div>● Both startup and corporate values</div>
                <p>- Took leading part in both startup and corporation.</p>
              </div>
            </div>
            <br/>
          </div>
          <br/>
          <hr/>
        </div>


        <div className={interests ? id : "section-none"} id={id}>
          <div>
            <h2>{title}</h2>
            <img src={require('../assets/interest.png')} style={{width: "19ch"}}/>
          </div>
          <div className={"InfoDiv"}>
            <div className={"educationStation"}>
              <div className={"university"}>
                <h3></h3>
              </div>
              <div className={"degree"}>
              Some interest shit
              </div>
            </div>
            <br/>
            <div className={"educationStation"}>
              
            </div>
            <br/>
          </div>
          <br/>
          <hr/>
        </div>
      
        
      
      </div>
 
      )}
    </Spring>
  );
}