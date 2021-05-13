import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext, useEffect,
  useMemo,
  useState,
} from 'react';
import { UserInfo, VerificationLevel } from 'models/user';
import { getUserInfo, storeAuthToken, storeUserInfo } from 'helpers';

interface AuthState {
  isLoggedIn: boolean;
  userInfo: UserInfo;
}

interface AuthContext {
  state: AuthState;
  actions: {
    login: (user: UserInfo) => void;
    updateUserInfo: (user: UserInfo) => void;
    logout: () => void;
  },
}

const initialState: AuthState = {
  isLoggedIn: true,
  userInfo: { verificationLevel: VerificationLevel.CODE_VERIFIED } as any,
};

const AuthContext = createContext<AuthContext>(undefined);

const AuthProvider: FunctionComponent = (props) => {
  const { children } = props;
  const [state, setState] = useState<AuthState>(initialState);

  const login = useCallback((userInfo: UserInfo) => {
    storeAuthToken(userInfo.accessToken);
    storeUserInfo(userInfo);
    setState({ isLoggedIn: true, userInfo });
  }, []);

  const updateUserInfo = useCallback((userInfo: UserInfo) => {
    setState((oldState) => ({
      ...oldState,
      userInfo: {
        ...oldState.userInfo,
        ...userInfo,
      },
    }));
  }, []);

  const logout = useCallback(() => {
    setState({ isLoggedIn: false, userInfo: undefined });
  }, []);

  useEffect(() => {
    const storedUserInfo = getUserInfo();
    if (storedUserInfo) {
      setState({ isLoggedIn: true, userInfo: storedUserInfo });
    }
  }, []);

  const contextValue = useMemo<AuthContext>(() => ({
    state,
    actions: {
      login,
      updateUserInfo,
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
