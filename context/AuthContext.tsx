import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthProp {
  authState?: { token: string | null; authenticated: boolean | null };
  onSignUp?: (email: string, password: string) => Promise<any>;
  onSignIn?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const TOKEN_KEY = "my_jwt";
export const API_URL = "https://task-app-be-mern.vercel.app/";
const AuthContext = createContext<AuthProp>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: false,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);

      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        setAuthState({
          token: token,
          authenticated: true,
        });
      }
    };
    loadToken();
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
      return await axios.post(`${API_URL}/api/auth/register`, {
        email,
        password,
      });
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

      console.log(result);

      setAuthState({
        token: result.data.token,
        authenticated: true,
      });

      axios.defaults.headers.common["Authorization"] =
        `Bearer ${result.data.token}`;

      await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

      return result;
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  const logOut = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);

    axios.defaults.headers.common["Authorization"] = ``;

    setAuthState({
      token: null,
      authenticated: false,
    });
  };

  const value = {
    authState,
    onSignUp: signUp,
    onSignIn: signIn,
    onLogout: logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
