import _ from 'lodash';
import React from 'react';
import { NOTE_TO_KEY } from '../global/constants';

class Key extends React.Component {
  noteIsFlat = (note) => {
    return note.length > 1;
  }

  keyIsPressed = (note, pressedKeys) => {
    return _.includes(pressedKeys, NOTE_TO_KEY[note]);
  }

  render() {
    const { note, pressedKeys, onClick } = this.props;
    const noteIsFlat = this.noteIsFlat(note);
    const keyIsPressed = this.keyIsPressed(note, pressedKeys);

    let keyClassName = "key";
    if (noteIsFlat) {
      keyClassName += " flat";
    }
    if (keyIsPressed) {
      keyClassName += " pressed";
    }

    return (
      <div
        className={keyClassName}
        onClick={() => onClick(NOTE_TO_KEY[note])} // Modificación aquí
      >
        {noteIsFlat ? null : <div className="key-text">{NOTE_TO_KEY[note].toUpperCase()}</div>}
      </div>
    );
  }
}

export default Key;
