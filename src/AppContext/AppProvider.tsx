import React, { useEffect, useState } from "react";
import { ILaunch } from "../schemas/launchSchema";
import { getAllLaunches } from "../services/launchServices";
import AppContext from "./AppContext";

const AppProvider: React.FC<IProps> = (props) => {

  const [allLaunches, setAllLaunches] = useState<ILaunch[]>([]);

  useEffect(() => {
    getAllLaunches().then(res => {
      setAllLaunches(res);
    })
  }, [])

  return (
    <AppContext.Provider
      value={{
        siteUrl: props.siteUrl,
        allLaunches
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export interface IProps {
  siteUrl: string;
}
