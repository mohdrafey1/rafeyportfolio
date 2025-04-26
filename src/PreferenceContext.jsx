import React, { createContext, useContext, useState, useEffect } from "react";

const PreferenceContext = createContext();

export function PreferenceProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isOldUI, setIsOldUI] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        // const storedUIPreference = localStorage.getItem("uiPreference");

        if (storedTheme === "dark") setIsDarkMode(true);
        // if (storedUIPreference === "old") setIsOldUI(true);

        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        // localStorage.setItem("uiPreference", isOldUI ? "old" : "new");
    }, [isDarkMode, isOldUI, mounted]);

    return (
        <PreferenceContext.Provider
            value={{ isDarkMode, setIsDarkMode, isOldUI, setIsOldUI, mounted }}
        >
            {children}
        </PreferenceContext.Provider>
    );
}

export function usePreference() {
    return useContext(PreferenceContext);
}
