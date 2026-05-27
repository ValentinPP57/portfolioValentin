import React, { useRef, useEffect, useState } from 'react';

const Projects = () => {
  // scroll pour les 3 catégories
  const scrollEpitech = useRef(null);
  const scrollPro = useRef(null);
  const scrollPerso = useRef(null);

  const [ProjetSelectionne, setProjetSelectionne] = useState(null);
  const [indexImages, setindexImages] = useState(0);
  
  // etat des tags et filtres
  const [activeTagEpitech, setActiveTagEpitech] = useState(null);
  const [activeTagPro, setActiveTagPro] = useState(null);
  const [activeTagPerso, setActiveTagPerso] = useState(null);
  const [FiltresEpitech, setFiltresEpitech] = useState(false);
  const [FiltresPro, setFiltresPro] = useState(false);
  const [FiltresPerso, setFiltresPerso] = useState(false);

  // Liste projets
  const listeProjets = [
    // Epitech
    {
      id: 1,
      title: "Wading Pool Python",
      date: "Octobre 2025",
      shortDesc: "'Piscine' Python de début d'année à Epitech",
      longDesc: "",
      tags: ["Epitech", "Python"],
      category: "Python",
      type: "epitech",
      images: []
    },
    {
      id: 2,
      title: "Wading Pool Web",
      date: "Octobre 2025",
      shortDesc: "'Piscine' Web de début d'année à Epitech",
      longDesc: "",
      tags: ["Epitech", "Web", "HTML", "php"],
      category: "Web",
      type: "epitech",
      images: []
    },
    {
      id: 3,
      title: "E-ToDo",
      date: "Novembre 2025",
      shortDesc: "Création d'une application web de gestion de tâches",
      longDesc: "",
      tags: ["Epitech", "HTML", "CSS", "Javascript", "SQL", "React"],
      category: "Application web",
      type: "epitech",
      images: [
        `${import.meta.env.BASE_URL}images/etodo/etodo_dark.png`,
        `${import.meta.env.BASE_URL}images/etodo/etodo_light.png`,
      ]
    },
    {
      id: 4,
      title: "Hack & Juice",
      date: "Decembre 2025",
      shortDesc: "Capture the flag sur le Juice Shop de l'OWASP",
      longDesc: "",
      tags: ["Epitech", "Cybersécurité"],
      category: "Cybersécurité",
      type: "epitech",
      images: [
        `${import.meta.env.BASE_URL}images/hackandjuice/hackandjuice.png`,
        `${import.meta.env.BASE_URL}images/hackandjuice/hackandjuice2.png`,
        `${import.meta.env.BASE_URL}images/hackandjuice/hackandjuice3.png`,
      ]
    },
    {
      id: 5,
      title: "Hackathon Shifters",
      date: "janvier 2026",
      shortDesc: "Hackathon pour l'association des Shifters, product design d'une app web",
      longDesc: "",
      tags: ["Epitech", "Web"],
      category: "Product Design",
      type: "epitech",
      images: [
        `${import.meta.env.BASE_URL}images/shifters/shifters.png`,
        `${import.meta.env.BASE_URL}images/shifters/shiftersfeed.png`,
        `${import.meta.env.BASE_URL}images/shifters/shiftersprofil.png`,
        `${import.meta.env.BASE_URL}images/shifters/shiftersanalytics.png`,
      ]
    },
    {
      id: 6,
      title: "YOWL",
      date: "janvier 2026",
      shortDesc: "Création dU MVP d'un réseau social original",
      longDesc: "",
      tags: ["Epitech", "Web", "HTML"],
      category: "Product Design",
      type: "epitech",
      images: [
        `${import.meta.env.BASE_URL}images/yowl/wivalzi.png`,
        `${import.meta.env.BASE_URL}images/yowl/persona_Mike.png`,
        `${import.meta.env.BASE_URL}images/yowl/persona_Charlotte.png`,
      ]
    },
    {
      id: 7,
      title: "",
      date: "",
      shortDesc: "",
      longDesc: "",
      tags: [""],
      category: "",
      type: "pro", 
      images: []
    },
    {
      id: 8,
      title: "",
      date: "",
      shortDesc: "",
      longDesc: "",
      tags: [""],
      category: "",
      type: "perso", 
      images: []
    },
  ];

  // Séparation par catégories
  const tousEpitech = listeProjets.filter(p => p.type === "epitech");
  const tousPro = listeProjets.filter(p => p.type === "pro");
  const tousPerso = listeProjets.filter(p => p.type === "perso");

  // Filtres pour chaque catégories
  const projetsEpitech = activeTagEpitech ? tousEpitech.filter(p => p.tags.includes(activeTagEpitech)) : tousEpitech;
  const projetsPro = activeTagPro ? tousPro.filter(p => p.tags.includes(activeTagPro)) : tousPro;
  const projetsPerso = activeTagPerso ? tousPerso.filter(p => p.tags.includes(activeTagPerso)) : tousPerso;

  // bloque le scroll
  useEffect(() => {
    document.body.style.overflow = ProjetSelectionne ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [ProjetSelectionne]);

  useEffect(() => {
    setindexImages(0);
  }, [ProjetSelectionne]);

  const imageSuivante = (e) => {
    e.stopPropagation();
    setindexImages((prev) => (prev + 1) % ProjetSelectionne.images.length);
  };

  const imagePrecedente = (e) => {
    e.stopPropagation();
    setindexImages((prev) => (prev - 1 + ProjetSelectionne.images.length) % ProjetSelectionne.images.length);
  };

  // scroll horizontal
  const ScrollHorizontal = (ref) => {
    const el = ref.current;
    if (!el) return;
    let isScrolling = false;

    const Molette = (e) => {
      if (e.deltaY === 0 || isScrolling) return;
      const End = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
      const Start = el.scrollLeft <= 5;

      // on scroll si on est pas aux extremités
      if ((e.deltaY > 0 && !End) || (e.deltaY < 0 && !Start)) {
        e.preventDefault();
        e.stopPropagation();
        isScrolling = true;

        // distance du scroll
        const card = el.querySelector('div');
        if (!card) return;
        const cardWidth = card.offsetWidth + 32;
        const direction = e.deltaY > 0 ? 1 : -1;
        el.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
        setTimeout(() => { isScrolling = false; }, 500);
      }
    };

    el.addEventListener("wheel", Molette, { passive: false });
    return () => el.removeEventListener("wheel", Molette);
  };

  useEffect(() => {
    const cleanEpitech = ScrollHorizontal(scrollEpitech);
    const cleanPro = ScrollHorizontal(scrollPro);
    const cleanPerso = ScrollHorizontal(scrollPerso);
    return () => {
      if (cleanEpitech) cleanEpitech();
      if (cleanPro) cleanPro();
      if (cleanPerso) cleanPerso();
    };
  }, [activeTagEpitech, activeTagPro, activeTagPerso]);

  // affichage des trois rangés
  const renderProjectRow = (title, ref, filteredList, fullList, activeTag, setActiveTag, showFilters, setShowFilters) => {
    const tagsCategorie = [...new Set(fullList.flatMap(p => p.tags))].filter(tag => tag && tag.trim() !== "");

    if (fullList.length === 0) return null;

    return (
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-l-4 border-accent pl-3">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-neutral-200">
            {title} <span className="text-sm font-normal text-slate-400">({filteredList.length})</span>
          </h3>
          <button onClick={() => setShowFilters(!showFilters)}
            className={`text-xs px-4 py-2 rounded-full font-medium transition-all cursor-pointer border shadow-sm ${
              showFilters || activeTag
                ? "bg-accent/10 border-accent text-accent"
                : "bg-white dark:bg-neutral-800 border-slate-200 dark:border-neutral-700 text-slate-600 dark:text-neutral-400"
            }`}>
            {activeTag ? `Filtre : ${activeTag} ✕` : showFilters ? "Masquer les filtres" : "Filtrer"}
          </button>
        </div>

        {showFilters && tagsCategorie.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6 p-4 bg-slate-50 dark:bg-neutral-900/50 rounded-2xl border border-slate-100 dark:border-neutral-800/60 animate-fade-in">
            <button
              onClick={() => { setActiveTag(null); setShowFilters(false); }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                !activeTag 
                  ? "bg-slate-900 text-white dark:bg-white dark:text-darkBg"
                  : "bg-white dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 text-slate-600 dark:text-neutral-300"
              }`}>
              Tous
            </button>
            {tagsCategorie.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${
                  activeTag === tag
                    ? "bg-accent border-accent text-white dark:text-darkBg font-bold"
                    : "bg-white dark:bg-neutral-800 border-slate-200 dark:border-neutral-700 text-slate-600 dark:text-neutral-300 hover:border-accent"
                }`}>
                {tag}
              </button>
            ))}
          </div>
        )}

        {filteredList.length === 0 ? (
          <div className="text-sm text-slate-400 dark:text-neutral-500 italic pl-4 py-4">
            Aucun projet ne correspond à ce filtre
          </div>
        ) : (
          <div className="relative group">
            <div ref={ref} tabIndex={0} className="flex overflow-x-auto gap-8 pb-6 px-4 snap-x snap-mandatory custom-scrollbar focus:outline-none">
              {filteredList.map((project) => (
                <div 
                  key={project.id} 
                  onClick={() => setProjetSelectionne(project)}
                  className="min-w-[85%] sm:min-w-[400px] md:min-w-[450px] snap-center bg-lightCard dark:bg-darkCard rounded-[30px] p-8 border border-slate-300/70 dark:border-neutral-800 shadow-md dark:shadow-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <span className="text-xs text-slate-400 dark:text-neutral-500 mb-2 font-mono">{project.date}</span>
                  <h4 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h4>
                  <p className="text-slate-500 dark:text-neutral-400 mb-1 font-light line-clamp-2">{project.shortDesc}</p>
                  <p className="text-accent text-sm mb-6 font-mono">{project.tags.filter(t => t).join(' | ') || "Aucun tag"}</p>
                  <div className="w-full aspect-video bg-slate-100 dark:bg-neutral-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 relative mt-auto">
                    {project.images && project.images.length > 0 ? (
                      <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-neutral-600 font-mono text-xs">
                        [ Pas d'images disponible ]
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-full bg-gradient-to-l from-lightBg dark:from-darkBg to-transparent pointer-events-none md:hidden"></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 transition-colors duration-500 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-20 underline decoration-accent underline-offset-8 text-slate-900 dark:text-white">
          Mes Projets
        </h2>
        {renderProjectRow("Projets Epitech", scrollEpitech, projetsEpitech, tousEpitech, activeTagEpitech, setActiveTagEpitech, FiltresEpitech, setFiltresEpitech)}
        {renderProjectRow("Expériences Professionnelles", scrollPro, projetsPro, tousPro, activeTagPro, setActiveTagPro, FiltresPro, setFiltresPro)}
        {renderProjectRow("Projets Personnels", scrollPerso, projetsPerso, tousPerso, activeTagPerso, setActiveTagPerso, FiltresPerso, setFiltresPerso)}
      </div>

      {/* Carte ouverte */}
      {ProjetSelectionne && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 md:p-8 animate-fade-in" onClick={() => setProjetSelectionne(null)}>
          <div className="bg-white dark:bg-neutral-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[35px] p-6 md:p-12 border border-slate-200 dark:border-neutral-800 shadow-2xl relative transform scale-100 transition-all duration-300 flex flex-col gap-8 custom-scrollbar"
            onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setProjetSelectionne(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-slate-500 dark:text-neutral-400 hover:text-accent dark:hover:text-accent transition-colors cursor-pointer text-xl font-bold z-10">
              ✕
            </button>
            <div>
              <div className="flex items-center gap-3">
                {ProjetSelectionne.category && (
                  <span className="text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/10 rounded-full">
                    {ProjetSelectionne.category}
                  </span>
                )}
                <span className="text-xs text-slate-400 dark:text-neutral-500 font-mono">
                  {ProjetSelectionne.date}
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
                {ProjetSelectionne.title || "Sans titre"}
              </h3>
              <p className="text-accent font-mono text-sm mt-2">{ProjetSelectionne.tags.filter(t => t).join(' | ')}</p>
            </div>
            <div className="w-full h-64 md:h-[500px] bg-slate-100 dark:bg-neutral-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 relative group/carousel shadow-inner flex items-center justify-center">
              {ProjetSelectionne.images && ProjetSelectionne.images.length > 0 ? (<>
                  <img src={ProjetSelectionne.images[indexImages]} alt={`Slide ${indexImages}`} className="w-full h-full object-contain transition-all duration-300" />
                  {ProjetSelectionne.images.length > 1 && (<>
                      <button onClick={imagePrecedente} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-accent transition-colors cursor-pointer text-lg">❮</button>
                      <button onClick={imageSuivante} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-accent transition-colors cursor-pointer text-lg">❯</button>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {ProjetSelectionne.images.map((_, idx) => (
                          <div key={idx} className={`w-2.5 h-2.5 rounded-full transition-all ${idx === indexImages ? 'bg-accent w-5' : 'bg-white/50'}`} />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="text-slate-400 dark:text-neutral-600 font-mono text-sm">Aucunes images disponible</div>
              )}
            </div>
            <div className="text-slate-600 dark:text-neutral-300 space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-xl">À propos du projet :</h4>
              <p className="text-lg leading-relaxed font-light">{ProjetSelectionne.longDesc || "Pas de description renseignée pour le moment."}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;