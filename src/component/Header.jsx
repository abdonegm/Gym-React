import React from 'react'

const Header = ({title,image,children}) => {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-back'>
            <img src={image} alt="header-back" />
        </div>
        <div className='header-content'>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
