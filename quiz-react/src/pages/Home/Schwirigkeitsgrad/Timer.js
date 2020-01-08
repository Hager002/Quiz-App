import React, { Component } from "react";
import TimerIcon from '@material-ui/icons/Timer';
class Timer extends Component {
  state = {
    min: 3,
    sec: 30
  };

  componentDidMount() {
    this.myTimeInterval = setInterval(() => {
      const { sec, min } = this.state;

      if (sec > 0) {
        this.setState(({ sec }) => ({
          sec: sec - 1
        }));
      }

      if (sec === 0 && min !== 0) {
        this.setState(({ min }) => ({
          min: min - 1,
          sec: 59
        }));
      }

      if (sec === 0 && min === 0) {
        clearInterval(this.myTimeInterval);
      }

      if (sec === 0 && min === 0) {
        window.location.href = "/ergebnis";
      }
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.myTimeInterval);
  }

  render() {
    const { min, sec } = this.state;

    return (
      <div className="timer">
        <p>
          <TimerIcon/> Übrige Zeit: {min}:{sec}
        </p>
      </div>
    );
  }
}

export default Timer;
