
import React, { createContext, useState, useContext, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Mock login function - This would be replaced with real API calls in production
  const login = async (email: string, password: string) => {
    // Simulate API call
    setLoading(true);
    try {
      // This is a mock implementation
      if (email && password) {
        const mockUser = {
          id: "user_" + Math.random().toString(36).substr(2, 9),
          name: email.split('@')[0],
          email
        };
        localStorage.setItem("user", JSON.stringify(mockUser));
        setUser(mockUser);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Mock register function - This would be replaced with real API calls in production
  const register = async (name: string, email: string, password: string) => {
    // Simulate API call
    setLoading(true);
    try {
      // This is a mock implementation
      if (name && email && password) {
        const mockUser = {
          id: "user_" + Math.random().toString(36).substr(2, 9),
          name,
          email
        };
        localStorage.setItem("user", JSON.stringify(mockUser));
        setUser(mockUser);
      } else {
        throw new Error("Please fill in all fields");
      }
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      register, 
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
