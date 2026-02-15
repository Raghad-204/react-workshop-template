// src/components/Navbar.jsx
export default function Navbar() {
  return(
    <div className="navbar">
      <div className="brand">Portfolio</div>
      <nav className="navlinks">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a> 
          <a href="#projects">Projects</a>
          <a className="cta" href="#contact">
            Contact
          </ a>
      </nav>
      </div>

  );
}
