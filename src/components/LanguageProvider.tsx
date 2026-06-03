"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "de" | "en";

interface LanguageContextProps {
  language: Language;
}

const LanguageContext = createContext<LanguageContextProps>({ language: "en" });

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Detect device language on mount
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (browserLang === "de") {
      setLanguage("de");
    } else {
      setLanguage("en");
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
};
