import React from 'react'

const ToggleColorInput = ({handleButton}:{handleButton:any}) => {
  return (
    <button 
    className='toggleColorBtn'
    aria-label='Toggle Color Button'
    role='toggleColor'
    onClick={handleButton}
    >ToggleColorInput</button>
  )
}

export default ToggleColorInput