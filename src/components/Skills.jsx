import React from 'react';

const SkillsListe = [
  {
    categoryName: 'Hard Skills',
    categoryDescription: 'Mes compétences techniques',
    skills: [
      { name: 'Python', Description: '', icon: '/skills/python.svg' },
      { name: 'HTML', Description: '', icon: '/skills/html.svg' },
      { name: 'CSS | Tailwind', Description: '', icon: '/skills/css.svg'},
      { name: 'JavaScript', Description: '', icon: '/skills/javascript.svg' },
      { name: 'SQL', Description: '', icon: '/skills/sql.svg' },
      { name: 'React', Description: '', icon: '/skills/react.svg'},
      { name: 'Product Design', Description: '', icon: '/skills/design.svg'},
      { name: 'Github', Description: '', icon: '/skills/git_black.svg'},
      { name: 'Docker', Description: '', icon: '/skills/docker.svg'},
      { name: 'Linux | Bash', Description: '', icon: '/skills/linux.svg'},
      { name: 'Anglais', Description: '', icon: '/skills/anglais.svg'},
    ],
  },
  {
    categoryName: 'Soft Skills',
    categoryDescription: 'Mes compétences humaines et relationnelles',
    skills: [
      { name: 'Communication', Description: '', icon: '/skills/communication.svg' },
      { name: 'Travail en Équipe', Description: '', icon: '/skills/team.svg' },
      { name: 'Adaptabilité', Description: '', icon: '/skills/adaptabilite.svg' },
      { name: 'Autonomie', Description: '', icon: '/skills/auto.svg' },
      { name: 'Problem Solving', Description: '', icon: '/skills/problem.svg' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-7xl w-full">
        <h2 className="text-4xl font-extrabold text-center mb-20 tracking-tight text-slate-900 dark:text-white">
          Mes Compétences
        </h2>
        {SkillsListe.map((category, catIndex) => (
          <div key={catIndex} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-semibold text-accent mb-2">
                {category.categoryName}
              </h3>
              <p className="text-slate-500 dark:text-neutral-400 max-w-2xl mx-auto">
                {category.categoryDescription}
              </p>
            </div>

            {/* Grille des skills */}
            <div className="flex flex-wrap gap-8 justify-center">
              {category.skills.map((skill, index) => (
                <div key={index} className="group relative p-6 bg-white dark:bg-darkCard rounded-2xl border border-slate-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/20 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-sm flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-6 p-2.5 flex items-center justify-center bg-white rounded-full border border-slate-100 dark:border-neutral-700 transition-colors group-hover:border-accent overflow-hidden shadow-inner">
                    <img 
                      src={skill.icon}
                      alt={"Logo de ${skill.name}"} 
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="w-full">
                    <h4 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <p className="text-slate-500 dark:text-neutral-400 text-sm font-medium">
                      {skill.Description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;