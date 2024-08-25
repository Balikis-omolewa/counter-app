import React, { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter'; 
import About from './components/About';
import Settings from './components/settings';
import './App.css';


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Counter');
  const [countLimit, setCountLimit] = useState<number>(0);
  const [isCounting, setIsCounting] = useState(false);

  const startCount = () => {
    setIsCounting(true);
    setActiveTab('Counter');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Counter':
        return <Counter countLimit={countLimit} />;
      case 'About':
        return <About />;
      case 'Settings':
        return (
          <Settings 
            countLimit={countLimit} 
            setCountLimit={setCountLimit} 
            startCount={startCount} 
          />
        );
      default:
        return <Counter countLimit={countLimit} />;
    }
  };

  return (
    <div className="app">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
