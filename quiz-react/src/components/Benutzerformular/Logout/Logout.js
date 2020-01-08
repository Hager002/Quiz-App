import React from "react";
import './logout.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Logout({ onClick, isLoggedin }) {
  return isLoggedin ? (
    <div>
      <button className="logout" onClick={onClick}> <ExitToAppIcon/> <br/>Abmelden</button>
    </div>
  ) : (
    <div />
  );
}
