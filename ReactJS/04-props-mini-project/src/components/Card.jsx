import "./card.css"
import { Bookmark } from "lucide-react";


const Card = (props) => {
  const {brandLogo, companyName, location, pay, posted, role, tag1, tag2} = props
  return (
    <div className="card">
        <div className="top">
          <div className="img-wrapper">
            <img
              src={brandLogo}
              alt=""
            />
          </div>
          <div>
            <button>
              Save <Bookmark size={15} />
            </button>
          </div>
        </div>
        <div className="center">
          <div className="center_heading">
            <h1>{companyName}</h1>
            <span>{posted}</span>
          </div>
          <h2>{role}</h2>
          <div className="tags">
            <button>{tag1}</button>
            <button>{tag2}</button>
          </div>
        </div>
        <div className="bottom">
          <div>
            <p>{pay}</p>
            <span>{location}</span>
          </div>
          <div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
  )
}

export default Card
