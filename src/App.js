import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor()); //
  // const [chosenColor, setChosenColor] = useState('');
  return (
    <div style={{ margin: '50px', background: 'azure' }}>
      <h2>Random Color Generator</h2>
      <button
        style={{
          color: '#3e2723',
          background: 'azure',
          width: '80px',
          marginLeft: '25px',
        }}
        onClick={() => {
          setColor(randomColor());
        }}
      >
        Generate
      </button>
      <br />
      <input
        value={color}
        onChange={(event) => {
          setColor(event.currentTarget.value);
          console.log(randomColor.find(event.currentTarget).color);
        }}
      />

      <div
        style={{
          width: '300px',
          height: '300px',
          border: '7px solid black',
          marginTop: '15px',
          placeholder: '500px',
          backgroundColor: color,
        }}
      >
        Generated Color: {color}
      </div>
    </div>
  );
}
