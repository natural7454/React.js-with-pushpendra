import React from 'react'
import { Bookmark } from 'lucide-react'

const Profile = (props) => {
  return (
    <div className="card">

      <div className="tip">
       <img src={props.img}/>
        <button className="btn">
          <Bookmark size={18} /> Save
        </button>
      </div>

      <div className="center">
        <h3>{props.name} <span>{props.days}</span></h3>
        <h2>{props.senior}</h2>

        <div className="time">
          <h4>{props.part}</h4>
          <h4>{props.level}</h4>
        </div>
      </div>

      <div className="bottom">
        <h3>{props.rate}</h3>
        <p>{props.space}</p>
        <button className="apply">Apply Now</button>
      </div>

    </div>
  )
}

export default Profile
