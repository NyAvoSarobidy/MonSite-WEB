

import React from "react";

import './style/styleSkills.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faReact, faLaravel, faSymfony, faCss, faHtml5, faBootstrap, faPhp, faPython, faJava , faGit, faGithub, faJs} from "@fortawesome/free-brands-svg-icons"

function Skills(){
    
    const skills = [
     
        { name: "ReactJS", percentage: 70, icon :  <FontAwesomeIcon   className="text-success" icon={faReact} /> },
        { name: "Laravel", percentage: 70, icon :  <FontAwesomeIcon  className="text-danger"  icon={faLaravel} /> },
        { name: "Symfony", percentage: 60, icon :  <FontAwesomeIcon   className="text-secondary" icon={faSymfony} /> },
        { name: "ASP Dotnet ", percentage: 75},
      ];
    
    const tools = [
      {  icon :  <FontAwesomeIcon className="text-warning" style={{ fontSize :"40px"}}  icon={faJs} /> },
      {   icon :  <FontAwesomeIcon style={{ color :"orange",  fontSize :"40px"}}  icon={faHtml5} /> },
      {  icon :  <FontAwesomeIcon  className="text-primary" style={{ fontSize :"40px"}} icon={faCss} /> },
      {   icon :  <FontAwesomeIcon style={{ color :"pink",  fontSize :"40px"}} icon={faBootstrap} /> },
      {   icon :  <FontAwesomeIcon  style={{ color :"orange",  fontSize :"40px"}}  icon={faGit} /> },
      {   icon :  <FontAwesomeIcon   style={{ color :"violet", fontSize :"40px"}} icon={faGithub} /> },
     ];

     const langage = [
     
      { name: "PHP", percentage: 75, icon :  <FontAwesomeIcon  className="text-secondary"  icon={faPhp} /> },
      { name: "PyThon", percentage: 75, icon :  <FontAwesomeIcon className="text-warning" icon={faPython} /> },
      { name: "JAVA", percentage: 60, icon :  <FontAwesomeIcon className="text-primary"  icon={faJava} /> },
      { name: "C#", percentage: 60, },
    ];
    return(
   <div className=" skills-container">         
<p className="text-dark fw-bold text-start ms-5 fs-5"> 
 Langage de Programmation  :</p>
<div className="frameworks container text-dark" >

         {langage.map((langage, index) => (
           <div className="skill" key={index}>
             <div className="skill-header">
              <div className="fs-5">
                {langage.icon}
                </div>
                <span>{langage.name}</span>
                <span>{langage.percentage}%</span>
             </div>
             <div className="progress-bar">
               <div
                 className="progress"
                 style={{ width: `${langage.percentage}%` }}
               ></div>
             </div>
           </div>
         ))}
       </div>
       <br/>
       <p className="text-dark fw-bold text-start ms-5 fs-5">Frameworks et Téchnologie :</p>
       <div className="frameworks text-dark" style={{ paddingTop : "5px"}}>
         {skills.map((skill, index) => (
           <div className="skill" key={index}>
             <div className="skill-header">
             <div className="fs-5">
               {skill.icon}
              </div>
               <span>{skill.name}</span>
               <span>{skill.percentage}%</span>
             </div>
             <div className="progress-bar">
               <div
                 className="progress"
                 style={{ width: `${skill.percentage}%` }}
               ></div>
             </div>
           </div>
         ))}
       </div>
       <br/>
       <p className="text-dark fw-bold text-start ms-5 fs-5">Autre technologie et outils :</p>
       <div className="tools text-start">
         {tools.map((tool, index) => (
           <div className="tool" key={index}>
              <div className="fs-5">
               {tool.icon}
              </div> 
         
           </div>
         ))}
       </div>
       </div>  
    );


}
export default  Skills;