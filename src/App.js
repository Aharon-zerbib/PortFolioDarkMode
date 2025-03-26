import "./App.css";
import Header from "./components/header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Connect from "./components/Connect";


import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);



  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-10 font-sans">
     
     <Header/>
     <Projects/>
     <Experience/>
      <Blog/>
      <Connect/>
    </div>
  );
}

export default App;
