import React from 'react';
import Connect from '../components/Connect';
import { Top } from '../components/Top';


export const MyBlog = () => {

    return ( 
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-10 font-sans animate-slideDown"> 
        <div className="text-start w-full max-w-3xl mx-auto mt-9">
            <Top    />  
        </div>   
        <section className="text-start w-full max-w-3xl mx-auto">
       <div class="p-6 ">
    <h1 class="text-3xl font-bold  mb-4">Comment l'IA change notre façon de concevoir</h1>
    <p class="text-gray-500 dark:text-gray-400 row-auto ">L'intelligence artificielle (IA) est en train de transformer radicalement le développement logiciel. Autrefois, coder demandait des heures de travail, des tests minutieux et une grande expertise technique. 
        </p>
        <p class="text-gray-500 dark:text-gray-400 row-auto mb-9 ">Aujourd'hui, l'IA peut générer des lignes de code, proposer des solutions optimisées et même anticiper les besoins des développeurs.
        </p>
    
    <h2 class="text-2xl font-semibold  mb-3">Une révolution du développement avec une seule ligne de code</h2>
    <p class="text-gray-500 dark:text-gray-400 row-auto ">Les nouveaux outils basés sur l'IA, comme GitHub Copilot ou ChatGPT, permettent de générer du code en répondant à une simple instruction en langage naturel.</p>
      <p class="text-gray-500 dark:text-gray-400 row-auto  mb-4"> Plus besoin d'écrire ligne par ligne : </p>
      <p class="italic mb-9 ">  "il suffit d'une requête pour obtenir une fonction complète et optimisée."</p>


    <h3 class="text-xl font-semibold  mb-2">Des gains de productivité</h3>
    <ul class="list-disc list-inside text-gray-500 dark:text-gray-400 row-auto mb-4">
        <li className="mb-1">Automatisant l'écriture de code répétitif</li>
        <li className="mb-1">Proposant des suggestions intelligentes</li>
        <li className="mb-1">Corrigeant automatiquement les erreurs</li>
        <li className="mb-9">Optimisant les performances des algorithmes</li>
    </ul>
    
    <h3 class="text-xl font-semibold  mb-2">Une collaboration homme-machine</h3>
    <p class="text-gray-500 dark:text-gray-400 row-auto ">Loin de remplacer les développeurs, l'IA agit comme un copilote, permettant aux équipes de se concentrer sur des aspects plus stratégiques du développement : </p>
    <p class="text-gray-500 dark:text-gray-400 row-auto mb-9">architecture logicielle, sécurité, expérience utilisateur, etc.</p>
    <h3 class="text-xl font-semibold  mb-2">Quelles perspectives ?</h3>
    <p class="text-gray-500 dark:text-gray-400 row-auto mb-4">L'IA continue d'évoluer et pourrait bientôt permettre de créer des applications entrières à partir de simples descriptions. Elle ouvre la voie à un développement plus rapide, plus accessible et plus performant.</p>
    
    <p class=" italic mb-5">"L'avenir du développement logiciel est déjà en train de s'écrire, et l'IA en est le moteur principal."</p>
   
    </div>
  <Connect />
        
       </section>
    </div>
    )
}
