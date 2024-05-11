import React from 'react'
import "./style.css"
const ToggleBtn = ({left}) => {
  return (
    <div className={`toggle-btn ${left&&"left"}  `}>
    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="rotate-180 transition-all duration-500 delay-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>

    </div>
  )
}

export default ToggleBtn