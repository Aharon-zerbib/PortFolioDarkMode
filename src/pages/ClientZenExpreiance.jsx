import React from "react";

import Connect from "../components/Connect";
import { Top } from "../components/Top";

const ClientZenExpreiance = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-10 font-sans animate-slideDown">
      <div className="text-start w-full max-w-3xl mx-auto mt-9">
        <Top />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">
            ClientZen — Pourquoi ce CRM
          </h1>

          <p className="text-gray-500 dark:text-gray-400 row-auto mb-4">
            Sur cette page je présente la genèse du projet ClientZen. J'avais
            besoin d'un CRM adapté à mon travail et je n'ai pas trouvé sur le
            marché d'outil qui corresponde à mes besoins : soit trop complexe,
            soit pas assez personnalisable. C'est pourquoi j'ai décidé de
            développer un CRM sur mesure en m'appuyant sur le framework
            <strong> Laravel</strong> , afin d'avoir un back-end robuste et
            sécurisé.
          </p>

          <h3 className="text-xl font-semibold mb-2">Stack proposée</h3>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 row-auto mb-4">
            <li className="mb-1">
              Back-end : <strong>Laravel</strong>
            </li>
            <li className="mb-1">
              Base de données : <strong>MySQL</strong>
            </li>
            <li className="mb-1">
              Front : <strong>React</strong> + Tailwind
            </li>
            <li className="mb-1">Authentification et permissions</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Objectifs</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Créer un CRM accessible et maintenable : gestion des contacts, suivi
            des opportunités, génération de documents (devis/factures) et
            export/import. Priorité à l'ergonomie pour que l'outil soit
            utilisable dès le premier jour par une petite équipe.
          </p>

          <p className="italic mb-5">
            Note : Ce projet est en cours de développement.
          </p>
        </div>
      </div>
      <Connect />
    </div>
  );
};

export default ClientZenExpreiance;
