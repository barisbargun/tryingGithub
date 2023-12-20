import { useState } from 'react'
import MainBox from './components/MainBox'
import MainInput from './components/MainInput'
import "./style/style.scss";
import ToggleColorInput from './components/ToggleColorInput';

function App() {

  const [color, setColor] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("black");

  const changeTextColor = () => {
    textColor === "black" ? setTextColor("white") : setTextColor("black");
  }

  return (
    <>
      <MainBox color={color} textColor={textColor}/>
      <MainInput color={color} setColor={setColor}/>
      <ToggleColorInput handleButton={changeTextColor}/>
    </>
  )
}

export default App
