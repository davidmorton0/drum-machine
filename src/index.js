import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import soundfile1 from './assets/audio/Brk_Snr.mp3'
import soundfile2 from './assets/audio/side_stick_1.mp3'
import soundfile3 from './assets/audio/punchy_kick_1.mp3'
import soundfile4 from './assets/audio/Bld_H1.mp3'
import soundfile5 from './assets/audio/Dry_Ohh.mp3'
import soundfile6 from './assets/audio/Dsc_Oh.mp3'
import soundfile7 from './assets/audio/Kick_n_Hat.mp3'
import soundfile8 from './assets/audio/RP4_KICK_1.mp3'
import soundfile9 from './assets/audio/Cev_H2.mp3'
import * as serviceWorker from './serviceWorker';

var drumSounds = {
  Q: {
    text: 'Q',
    url: soundfile1,
    description: 'Snare'
  },
  W: {
    text: 'W',
    url: soundfile2,
    description: 'Side Stick'
  },
  E: {
    text: 'E',
    url: soundfile3,
    description: 'Punchy Kick'
  },
  A: {
    text: 'A',
    url: soundfile4,
    description: 'Closed High Hat'
  },
  S: {
    text: 'S',
    url: soundfile5,
    description: 'Open High Hat'
  },
  D: {
    text: 'D',
    url: soundfile6,
    description: 'Dsc Oh'
  },
  Z: {
    text: 'Z',
    url: soundfile7,
    description: 'Kick n Hat'
  },
  X: {
    text: 'X',
    url: soundfile8,
    description: 'Kick'
  },
  C: {
    text: 'C',
    url: soundfile9,
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
