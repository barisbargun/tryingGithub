import colorNames from "colornames";

const MainBox = ({color, textColor}:{color:string, textColor:string}) => {
  return (
    <div className='mainBox' 
    style={{backgroundColor:color, color:textColor}}>
        {color.length > 0 ? color : "Empty Value"}
        <p>{colorNames(color)}</p>
    </div>
  )
}

export default MainBox