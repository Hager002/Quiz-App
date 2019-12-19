import React from "react";
import { Component } from "react";

class Logout extends Component {
  state = {
    navigate: false
  };

  logout = () => {
    localStorage.clear("token");
    this.setState({ navigate: true });
  };

  render() {
    const { navigate } = this.state;
    if (navigate) {
      return (window.location.href = "/");
    }

    return (
      <div>
        <button className="logout" onClick={this.logout}>
          Abmelden
        </button>
      </div>
    );
  }
}
export default Logout;
