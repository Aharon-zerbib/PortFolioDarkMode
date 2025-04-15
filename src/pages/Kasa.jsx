import React from 'react';

import Connect from '../components/Connect';
import image2test from "../img/image.png";
import { Top } from '../components/Top';

export const Kasa = () => {

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-10 font-sans animate-slideDown"> 
        <div className="text-start w-full max-w-3xl mx-auto mt-9">
            <Top    />
             <img
             src={image2test}
             alt="Projet Kasa"
             className="border rounded-lg "
            />
            <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Projet Kasa - Application Web de Location Immobilière</h1>
    <p class="text-gray-500 dark:text-gray-400 row-auto">Ce projet consiste à développer une application web moderne de location immobilière avec React, en mettant l'accent sur la conception front-end et l'expérience utilisateur. Il comprend la création de pages dynamiques, la gestion de données simulées en JSON et l'utilisation de SASS pour un design élégant.</p>
    <p class="text-gray-500 dark:text-gray-400 row-auto mb-9">L'objectif est de bâtir une application fluide et moderne correspondant aux exigences techniques et fonctionnelles spécifiées.</p>

    <h2 class="text-2xl font-semibold mb-3">Technologies à utiliser</h2>
    <ul class="list-disc list-inside text-gray-500 dark:text-gray-400 row-auto mb-4">
        <li class="mb-1">React : Pour construire l'application et gérer l'affichage dynamique.</li>
        <li class="mb-1">React Router : Pour gérer la navigation entre les différentes pages.</li>
        <li class="mb-1">SASS : Pour un style CSS moderne et structuré.</li>
        <li class="mb-1">JSON : Pour simuler les données des annonces immobilières.</li>
    </ul>

    <h3 class="text-xl font-semibold mb-2">Travail à réaliser</h3>
    <ul class="list-disc list-inside text-gray-500 dark:text-gray-400 row-auto mb-4">
        <li class="mb-1">Développer l'interface front-end de l'application en suivant les designs Figma.</li>
        <li class="mb-1">Créer plusieurs pages : page d'accueil, galerie des annonces, page des propriétés.</li>
        <li class="mb-1">Implémenter des animations pour enrichir l'expérience utilisateur.</li>
        <li class="mb-1">Assurer la gestion des erreurs de routage.</li>
    </ul>

    <p class="italic mb-5">"Ce projet permet de démontrer votre maîtrise de React, React Router, SASS, et la création d'une application web moderne avec une navigation fluide."</p>
    <a href="https://github.com/Aharon-zerbib/kasav2" target="_blank" rel="noopener noreferrer">Kaza</a>

</div>

        </div>    
        <Connect></Connect>
        </div>
    );
}
export default Kasa;
