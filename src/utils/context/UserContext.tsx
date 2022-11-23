import { createContext, useContext, ReactNode } from 'react';

const initialState = {
  loggedIn: false,
  admin: false,
  readAccess: false,
  writeAccess: false,
};
export interface I_Auth_Action {
  payload?: {
    status?: boolean;
    statusCode?: number;
  };
  type: string;
}
export enum Auth {
  signUp = 'signUp',
  login = 'login',
  isAdmin = 'isAdmin',
  hasRole = 'hasRole',
}

const reducer = (action?: I_Auth_Action, state = initialState) => {
  switch (action?.type) {
    case Auth.signUp:
      if (action!.payload!.status || action!.payload!.statusCode === 200) {
        state = { ...state, loggedIn: true };
      }
      return state;
    default:
      return state;
  }
};
const UserContext = createContext({ state: initialState, dispatch: reducer });

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UserContext.Provider value={{ state: reducer(), dispatch: reducer }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
