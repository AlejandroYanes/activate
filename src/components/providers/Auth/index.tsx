import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

interface User {
  sub: string;
  name: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User;
}

interface AuthContext {
  state: AuthState;
  actions: {
    login: (user: User) => void;
    logout: () => void;
  },
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

const AuthContext = createContext<AuthContext>(undefined);

const AuthProvider: FunctionComponent = (props) => {
  const { children } = props;
  const [state, setState] = useState<AuthState>(initialState);

  const login = useCallback((user: User) => {
    setState({ isLoggedIn: true, user });
  }, []);

  const logout = useCallback(() => {
    setState({ isLoggedIn: false, user: undefined });
  }, []);

  const contextValue = useMemo<AuthContext>(() => ({
    state,
    actions: {
      login,
      logout,
    },
  }), [state, login, logout]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthData = () => useContext(AuthContext).state;
export const useAuthActions = () => useContext(AuthContext).actions;

export default AuthProvider;
