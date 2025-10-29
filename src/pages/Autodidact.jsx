import React from "react";

import Connect from "../components/Connect";
import { Top } from "../components/Top";

const Autodidact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-10 font-sans animate-slideDown">
      <div className="text-start w-full max-w-3xl mx-auto mt-9">
        <Top />
      </div>
      <section className="text-start w-full max-w-3xl mx-auto">
        <div className="font-medium mt-5 mb-3">Autodidacte</div>

        <p className="font-medium text-gray-500 dark:text-gray-400 row-auto mb-4">
          Tout seul, je me suis formé en autodidacte et je suis devenu
          développeur full‑stack. J'apprends en pratique, par des projets
          concrets, et je m'efforce d'apprendre les bons réflexes d'ingénierie.
        </p>

        <div className="font-medium mt-8 mb-3">Mon parcours</div>
        <p className="font-medium text-gray-500 dark:text-gray-400 row-auto mb-4">
          J'ai démarré par des projets front-end puis je me suis naturellement
          intéressé au back-end et aux bases de données. En travaillant sur des
          applications complètes, j'ai construit des compétences solides côté
          serveur, déploiement et architecture.
        </p>

        <div className="font-medium mt-8 mb-3">Technologies</div>
        <ol className="list-decimal list-inside font-medium text-gray-500 dark:text-gray-400 mb-4 space-y-2">
          <li>
            <strong>PHP</strong> — langage serveur classique que j'ai appris
            pour construire des APIs et gérer la logique .
          </li>{" "}
          <li>
            <strong>Node.js</strong> — pour construire des serveurs JavaScript
            et travailler en full‑stack JS.
          </li>{" "}
          <li>
            <strong>Next.js</strong> — pour le rendu côté serveur et la création
            d'applications React performantes et SEO.
          </li>
          <li>
            <strong>Laravel</strong> — framework PHP que j'utilise pour
            organiser des projets, gérer l'ORM, les routes et les middlewares.
          </li>{" "}
          <li>
            <strong>Python</strong> — scripts, automatisation (pas encore
            aboutie à un projet concret).
          </li>{" "}
          <li>
            <strong>C</strong> — (notions) compréhension des fondamentaux bas
            niveau et de la gestion de la mémoire.
          </li>
          <li>
            <strong>MySQL</strong> — base de données relationnelle pour stocker
            et interroger les données de manière fiable.
          </li>{" "}
          <li>
            <strong>MongoDB</strong> — base NoSQL que j'utilise pour des modèles
            de données flexibles et des prototypes rapides.
          </li>
        </ol>

        <div className="font-medium mt-8 mb-3">Points clés</div>
        <ul className="list-disc list-inside font-medium text-gray-500 dark:text-gray-400 mb-6 space-y-1">
          <li>
            Apprentissage par la pratique : projets réels, déploiements, bugs.
          </li>
          <li>Polyvalence : front-end + back-end + bases de données.</li>
          <li>
            Autonomie et rigueur : organisation, documentation, tests simples.
          </li>
          <li>
            Capacité à intégrer de nouveaux outils rapidement selon le besoin.
          </li>
        </ul>

        <Connect />
      </section>
    </div>
  );
};

export default Autodidact;
