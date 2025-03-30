import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppRoutes from "./routes";

const Root = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // D'abord, essayer de récupérer le thème depuis localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // Si un thème est sauvegardé, l'utiliser
      setTheme(savedTheme);
    } else {
      // Sinon, détecter la préférence système
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
      // Sauvegarder cette préférence initiale
      localStorage.setItem('theme', theme === 'dark' ? 'dark' : 'light');
    }
    
    // Ajouter un écouteur pour détecter les changements de localStorage
    const handleStorageChange = (e) => {
      if (e.key === 'theme') {
        setTheme(e.newValue);
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Nettoyage
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    // Ne rien faire si le thème est null (chargement initial)
    if (theme === null) return;
    
    // Appliquer le thème à l'élément HTML
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "system") {
      // Si le thème est 'system', utiliser la préférence système
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      // Ajouter un écouteur pour les changements de préférence système
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleMediaChange = () => {
        if (theme === 'system') {
          if (mediaQuery.matches) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }
      };
      
      mediaQuery.addEventListener('change', handleMediaChange);
      
      // Nettoyage
      return () => {
        mediaQuery.removeEventListener('change', handleMediaChange);
      };
    }
  }, [theme]);

  return <AppRoutes />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

reportWebVitals();