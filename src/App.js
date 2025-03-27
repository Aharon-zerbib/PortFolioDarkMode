import Header from "./components/header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Connect from "./components/Connect";


function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-10 font-sans animate-slideDown">
      <Header />
      <Projects />
      <Experience />
      <Blog />
      <Connect />
    </div>
  );
}

export default App;