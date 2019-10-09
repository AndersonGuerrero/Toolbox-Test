import React from 'react'
import { LinkHeader } from './LinkHeader'

export const Header = ({ onSelectMenu }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">ToolBox Test</a>
        <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <LinkHeader onSelectMenu={onSelectMenu} text={'Portfolio'} link={'portafolio'}  />
            <LinkHeader onSelectMenu={onSelectMenu} text={'Acerca de'} link={'acerca'}  />
            <LinkHeader onSelectMenu={onSelectMenu} text={'Contacto'} link={'contacto'}  />
	       		</ul>
	      	</div>
    	</div>
  	</nav>
  )
}