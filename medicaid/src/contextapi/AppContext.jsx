// src/context/AppContext.jsx
import { createContext, useContext, useState } from "react";

// 1. Create context
const AppContext = createContext();

// 2. Provider component
export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");

  // Any function you want globally
  const login = (data) => setUser(data);
  const logout = () => setUser(null);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// 3. Custom hook (Best practice)
export function useAppContext() {
  return useContext(AppContext);
}
