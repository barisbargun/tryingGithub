import React, { ChangeEvent } from 'react'

const MainInput = ({color, setColor}:
    {color:string, setColor:any}) => {
  return (
    <form className='mainInput' onSubmit={(e) => e.preventDefault()}>
        <input 
        autoFocus
        type='text'
        role='colorInput'
        aria-label='Color Input'
        value={color}
        onChange={
            (e:ChangeEvent<HTMLInputElement>) => setColor(e.target.value)
        }
        placeholder='Add color name'
        
        />
    </form>
  )
}

export default MainInput