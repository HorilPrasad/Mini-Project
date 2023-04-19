import { createContext, useContext, useState } from 'react';

// Create a context for user management
const UserContext = createContext();

// Define a UserProvider component to wrap around components that need access to user data
const UserProvider = ({ children }) => {
  // Define state for the user
  const [user, setUser] = useState(null);

  // Define a function to update the user
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  // Return the UserContext provider with the user and updateUser function as value
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Define a custom hook to use the UserContext in components
const useUser = () => {
  const { user, updateUser } = useContext(UserContext);
  return { user, updateUser };
};

// Export the UserProvider and useUser hooks
export { UserProvider, useUser };
