import { createContext } from "react";
import { type WeatherContextType } from "../models/WeatherDataModel";

export const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const value = {

    }
    return <WeatherContext.Provider value={value}></WeatherContext.Provider>

}
