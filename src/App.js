import React, { useState } from 'react';
import './App.css';
import Header from './component/header/Header';
import LeftSidebar from "./component/leftsidbar/LeftSidebar"
import RightSidebar from "./component/rightsidbar/RightSidebar"
import ToggleBtn from './component/toggleBtn/ToggleBtn';

function App() {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

  const toggleLeftPanel = () => {
    setIsLeftPanelOpen(!isLeftPanelOpen);
  };

  const toggleRightPanel = () => {
    setIsRightPanelOpen(!isRightPanelOpen);
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="sidebar leftSidebar">
          <div className="toggleContainer">
            <button onClick={toggleLeftPanel}>
              <ToggleBtn left={''} />
            </button>
          </div>
          <LeftSidebar openFn={toggleLeftPanel} isOpen={isLeftPanelOpen} />
        </div>

        <div className="main-content">
          {/* Your main content here */}
          This is the page main content
        </div>

        <div className="sidebar rightSidebar">
          <div className="toggleContainer">
            <button onClick={toggleRightPanel}>
              <ToggleBtn left={true} />
            </button>
          </div>
          <RightSidebar openFn={toggleRightPanel} isOpen={isRightPanelOpen} />
        </div>
      </main>
    </div>
  );
}

export default App;
