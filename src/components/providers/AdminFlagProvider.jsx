import { createContext } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
    const { children } = props;
    const sampleObj = { sampleValue: 'テスト' };
  return (
    <AdminFlagContext.Provider value={sampleObj}>
        {children}
    </AdminFlagContext.Provider>
  );
};
