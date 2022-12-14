import './App.css';
import { useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#000000');
  const getRgb = () => Math.floor(Math.random() * 256);
  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  const handleGenerate = () => {
    const color = { r: getRgb(), g: getRgb(), b: getRgb() };
    setColor(rgbToHex(color.r, color.g, color.b));
  };
  return (
    <div style={{ backgroundColor: color }} className="container">
      <button onClick={handleGenerate}>{color}</button>
    </div>
  );
};
export default RandomColor;
