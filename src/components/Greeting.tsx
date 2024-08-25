import React from 'react';

// Step 1: Define an interface for the component props
interface GreetingProps {
  name: string; // The 'name' prop must be a string
}

// Step 2: Apply the interface to the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>; 
  // Step 3: TypeScript ensures 'name' is correctly typed
};

export default Greeting;
