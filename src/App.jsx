import './App.css';
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500 font-mono">
      <Navbar/>
      <main className="text-slate-900 dark:text-white">
        <Accueil/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;