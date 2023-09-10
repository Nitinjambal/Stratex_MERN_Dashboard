import { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, setLoader, loader, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
