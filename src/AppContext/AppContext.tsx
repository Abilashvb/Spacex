import React from "react";
import { ILaunch } from "../schemas/launchSchema";

export interface IAppContext {
    siteUrl: string;
    allLaunches: ILaunch[];
}

const AppContext = React.createContext<IAppContext>({
    siteUrl: "",
    allLaunches: []
});

export default AppContext;
