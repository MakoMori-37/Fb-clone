import React from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './HostStory.css'

function HostStory({ hostpic }) {
  return (
    <div className="hostpicstory">
        <div className="hostpic">

      <img src={hostpic} alt="" />
        </div>
        <div className="hosticon">
            <AddCircleIcon/>
        </div>

      <div className="hostname">
        <p>สร้างสตอรี่</p>
      </div>
    </div>
  );
}

export default HostStory;
