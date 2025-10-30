import React from "react";

import Connect from "../components/Connect";
import { Top } from "../components/Top";
import ImgCrm from "../img/ImgCrm.png";

export const ClienZen = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-10 font-sans animate-slideDown">
      <div className="text-start w-full max-w-3xl mx-auto mt-9">
        <Top />
        <img src={ImgCrm} alt="Projet Kasa" className="border rounded-lg " />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">
            ClienZen — CRM léger pour micro-entrepreneurs
          </h1>
          <p className="text-gray-500 dark:text-gray-400 row-auto mb-4">
            ClienZen est un CRM pensé pour les micro-entrepreneurs : simple,
            rapide et axé sur l'essentiel pour faciliter la gestion des clients,
            devis et factures sans la complexité des gros outils. L'objectif :
            automatiser les tâches récurrentes et permettre de se concentrer sur
            le coeur du business.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Stack technique</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Le projet utilise une stack moderne et robuste :{" "}
            <strong>Laravel</strong> (back-end), <strong>Inertia</strong> pour
            relier Laravel à l'interface, et <strong>React</strong> avec{" "}
            <strong>TypeScript</strong> côté front. Base de données :{" "}
            <strong>MySQL</strong>. UI/Design : <strong>tailwind</strong>,{" "}
            <strong>shadcn</strong> et outils internes..
          </p>

          <h3 className="text-xl font-semibold mb-2">Fonctionnalités clés</h3>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 row-auto mb-4">
            <li className="mb-1">Suivi avec un tableau de bord synthétique</li>
            <li className="mb-1">
              Suivi de tâches avec un kanban pour gérer les clients et les
              actions
            </li>
            <li className="mb-1">
              Onglet « Facturer » synchronisé avec les fiches clients
            </li>
            <li className="mb-1">
              Agenda intuitif pour les événements et rendez-vous de l'entreprise
            </li>
            <li className="mb-1">
              Onglet « Mon entreprise » pour gérer les informations légales et
              paramètres
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Objectifs utilisateur</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Rendre la gestion client accessible : minimum de clics, processus
            guidés, et une interface qui s'adapte aux petits volumes et aux
            travailleurs indépendants. Priorité à la vitesse, à la clarté et à
            la sécurité des données.
          </p>

          <h3 className="text-xl font-semibold mb-2">Pourquoi cette stack ?</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Laravel + Inertia permet d'avoir une API back-end solide sans gérer
            une API REST séparée. React + TypeScript offre une UI moderne et
            typée. Tailwind + shadcn accélèrent le prototypage UI tout en
            gardant une esthétique cohérente.
          </p>

          <p className="italic mb-5">
            "Un CRM simple, construit pour les indépendants — vite opérationnel,
            facile à maintenir."
          </p>
        </div>
      </div>
      <Connect />
    </div>
  );
};
export default ClienZen;
