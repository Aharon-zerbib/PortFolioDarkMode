import React from "react";
import Connect from "../components/Connect";
import { Top } from "../components/Top";

const MyBlog42 = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-10 font-sans animate-slideDown">
      <div className="text-start w-full max-w-3xl mx-auto mt-9">
        <Top />
      </div>

      <section className="text-start w-full max-w-3xl mx-auto">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">
            Ma piscine 42 : ce que je viens d'apprendre
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Je viens tout juste de finir la piscine 42 et c'était une expérience
            intense et formatrice. Pas de cours traditionnels, pas de notes —
            seulement des projets, des erreurs rapides et beaucoup d'entraide.
            J'ai appris plus en quelques semaines qu'en plusieurs mois de cours
            classiques.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            Apprendre en mode piscine
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            La piscine m'a forcé à sortir de ma zone de confort : chaque projet
            demande de chercher vite, d'échouer, puis de corriger. On n'attend
            pas la théorie parfaite — on construit, on teste, on améliore.
            Concrètement, j'ai dû apprendre à lire la documentation efficacement
            et à demander de l'aide sans hésiter.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Les forces de la pédagogie 42
          </h3>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-4">
            <li className="mb-1">
              Autonomie : j'ai dû gérer mon temps et mes priorités
            </li>
            <li className="mb-1">
              Peer-learning : j'ai énormément appris en aidant et en étant aidé
            </li>
            <li className="mb-1">
              Projets concrets : on voit rapidement le résultat de son code
            </li>
            <li className="mb-1">
              Feedback rapide : les retours m'ont permis de m'améliorer vite
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            Ce que j'ai gagné en compétences
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            J'ai touché à plein de technologies : scripts, shell, algo.
            L'important, ce n'est pas de tout maîtriser, mais d'avoir acquis la
            méthode pour résoudre des problèmes nouveaux rapidement.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Conseils pour tirer parti d'une formation comme 42
          </h3>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-4">
            <li className="mb-1">
              Reste curieux : j'ai souvent dû creuser au-delà des consignes
            </li>
            <li className="mb-1">
              Partage : expliquer aux autres m'a permis de mieux comprendre
            </li>
          </ul>

          <p className="italic mb-5">
            "Apprendre à coder, c'est apprendre à résoudre des problèmes — 42
            t'emmène directement sur le terrain."
          </p>
        </div>

        <Connect />
      </section>
    </div>
  );
};

export default MyBlog42;
