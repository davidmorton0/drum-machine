import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

var drumSounds = {
  Q: {
    text: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    description: 'Snare'
  },
  W: {
    text: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    description: 'Side Stick'
  },
  E: {
    text: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    description: 'Punchy Kick'
  },
  A: {
    text: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    description: 'Closed High Hat'
  },
  S: {
    text: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    description: 'Open High Hat'
  },
  D: {
    text: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    description: 'Dsc Oh'
  },
  Z: {
    text: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    description: 'Kick n Hat'
  },
  X: {
    text: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    description: 'Kick'
  },
  C: {
    text: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    description: 'Cymbal'
  }
}

class Drumpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ''
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    var char = String.fromCharCode(e.keyCode);
    if (drumSounds[char]) {
      this.play(char);
    }
  }

  play(id) {
    document.getElementById(id).play();
    this.setState({
      current: drumSounds[id]["description"]
    })
  }

  render() {
    const drums = Object.keys(drumSounds).map((key) =>
      <div className="drum-pad" id={`drum-${key}`} onClick={() => {this.play(key)}}>
        <p className="keyText">{key}</p>
        <audio className="clip" id={key} src={drumSounds[key]["url"]}/>
      </div>
    );

    return (<div id="drum-machine">
             {drums}
              <div id="display">
                <p>{this.state.current}</p>
              </div>
            </div>);
  }
}

ReactDOM.render(<Drumpad />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
