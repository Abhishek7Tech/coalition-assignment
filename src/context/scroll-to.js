import { createContext, useRef } from "react";

export const ScrollContext = createContext({
  historySection: null,
  teamSection: null,
});

const ScrollProvider = ({children}) => {
    const historySection = useRef(null);
    const teamSection = useRef(null);

    const value = {historySection, teamSection};

    return (<ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>)
}

export default ScrollProvider;
