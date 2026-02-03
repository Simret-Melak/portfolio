import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings, setAppPublicSettings] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkAppState();
  }, []);

  const checkAppState = async () => {
    try {
      setIsLoadingPublicSettings(true);
      setAuthError(null);
      
      // Check if user is authenticated by looking for token in localStorage
      const token = localStorage.getItem('auth_token');
      
      if (token) {
        await checkUserAuth(token);
      } else {
        setIsLoadingAuth(false);
        setIsAuthenticated(false);
      }
      
      setIsLoadingPublicSettings(false);
    } catch (error) {
      console.error('App state check failed:', error);
      setAuthError({
        type: 'unknown',
        message: error.message || 'An unexpected error occurred'
      });
      setIsLoadingPublicSettings(false);
      setIsLoadingAuth(false);
    }
  };

  const checkUserAuth = async (token) => {
    try {
      setIsLoadingAuth(true);
      
      // Make API call to validate token and get user data
      const response = await fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const currentUser = await response.json();
        setUser(currentUser);
        setIsAuthenticated(true);
      } else {
        // Token is invalid or expired
        localStorage.removeItem('auth_token');
        setUser(null);
        setIsAuthenticated(false);
        
        if (response.status === 401 || response.status === 403) {
          setAuthError({
            type: 'auth_required',
            message: 'Authentication required'
          });
        }
      }
      
      setIsLoadingAuth(false);
    } catch (error) {
      console.error('User auth check failed:', error);
      localStorage.removeItem('auth_token');
      setIsLoadingAuth(false);
      setIsAuthenticated(false);
    }
  };

  const login = async (email, password) => {
    try {
      setAuthError(null);
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      if (response.ok) {
        const data = await response.json();
        const { token, user } = data;
        
        // Store token
        localStorage.setItem('auth_token', token);
        
        // Update state
        setUser(user);
        setIsAuthenticated(true);
        
        // Navigate to home or dashboard
        navigate('/');
        
        return { success: true };
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
    } catch (error) {
      setAuthError({
        type: 'login_failed',
        message: error.message
      });
      return { success: false, error: error.message };
    }
  };

  const register = async (userData) => {
    try {
      setAuthError(null);
      
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }
    } catch (error) {
      setAuthError({
        type: 'registration_failed',
        message: error.message
      });
      return { success: false, error: error.message };
    }
  };

  const logout = (shouldRedirect = true) => {
    // Remove token
    localStorage.removeItem('auth_token');
    
    // Clear state
    setUser(null);
    setIsAuthenticated(false);
    
    if (shouldRedirect) {
      navigate('/login');
    }
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      login,
      register,
      logout,
      navigateToLogin,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};