import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  // const [color, setColor] = useState(randomColor());
  const [color, setColor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [chosenColor, setChosenColor] = useState('');
  return (
    <div>
      <h1>Random Color Generator</h1>
      <div
        style={{
          backgroundColor: '#FF0000',
        }}
      />
      <button
        onClick={() => {
          setChosenColor(randomColor());
        }}
      >
        Generate
      </button>
      <br />
      <input
        value={chosenColor}
        onChange={(event) => {
          setChosenColor(event.currentTarget.value);
          console.log(randomColor.find(event.currentTarget).color);
        }}
      />
      <div
        style={{
          backgroundColor: chosenColor,
          width: '800px',
          height: '400px',
        }}
      >
        Color : {chosenColor}
      </div>
      <div>
        <h3>
          Would you like the color to be a certain hue and luminosity? and
          resizing it?
        </h3>
        <button1 setColor={setColor} luminosity={luminosity}>
          Luminosity
          <br />
          <input
            htmlFor="height"
            text="height (in px)"
            type="number"
            id="height"
            placeholder="500px"
          />
        </button1>
        <br />
        <button2 setColor={setColor} hue={hue}>
          <br />
          Hue
          <br />
          <input
            htmlFor="width"
            text="width (in px)"
            type="number"
            id="width"
            placeholder="500px"
          />
        </button2>
      </div>
    </div>
  );
}
