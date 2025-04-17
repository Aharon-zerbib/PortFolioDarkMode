import React from "react";

import Connect from "../components/Connect";
import { Top } from "../components/Top";

const MyExperience = () => {
  
 
  
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-10 font-sans animate-slideDown">    
      <div className="text-start w-full max-w-3xl mx-auto mt-9">
        <Top/>
      </div>   
      <section className="text-start w-full max-w-3xl mx-auto">
        <div className="font-medium mt-5 mb-3">À propos de moi</div>
        <p className="font-medium text-gray-500 dark:text-gray-400 row-auto">
          Développeur front-end passionné, je conçois des interfaces modernes et interactives avec un souci du détail et de la performance.
        </p>       

        <div className="font-medium mt-16 mb-3">Formation</div>
        <p className="font-medium text-gray-500 dark:text-gray-400 row-auto mb-2">
          J'ai suivi une formation chez OpenClassrooms en tant que Développeur Front-End. J'y ai acquis des compétences solides en HTML, CSS, JavaScript, React, Vite, et Tailwind CSS. Cette formation m’a permis de créer des applications web dynamiques, accessibles et optimisées pour tous les écrans.
        </p>  

        <div className="font-medium mt-16 mb-3">Compétences Acquises</div>
        <ul className="list-disc list-inside font-medium text-gray-500 dark:text-gray-400 mb-2">
          <li>HTML5, CSS3, JavaScript</li>
          <li>React, Vite, Tailwind CSS</li>
          <li>Git/GitHub </li>
          <li>Accessibilité Web et SEO</li>
          <li>Testing avec Jest</li>
        </ul>

        <div className="font-medium mt-16 mb-3">Projets Réalisés</div>
        <ul className="list-disc list-inside font-medium text-gray-500 dark:text-gray-400 mb-2">
  <li>
    <a href="https://github.com/Aharon-zerbib/sk8_open" target="_blank" rel="noopener noreferrer">
      Riding Cities 
    </a>
  </li>
  <li>
    <a href="https://github.com/Aharon-zerbib/booki_" target="_blank" rel="noopener noreferrer">Booki</a>
  </li>
  <li>
    <a href="https://github.com/Aharon-zerbib/ohmyfood_2-master" target="_blank" rel="noopener noreferrer">OhmyFood</a>
  </li>
  <li>
    <a href="https://github.com/Aharon-zerbib/p5__V2" target="_blank" rel="noopener noreferrer">Print In</a>
  </li>
  <li>
    <a href="https://github.com/Aharon-zerbib/sfb" target="_blank" rel="noopener noreferrer">Sofi Blueu</a>
  </li>
  <li>
    <a href="" target="_blank" rel="noopener noreferrer">Qwenta</a>
  </li>
  <li>
    <a href="https://github.com/Aharon-zerbib/kasav2" target="_blank" rel="noopener noreferrer">Kaza</a>
  </li>
  <li>
    <a href="https://github.com/Aharon-zerbib/Nina-Carducci" target="_blank" rel="noopener noreferrer">NinaCduci</a>
  </li>
  <li>
    <a href="https://github.com/Aharon-zerbib/724events" target="_blank" rel="noopener noreferrer">724events</a>
  </li>
  <li >
  <a href="https://github.com/Aharon-zerbib/ArgentBankFront" target="_blank" rel="noopener noreferrer"> ArgentBankFront</a>
  </li>
</ul>


        <div className="font-medium mt-16 mb-3">Maintenant</div>
        <p className="font-medium text-gray-500 dark:text-gray-400 row-auto mb-2">
          Je travaille sur des projets personnels pour perfectionner mes compétences et explorer de nouvelles technologies comme TypeScript et Angular. En freelance, j'aide mes clients à créer des sites web performants et esthétiques, en optimisant l’expérience utilisateur et la réactivité.
        </p>
        <p className="font-medium text-gray-500 dark:text-gray-400 row-auto mb-3">
          En parallèle, je me tiens informé des dernières tendances du développement web et j’échange avec la communauté tech pour toujours progresser.
        </p>
        <p className="font-medium text-gray-500 dark:text-gray-400 row-auto ">
          Suivez-moi pour découvrir mes projets et collaborations ! 🚀
        </p>
        <Connect/>
    
      </section>
    </div>
  );
}  

export default MyExperience;
