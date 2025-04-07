import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Connect from '../components/Connect';

const UnrealExperience = () => {
  const navigate = useNavigate();
  const click = () => { 
    navigate("/"); 
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-10 font-sans animate-slideDown">    
      <div className="text-start w-full max-w-3xl mx-auto mt-9">
        <h1 className="font-medium cursor-pointer" onClick={click}>
          Aharon Zerbib
        </h1>
        <h2 className="font-medium mt-2 text-gray-500 dark:text-gray-400 mb-9">Développeur Front-End</h2>
      </div> 

      <div className="text-start w-full max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 mt-16">🎮 Unreal Engine – Formations & Projet personnel</h3>

        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Ces derniers mois, j’ai suivi plusieurs formations sur <span className="font-semibold">Unreal Engine</span> pour acquérir une vraie maîtrise du moteur. 
          J’ai travaillé sur des projets d'apprentissage qui m’ont permis de comprendre et de manipuler :
        </p>

        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-500 dark:text-gray-400">
          <li>Le système de <span className="font-semibold">Blueprints</span> pour la logique de gameplay sans coder</li>
          <li>Le <span className="font-semibold">level design</span> : placement des éléments, gestion de l’espace et de l’exploration</li>
          <li>La création de <span className="font-semibold">matériaux</span>, textures, post-processing et lumières</li>
          <li>L’animation, les cinématiques et les transitions caméra</li>
          <li>La mise en place du système d’interaction</li>
          <li>L’optimisation des performances pour assurer un rendu fluide</li>
        </ul>

        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Fort de ces apprentissages, j’ai commencé le développement de mon propre jeu vidéo.
        </p>

        <h4 className="text-lg font-semibold mb-4 mt-16 ">🎬 Mon jeu – Une expérience cinématographique</h4>

        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Il s’agit d’un jeu narratif en <span className="font-semibold">vue à la troisième personne</span>, avec une forte identité visuelle et une atmosphère travaillée. 
          Inspiré des codes du cinéma, je cherche à créer une expérience où l’histoire, l’ambiance et l’émotion sont au cœur du gameplay.
        </p>

        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-500 dark:text-gray-400">
          <li>Une caméra dynamique et cinématographique</li>
          <li>Des environnements immersifs et stylisés</li>
          <li>Une narration visuelle (peu de dialogues, beaucoup de symbolisme)</li>
          <li>Une progression lente mais intense, qui laisse place à l’interprétation</li>
          <li>Un système d’interaction simple mais expressif</li>
          <li>Un univers mystérieux, encore volontairement gardé secret…</li>
        </ul>

        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Ce projet me permet de mêler création artistique et technique, tout en développant mes compétences en autonomie. 
          C’est un véritable défi, mais aussi une passion que je construis jour après jour.
        </p>
      </div>
      <Connect/>
    </div>
  );
}

export default UnrealExperience;
