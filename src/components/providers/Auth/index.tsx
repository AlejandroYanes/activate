import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { UserInfo, VerificationLevel } from 'models/user';
import { clearStorage, getUserInfo, storeAuthToken, storeUserInfo } from 'helpers';
import { AppTheme } from '../Theme';

interface AuthState {
  isLoggedIn: boolean;
  userInfo: UserInfo;
}

interface AuthContext {
  state: AuthState;
  actions: {
    updateUserInfo: (user: UserInfo) => void;
    login: (user: UserInfo) => void;
    logout: () => void;
  },
}
// todo: revert
const getInitialState = (): AuthState => {
  return {
    isLoggedIn: false,
    userInfo: undefined,
  };
  // return {
  //   isLoggedIn: true,
  //   userInfo: {
  //     avatar: 'user4',
  //     userName: '@alejandro.yanes94',
  //     name: 'Alejandro',
  //     lastName: 'Yanes',
  //     theme: AppTheme.SummerVibes,
  //     useDarkStyle: true,
  //     verificationLevel: VerificationLevel.INTERESTS_ADDED
  //   } as UserInfo,
  // };
};

const AuthContext = createContext<AuthContext>(undefined);

const AuthProvider: FunctionComponent = (props) => {
  const { children } = props;
  const [state, setState] = useState<AuthState>(getInitialState);

  const updateUserInfo = useCallback((userInfo: UserInfo) => {
    storeUserInfo(userInfo);
    setState({ isLoggedIn: true, userInfo });
  }, []);

  const login = useCallback((userInfo: UserInfo) => {
    storeAuthToken(userInfo.accessToken);
    updateUserInfo(userInfo);
  }, []);

  const logout = useCallback(() => {
    clearStorage();
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
      updateUserInfo,
      login,
      logout,
    },
  }), [state, updateUserInfo, login, logout]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthData = () => useContext(AuthContext).state;
export const useAuthActions = () => useContext(AuthContext).actions;

export default AuthProvider;
