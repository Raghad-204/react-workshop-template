import downloadIcon from "../assets/download.svg";
import profileImg from "../assets/3d-female-laptop.png";


// export default function Hero({ data }) {
//   return (
//     <div className="hero">
//       <h1>{data.name}</h1>
//       <h3>{data.role}</h3>
//       <p>{data.summary}</p>

//       <div className="actions">
//           <a
//             href="/cv-ra.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn btnPrimary"
//           >
//             View CV <img src={downloadIcon} className="icon" />
//           </a>
//      </div>

//     </div>

//   );
// }


export default function Hero({ data }) {
  return (
    <div className="hero" id="home">
      <div className="avatarWrap">
        
        <img className="photo" src={profileImg} alt="profile" />
       
        {/* <div className="avatar">
          {data.name?.charAt(0)}
        </div> */}
      </div>

      <h1 className="heroName">{data.name}</h1>
      <div className="heroRole">{data.role}</div>
      <p className="heroSummary">{data.summary}</p>
      <div className="actions">
           <a
            href="/cv-ra.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnPrimary"
          >
            View CV <img src={downloadIcon} className="icon" />
          </a>
      </div>

    </div>
  );
}

