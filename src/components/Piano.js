import _ from 'lodash';
import React from 'react';
import Key from './Key';
import { NOTES, VALID_KEYS, NOTE_TO_KEY, KEY_TO_NOTE } from '../global/constants';

class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: [],
    };
  }

  playNote = (note) => {
    if (!_.isEmpty(note)) {
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.play();
    }
  }

  handleKeyDown = (event) => {
    if (event.repeat) {
      return;
    }
    const key = event.key;
    this.activateKey(key);
  }

  handleKeyUp = (event) => {
    const key = event.key;
    this.deactivateKey(key);
  }

  handleKeyClick = (note) => {
    this.activateKey(NOTE_TO_KEY[note]);
    setTimeout(() => {
      this.deactivateAllKeys();
    }, 200); // Desactivar la tecla después de 200 ms (ajusta según sea necesario)
  }

  handleMouseUp = () => {
    this.deactivateAllKeys();
  }

  activateKey = (key) => {
    const updatedPressedKeys = [...this.state.pressedKeys];
    if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      updatedPressedKeys.push(key);
      this.setState({
        pressedKeys: updatedPressedKeys,
      });
      this.playNote(KEY_TO_NOTE[key]);
    }
  }

  deactivateKey = (key) => {
    const updatedPressedKeys = [...this.state.pressedKeys];
    const index = updatedPressedKeys.indexOf(key);
    if (index > -1) {
      updatedPressedKeys.splice(index, 1);
      this.setState({
        pressedKeys: updatedPressedKeys,
      });
    }
  }

  deactivateAllKeys = () => {
    this.setState({
      pressedKeys: [],
    });
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  render() {
    const keys = _.map(NOTES, (note, index) => {
      const key = NOTE_TO_KEY[note];
      return (
        <Key
          key={index}
          note={note}
          pressedKeys={this.state.pressedKeys}
          onClick={() => this.handleKeyClick(note)}
        />
      );
    });

    const audioFiles = _.map(NOTES, (note, index) => {
      return (
        <audio
          id={note}
          key={index}
          src={`../../notes/${note}.mp3`}
        />
      );
    });

    return (
      <div>
        <div className="piano">
          {keys}
        </div>
        <div>
          {audioFiles}
        </div>
      </div>
    );
  }
}

export default Piano;

