import React, { useState } from "react";
import Login from "../../components/Benutzerformular/Login/Login";
import Register from "../../components/Benutzerformular/Registrierung/Registrieren";

export default function Auth({ onLogin }) {
  const [register, setRegister] = useState(false);

  return register ? (
    <Register onLogin={onLogin} />
  ) : (
    <Login onLogin={onLogin} onRegister={() => setRegister(true)} />
  );
}
