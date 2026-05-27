import { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const Sommaire = [
    { name: "Accueil", href: "#home" },
    { name: "Projets", href: "#projects" },
    { name: "Compétences", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-darkBg/70 transition-colors duration-500 font-mono">
      <div className="w-full px-8 md:px-12 py-4 flex justify-between md:grid md:grid-cols-3 items-center">
        <div className="flex justify-start">
          <h1 className="text-xl font-bold text-accent tracking-wide whitespace-nowrap">Valentin Peupion</h1>
        </div>

        <ul className="hidden md:flex justify-center gap-10 text-slate-900 dark:text-neutral-100 font-bold text-base tracking-wide">
          {Sommaire.map((element) => (
            <li key={element.name}>
              <a href={element.href} className="hover:text-accent dark:hover:text-accent opacity-80 hover:opacity-100 transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">
                {element.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-end">
          <button onClick={() => setDarkMode(!darkMode)} className="p-1.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:ring-2 ring-accent transition-all duration-300 cursor-pointer flex items-center justify-center" aria-label="Toggle Dark Mode">
            {darkMode ? (
              <img src="/light_mode.svg" alt="Mode Clair" className="w-6 h-6 object-contain"/>
            ) : (
              <img src="/dark_mode.svg" alt="Mode Sombre" className="w-6 h-6 object-contain"/>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;