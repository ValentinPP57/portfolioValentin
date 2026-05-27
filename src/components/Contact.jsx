import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // initialisation pour form
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });
  const [copie, setcopie] = useState(false);

  const CopierEmail = () => {
  navigator.clipboard.writeText("valentin.peupion@epitech.eu");
  setcopie(true);
  
  setTimeout(() => setcopie(false), 2000);
  };

  // état du formulaire
  const ChangeEtat = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Envoie du formulaire
  const EnvoieEmail = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStatus({ loading: false, success: false, error: "Veuillez remplir tous les champs du formulaire." });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    // id connexion emailJS
    const SERVICE_ID = "service_apvil54"; 
    const TEMPLATE_ID = "template_3hbdpe8"; 
    const PUBLIC_KEY = "IN-fy7E_jEJOHvnYJ"; 

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response) => {
        console.log('Succes', response.status, response.text);
        setStatus({ loading: false, success: true, error: null });
        setFormData({ user_name: '', user_email: '', message: '' });
      })
      .catch((err) => {
        console.error('Erreur', err);
        setStatus({ loading: false, success: false, error: "Une erreur est survenue. Veuillez réessayer." });
      });
  };

  return (
    <section id="contact" className="py-24 transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Titre */}
        <h2 className="text-4xl font-bold text-center mb-4 underline decoration-accent underline-offset-8 text-slate-900 dark:text-white">
          Contact
        </h2>
        <p className="text-slate-500 dark:text-neutral-400 text-center mb-16 text-lg">
          Une question, besoin de plus d'informations ? Contactez-moi !
        </p>

        <div className="flex flex-col md:flex-row gap-16 items-start justify-center">
          {/* Liens */}
          <div className="flex flex-col gap-8 md:w-1/3">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Valentin Peupion
              </h3>
              <p className="text-slate-500 dark:text-neutral-400 leading-relaxed text-sm">
                Retrouvez mes liens ci-dessous :
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {/* GitHub */}
              <a href="https://github.com/ValentinPP57" className="flex items-center gap-3 text-slate-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-neutral-800 flex items-center justify-center group-hover:border-accent transition-colors">
                  <img 
                    src="/contact/git_black.svg" 
                    alt="GitHub" 
                    className="w-5 h-5 object-contain dark:invert"
                  />
                </div>
                <span className="text-sm">github.com/ValentinPP57</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/valentin-peupion/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-neutral-800 flex items-center justify-center group-hover:border-accent transition-colors">
                  <img 
                    src="/contact/linkedin_black.svg" 
                    alt="GitHub" 
                    className="w-5 h-5 object-contain dark:invert"
                  />
                </div>
                <span className="text-sm">linkedin.com/in/valentin-peupion/</span>
              </a>

              {/* Email */}
              <button onClick={CopierEmail} type="button" className="flex items-center gap-3 text-slate-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent transition-colors group w-full text-left focus:outline-none">
                <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-neutral-800 flex items-center justify-center group-hover:border-accent transition-colors overflow-hidden">
                  <img 
                    src="/contact/mail_black.svg" 
                    alt="Email" 
                    className="w-5 h-5 object-contain dark:invert"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm">valentin.peupion@epitech.eu</span>
                  {copie && (
                    <span className="text-xs text-green-500 font-medium animate-pulse">
                      email copié
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={EnvoieEmail} className="md:w-2/3 w-full">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <input 
                  type="text" 
                  name="user_name"
                  value={formData.user_name}
                  onChange={ChangeEtat}
                  placeholder="Votre nom..." 
                  className="flex-1 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-accent transition-colors shadow-sm" 
                />
                <input 
                  type="email" 
                  name="user_email"
                  value={formData.user_email}
                  onChange={ChangeEtat}
                  placeholder="Votre email..." 
                  className="flex-1 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-accent transition-colors shadow-sm" 
                />
              </div>
              <textarea 
                rows={5} 
                name="message"
                value={formData.message}
                onChange={ChangeEtat}
                placeholder="Votre message..." 
                className="bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-accent transition-colors resize-none shadow-sm" 
              />

              {status.success && (
                <p className="text-green-500 text-sm font-medium animate-pulse">Votre message a été envoyé</p>
              )}
              {status.error && (
                <p className="text-red-500 text-sm font-medium">{status.error}</p>
              )}

              <button type="submit" disabled={status.loading} className="self-end border-2 border-slate-900 dark:border-white px-10 py-3 rounded-full text-slate-900 dark:text-white font-medium hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-darkBg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {status.loading ? "Envoi en cours..." : "Envoyer"}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-24 pt-8 border-t border-slate-200 dark:border-neutral-800 text-center text-slate-400 dark:text-neutral-600 text-sm">
          Réalisé par Valentin Peupion
        </div>
      </div>
    </section>
  );
};

export default Contact;