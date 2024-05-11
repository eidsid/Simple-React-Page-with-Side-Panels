import React from 'react';
import './style.css';
import ToggleBtn from '../toggleBtn/ToggleBtn';

const LeftSidebar = ({ isOpen, openFn }) => {
  return (
    <div className={`sidebar-left ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-left-content">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
          <li>Link 5</li>
        </ul>
      </div>
      <span className="close-btn" onClick={openFn}><ToggleBtn left={"left"} /></span>
    </div>
  );
};

export default LeftSidebar;
