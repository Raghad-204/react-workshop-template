import Card from "./Card";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import emailIcon from "../assets/Email.svg";


export default function Contact({ email, links }) {
  return (
    <>
      <div className="grid2">
        <Card
          title="Email"
          sub={email}
          meta="Click the button below to reach me."
        />
        <Card title="Links" sub="GitHub + LinkedIn" meta="Open my profiles." />
      </div>

      <div
        className="actions"
        style={{ justifyContent: "flex-start", marginTop: 12 }}
      >
        <a className="btn btnPrimary" href={`mailto:${email}`}>
          <img src={emailIcon} className="icon" alt="email" />
          Email Me
        </a>
        <a
          className="btn btnGhost"
          href={links.github}
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} className="icon" alt="github" />
          {/* GitHub */}
        </a>
        <a
          className="btn btnGhost"
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} className="icon" alt="linkedin" />
          {/* LinkedIn */}
        </a>
      </div>
    </>
  );
}
