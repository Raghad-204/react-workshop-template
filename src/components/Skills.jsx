// src/components/Skills.jsx
import blenderIcon from "../assets/blender.svg";
import pythonIcon from "../assets/python.svg";
import javaIcon from "../assets/java.svg";
import htmlIcon from "../assets/html5.svg";
import cssIcon from "../assets/css3.svg";
import reactIcon from "../assets/react.svg";


export default function Skills({ skills }) {
  return (
    <div className="skillsGrid">
      
      {/* {skills.map((s) => (
        <div className="skillPill" key={s.name}>

          <span>{s.name}</span>
          <span className="skillTag">{s.tag}</span>

        </div>
      ))} */}

      {skills.map((s) => (
         <div className="skillPill" key={s.name}>
    
        {s.name === "Blender" && (
          <img src={blenderIcon} alt="Blender" className="skillIcon" />
        )}

        {s.name === "Python" && (
          <img src={pythonIcon} alt="Python" className="skillIcon" />
        )}

        {s.name === "Java" && (
         <img src={javaIcon} alt="Java" className="skillIcon" />
        )}

        {s.name === "HTML" && (
         <img src={htmlIcon} alt="HTML" className="skillIcon" />
        )}

        {s.name === "CSS" && (
          <img src={cssIcon} alt="CSS" className="skillIcon" />
        )}

        {s.name === "React" && (
          <img src={reactIcon} alt="React" className="skillIcon" />
        )}

        <span>{s.name}</span>
        <span className="skillTag">{s.tag}</span>
        
        </div>
))}

    </div>
  );
}
