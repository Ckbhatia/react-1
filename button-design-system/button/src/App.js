import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {

  // Variables
  const primary = "white";
  const third = "rgb(150, 150, 150)";
  const secondary = 'rgb(27, 11, 125)';
  const paddingX = '8px';
  const paddingY = '50px';
  const none= 'none';
  const borderType = 'solid';
  const borderSize = '2px';

  // StyleData object
  const styleData = {
    color: [primary, primary, primary, secondary, third, secondary, third, primary, primary, secondary],
    bgColor: [secondary, secondary, third, primary, primary, primary, primary, secondary, secondary, primary],
    border: [none, none, `${borderSize} ${borderType} ${third}`, `${borderSize} ${borderType} ${secondary}`,
     `${borderSize} ${borderType} ${third}`, none, none, none, none, `${borderSize} ${borderType} ${secondary}`],
    padding: [`${paddingX} ${paddingY}`, `${paddingX} ${paddingY}`, `${paddingX} ${paddingY}`,
     `${paddingX} ${paddingY}`, `${paddingX} ${paddingY}`, `${paddingX} ${paddingY}`, `${paddingX} ${paddingY}`,
      `${paddingX} 30px`, `${paddingX} 80px`, `${paddingX} 80px`]
  }

  return (
    <div className="App">
      { styleData.color.map((color, index) => {
        return (
          <li className="list-item" key={index}>
            <Button 
              bgColor={styleData.bgColor[index]} 
              color={color} 
              border={styleData.border[index]}
              padding={styleData.padding[index]}
              text="Button" />
          </li>
        )
        })
    }
      { // By static and repeative way
      /* <Button bgColor="secondary" color="primary" text="Button" />
      <Button bgColor="third" color="primary" text="Button" />
      <Button bgColor="primary" color="secondary" text="Button" />
      <Button bgColor="primary" color="third" text="Button" />
      <Button bgColor="primary" color="secondary" text="Button" />
      <Button bgColor="primary" color="third" text="Button" /> */}
    </div>
  );
}

export default App;