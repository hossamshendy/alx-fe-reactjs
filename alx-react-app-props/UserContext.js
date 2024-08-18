import React, { createContext } from 'react';

// Create a Context
const UserContext = createContext();

// Export the Context and a Provider component
export const UserProvider = ({ children, value }) => (
  <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
);

export default UserContext;
