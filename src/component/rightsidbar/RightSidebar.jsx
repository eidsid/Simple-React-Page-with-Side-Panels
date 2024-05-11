import React from 'react';
import './style.css';
import ToggleBtn from '../toggleBtn/ToggleBtn';

const RightSidebar = ({ isOpen, openFn }) => {
  return (
    <div className={`sidebar-right ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-right-content">
      <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
          <li>Link 5</li>
        </ul>      </div>
      <span className="close-btn" onClick={openFn}><ToggleBtn left={''} /></span>
    </div>
  );
};

export default RightSidebar;
