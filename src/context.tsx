import { createContext, useState } from "react"

export const SiteContext = createContext<any>(null);

export function SiteCtxProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState("light");

    function handleTheme() {
        setDarkMode((prev: string) => {const themeİnfo = prev === "light" ? "dark" : "light"
         return themeİnfo;});
    }

    return (
        <SiteContext.Provider value={{ darkMode, handleTheme }}>
            {children}
        </SiteContext.Provider>
    );
}