import React from 'react';
import { useNavigate } from 'react-router-dom';
import Connect from '../components/Connect';
import image2test from "../img/Capture1test.png";

 const Sofi = () => {
const navigate = useNavigate();
const click = () => {
    navigate("/");
}

    return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-10 font-sans animate-slideDown"> 
    <div className="text-start w-full max-w-3xl mx-auto mt-9">
        <h1 className="font-medium cursor-pointer" onClick={click}>
         Nom de l'architecte
        </h1>
        <h2 className="font-medium mt-2 text-gray-300 mb-9">Architecte d'intérieur</h2>
        <img
        src={image2test}
         alt="Premier Project"
        className="border rounded-lg "
        />
   <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Projet Portfolio - Création d'un Site Dynamique</h1>
    <p class="text-gray-500 dark:text-gray-400 row-auto">Ce projet consiste à concevoir un portfolio dynamique pour une architecte d'intérieur, intégrant une galerie interactive de projets, une page de connexion pour l'administration, et une interface intuitive pour ajouter ou supprimer des projets en temps réel.</p>
    <p class="text-gray-500 dark:text-gray-400 row-auto mb-9">Le but est de démontrer des compétences en conception d'interfaces modernes, gestion de données via API, et création d'une expérience utilisateur fluide et responsive.</p>

    <h2 class="text-2xl font-semibold mb-3">Une Interface Élégante et Intuitive</h2>
    <p class="text-gray-500 dark:text-gray-400 row-auto">L'application est conçue pour offrir une expérience utilisateur agréable, permettant une navigation fluide entre les sections de la galerie et la gestion des projets.</p>
    <p class="text-gray-500 dark:text-gray-400 row-auto mb-4">L'administration peut facilement ajouter, modifier ou supprimer des projets sans recharger la page, garantissant une interface dynamique et réactive.</p>
    <p class="italic mb-9">"L'objectif est de présenter un portfolio moderne qui reflète la créativité et le professionnalisme de l'architecte."</p>

    <h3 class="text-xl font-semibold mb-2">Fonctionnalités Principales</h3>
    <ul class="list-disc list-inside text-gray-500 dark:text-gray-400 row-auto mb-4">
        <li class="mb-1">Affichage dynamique des projets avec filtrage par catégorie</li>
        <li class="mb-1">Authentification de l'administrateur via une page de connexion sécurisée</li>
        <li class="mb-1">Ajout, modification et suppression de projets en temps réel</li>
        <li class="mb-9">Design responsive compatible avec desktop et mobile</li>
    </ul>

    <h3 class="text-xl font-semibold mb-2">Technologies Utilisées</h3>
    <p class="text-gray-500 dark:text-gray-400 row-auto">Les technologies suivantes ont été utilisées pour garantir une expérience fluide et un rendu visuel attrayant :</p>
    <ul class="list-disc list-inside text-gray-500 dark:text-gray-400 row-auto mb-4">
        <li class="mb-1">HTML/CSS pour structurer et styliser la page</li>
        <li class="mb-1">JavaScript pour l'interaction avec l'API</li>
        <li class="mb-9">API  pour la gestion des données côté serveur</li>
    </ul>

    <h3 class="text-xl font-semibold mb-2">Objectifs du Projet</h3>
    <p class="text-gray-500 dark:text-gray-400 row-auto mb-4">Ce projet met en avant des compétences en développement Front-End, en création d'interfaces dynamiques, et en interaction avec une API pour une gestion efficace des projets.</p>

    <p class="italic mb-5">"L'objectif final est de présenter un portfolio professionnel qui illustre les compétences et les réalisations de l'architecte."</p>
</div>

        </div>    
        <Connect></Connect>
        </div>
    );
}
export default Sofi;
