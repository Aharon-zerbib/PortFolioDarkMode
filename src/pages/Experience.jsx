import React from "react";
import { useNavigate } from "react-router-dom";



const MyExperience = () => {
  
  
  const navigate = useNavigate();
  const click = () => { 
    navigate("/"); 
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-10 font-sans">    
      <div className="text-start w-full max-w-3xl mx-auto">
        <h1 className="font-medium cursor-pointer" onClick={click}>
          Aharon Zerbib
        </h1>
        <h2 className="font-medium mt-2 text-gray-500 mb-9">Développeur Front-End</h2>
      </div>   
      <section className="text-start w-full max-w-3xl mx-auto">
        <div className="font-medium mt-5 mb-3">À propos de moi</div>
        <p className="font-medium text-gray-500 dark:text-gray-400 row-auto">
          Développeur front-end passionné, je conçois des interfaces modernes et interactives avec un souci du détail et de la performance.
        </p>       
        <div className="font-medium mt-16 mb-3">Formation</div>
        <p className="font-medium text-gray-500 dark:text-gray-400 row-auto mb-2">
          J'ai suivi une formation chez OpenClassrooms, où j'ai acquis des compétences solides en HTML, CSS, JavaScript et en frameworks modernes comme React et Vite. Cette formation m’a permis d’apprendre à créer des applications web dynamiques, accessibles et optimisées pour tous les écrans.
        </p>  
        <div className="font-medium mt-16 mb-3">Maintenant</div>
        <p className="font-medium text-gray-500 dark:text-gray-400 row-auto mb-2">
          Je travaille sur des projets personnels pour perfectionner mes compétences et explorer de nouvelles technologies comme React, Vite et Tailwind CSS. J’expérimente également avec des outils comme TypeScript et des solutions backend comme MongoDb pour enrichir mes connaissances.
        </p>
        <p className="font-medium text-gray-500 dark:text-gray-400 row-auto">
          En freelance, j’aide mes clients à créer des sites web performants et esthétiques, en optimisant l’expérience utilisateur et la réactivité. Je prends en charge le design et le développement front-end, en veillant à proposer des interfaces fluides et intuitives.
        </p>
        <p className="font-medium text-gray-500 dark:text-gray-400 row-auto mb-2">
          En parallèle, je me tiens informé des dernières tendances du développement web et j’échange avec la communauté tech pour toujours progresser.
        </p>
        <p className="font-medium text-gray-500 dark:text-gray-400 row-auto">
          Suivez-moi pour découvrir mes projets et collaborations ! 🚀
        </p>
        <div className="mt-4  space-x-6 ">
          <a href="https://github.com/Aharon-zerbib" className="hover:text-gray-400">Github</a>
          <a href="https://www.linkedin.com/in/aharon-zerbib-911bb6276/" className="hover:text-gray-400">LinkedIn</a>
         
        </div>
    
      </section>
    </div>
  );
}  

export default MyExperience;