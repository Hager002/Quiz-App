import React from "react";
import './logout.css';

export default function Logout({ onClick, isLoggedin }) {
  return isLoggedin ? (
    <div>
      <button className="logout" onClick={onClick}>Abmelden</button>
    </div>
  ) : (
    <div />
  );
}
