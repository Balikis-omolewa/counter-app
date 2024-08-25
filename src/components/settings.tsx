import React from 'react';

// Define the props for the Settings component
interface SettingsProps {
  countLimit: number;
  setCountLimit: (limit: number) => void;
  startCount: () => void;
}

// Settings component
const Settings: React.FC<SettingsProps> = ({ countLimit, setCountLimit, startCount }) => {
  return (
    <div className="settings">
      <h1>Settings</h1>
      
      {/* Input to set the count limit */}
      <div>
      <label htmlFor="countLimit">
        Set Count Limit: &nbsp; &nbsp;
        <input
          id="countLimit"
          type="number"
          value={countLimit}
          onChange={(e) => setCountLimit(Number(e.target.value))}
          min="0"
        />
      </label>
      
      {/* Display the set count limit */}
      {countLimit > 0 && (
        <p>Current Count Limit: 
          <br />
          <button>{countLimit}</button>&nbsp;
          <button onClick={startCount}>Start Count</button>
        </p>
      )}
      </div>
    </div>
  );
};

export default Settings;
