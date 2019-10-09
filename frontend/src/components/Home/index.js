import React from 'react'

export const Home = ({ textdisplay, isLoading }) => {
  const showText = isLoading ? 'Cargando...' : textdisplay
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src="img/avataaars.svg" alt="" />
        <h1 className="masthead-heading text-uppercase mb-0">{showText}</h1>
      </div>
    </header>
  )
}