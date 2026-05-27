import React, { useState, useEffect } from 'react';

const Accueil = () => {
  // liste des phrases à afficher sur le pc
  const sequences = [
    'print("Hello world")',
    "const name = 'Valentin';",
  ];

  const [currentText, setCurrentText] = useState('');
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const dateDeNaissance = "2007-10-24";

  // Calcul age
  const calculerAge = (dateNaissance) => {
  const aujourdHui = new Date();
  const naissance = new Date(dateNaissance);
  
  let age = aujourdHui.getFullYear() - naissance.getFullYear();
  const moisDiff = aujourdHui.getMonth() - naissance.getMonth();
  
  if (moisDiff < 0 || (moisDiff === 0 && aujourdHui.getDate() < naissance.getDate())) {
    age--;
  }
  
  return age;
  };
  const age = calculerAge(dateDeNaissance);

  // effet écriture
  useEffect(() => {
    const currentSequence = sequences[sequenceIndex];
    let timer;

    if (!isDeleting && charIndex < currentSequence.length) {
      // Écriture
      timer = setTimeout(() => {
        setCurrentText((prev) => prev + currentSequence[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80); // Vitesse d'écriture
    } else if (isDeleting && charIndex > 0) {
      // Suppression
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 40); // Vitesse de suppression
    } else if (!isDeleting && charIndex === currentSequence.length) {
      // Pause quand phrase écrite
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      // phrase suivante
      setIsDeleting(false);
      setSequenceIndex((prev) => (prev + 1) % sequences.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, sequenceIndex]);

  return (
    <section id="home" className="min-h-screen px-6 md:px-16 flex items-center justify-center pt-24 pb-12 bg-lightBg dark:bg-darkBg transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Texte */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl md:text-6xl font-mono font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
            Valentin Peupion
          </h1>
          
          <p className="md:text-2xl text-xl text-slate-900 dark:text-neutral-200 text-lg mb-8 max-w-lg leading-20 font-mono">
            <span className="md:text-3xl font-bold font-serif block">Bienvenue sur mon protfolio !</span> <br className="hidden md:block" />
            je suis <span className="font-bold">Valentin Peupion</span>, j'ai {age} ans et je suis actuellement étudiant en Bachelor à Epitech.
          </p>
          
          <a href="/CV Valentin Peupion.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-slate-900 dark:border-white px-8 py-3 rounded-full 
            text-slate-900 dark:text-white
            hover:bg-slate-900 hover:text-white 
            dark:hover:bg-white dark:hover:text-darkBg 
            transition-all duration-300 font-medium mb-6 inline-block">
            Voir mon CV
          </a>
          
          <p className="text-sm text-slate-400 dark:text-neutral-500 italic">
            Découvrez mes projets et mes compétences ci-dessous
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <div className="relative w-full max-w-[550px] aspect-[4/3] flex items-center justify-center">
            <img 
              src={"${import.meta.env.BASE_URL}pc.png"} 
              alt="Illustration PC Portable" 
              className="absolute w-[90%] h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(45,212,191,0.15)]"
            />

            {/* zone de texte écran*/}
            <div className="absolute top-[5%] left-[34%] w-[51.5%] h-[35%] flex items-center justify-start pl-4 font-mono text-[2.2vw] sm:text-[11px] md:text-[10px] lg:text-[13px] text-accent font-semibold select-none pointer-events-none transform skew-y-[+6deg] skew-x-[-5deg] rotate-[-1deg]">
              <div className="w-full text-left tracking-wide whitespace-pre">
                <span>{currentText}</span>
                <span className="animate-pulse text-white ml-0.5">|</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;