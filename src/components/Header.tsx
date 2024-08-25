import React from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="app-header">
      <nav>
        <ul className="tab-list">
          <li className={`tab-item ${activeTab === 'Counter' ? 'active' : ''}`} onClick={() => setActiveTab('Counter')}>
            Counter
          </li>
          <li className={`tab-item ${activeTab === 'About' ? 'active' : ''}`} onClick={() => setActiveTab('About')}>
            About
          </li>
          <li className={`tab-item ${activeTab === 'Settings' ? 'active' : ''}`} onClick={() => setActiveTab('Settings')}>
            Settings
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
