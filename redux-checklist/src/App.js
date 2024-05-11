import React, { useState } from "react";

const ChecklistContext = React.createContext();

const ChecklistProvider = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  return (
    <ChecklistContext.Provider value={{ checkedItems, handleCheckboxChange }}>
      {children}
    </ChecklistContext.Provider>
  );
};

// Custom Checkbox component
const Checkbox = ({ label, name }) => {
  const { checkedItems, handleCheckboxChange } =
    React.useContext(ChecklistContext);

  return (
    <label>
      <input
        type="checkbox"
        name={name}
        checked={checkedItems[name] || false}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  );
};

const App = () => {
  return (
    <ChecklistProvider>
      <div>
        <h1>Checklist</h1>
        <Checkbox label="Are you a citizen " name="YES" />
        <Checkbox label="Are you over 21" name="NO" />
        <SelectedOptionsDisplay />
      </div>
    </ChecklistProvider>
  );
};

// Component to display selected options
const SelectedOptionsDisplay = () => {
  const { checkedItems } = React.useContext(ChecklistContext);

  return (
    <div>
      <h2>Selected Options:</h2>
      <ul>
        {Object.entries(checkedItems).map(
          ([key, value]) => value && <li key={key}>{key}</li>
        )}
      </ul>
    </div>
  );
};

export default App;
