import React from 'react'

export const LinkHeader = ({ text, link, onSelectMenu }) => {
  return (
    <li className="nav-item mx-0 mx-lg-1">
      <a
        onClick={() => onSelectMenu(link)}
        className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
        href={`#${link}`}
      >
        {text}
      </a>
    </li>
  )
}