import { createContext, useContext, useState } from "react";

export const RequirementFormContext = createContext({
  data: {
    name: "",
    contactInfo: "",
    city: "",
    requirement: "",
    errorName:"",
    errorContact:''
  },
  
});

const RequirementFormContextProvider = ({ children }) => {
    const [state, setState] = useState({});
  return (
    <RequirementFormContext.Provider
      value={{
      data:state,
      onChangeData:setState
      }}
    >
      {children}
    </RequirementFormContext.Provider>
  );
};
export default RequirementFormContextProvider;
