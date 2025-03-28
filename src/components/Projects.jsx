import { useRef, useState, useEffect } from "react";
import ProjectVideeoCallofduty from "../img/C​a​l​l​​o​f​​D​u​t​y​.mp4";
import ProjectVideeoCombaMaster from "../img/CombatMaster.mp4";
import Capture1 from "../img/Capture.png"; // Remplacer avec l'image de prévisualisation du premier projet
import Capture2 from "../img/Capture.png"; 

const Projects = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false); // État pour gérer la lecture de la première vidéo
  const [isPlaying2, setIsPlaying2] = useState(false); // État pour gérer la lecture de la seconde vidéo
  const [isMobile, setIsMobile] = useState(false); // État pour savoir si l'appareil est mobile

  useEffect(() => {
    // Détecter la taille de l'écran pour savoir si c'est un appareil mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Considerer mobile jusqu'à 768px
    };

    checkIfMobile(); // Vérifier lors du chargement initial
    window.addEventListener("resize", checkIfMobile); // Ajouter un écouteur pour le redimensionnement

    return () => {
      window.removeEventListener("resize", checkIfMobile); // Nettoyage de l'événement au démontage du composant
    };
  }, []);

  // Fonction pour jouer la vidéo sur mobile (au clic)
  const playVideo1 = () => {
    if (videoRef1.current) {
      videoRef1.current.play().catch(() => {});
      setIsPlaying1(true);
    }
  };

  const playVideo2 = () => {
    if (videoRef2.current) {
      videoRef2.current.play().catch(() => {});
      setIsPlaying2(true);
    }
  };

  return (
    <section className="text-start mt-24 w-full max-w-3xl mx-auto px-4">
      <h2 className="text-lg font-medium text-center md:text-start">
        Projets sélectionnés
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Premier projet */}
        <div className="p-4">
          <div className="w-full overflow-hidden rounded-lg relative">
            {/* Afficher l'image de prévisualisation jusqu'au clic si c'est mobile */}
            {isMobile && !isPlaying1 && (
              <img
                src={Capture1} // Image de prévisualisation pour le premier projet
                alt="Thumbnail 1"
                className="w-full h-full object-cover cursor-pointer"
                onClick={playVideo1}
              />
            )}
            {/* Si c'est un ordinateur ou si la vidéo est déjà en lecture, afficher la vidéo */}
            {!isMobile || isPlaying1 ? (
              <video
                ref={videoRef1}
                src={ProjectVideeoCallofduty} // Vidéo du premier projet
                muted
                playsInline
                preload="auto"
                loop
                className="w-full h-full"
                autoPlay={true} // Lecture automatique sur ordinateur
              />
            ) : null}
          </div>
          <h3 className="font-bold text-center md:text-start mt-2">
            Premier Projet
          </h3>
          <p className="text-gray-500 text-center md:text-start">
            Composants et modèles avancés pour créer de superbes sites Web.
          </p>
        </div>

        {/* Deuxième projet */}
        <div className="p-4">
          <div className="w-full overflow-hidden rounded-lg relative">
            {/* Afficher l'image de prévisualisation jusqu'au clic si c'est mobile */}
            {isMobile && !isPlaying2 && (
              <img
                src={Capture2} // Image de prévisualisation pour le second projet
                alt="Thumbnail 2"
                className="w-full h-full object-cover cursor-pointer"
                onClick={playVideo2}
              />
            )}
            {/* Si c'est un ordinateur ou si la vidéo est déjà en lecture, afficher la vidéo */}
            {!isMobile || isPlaying2 ? (
              <video
                ref={videoRef2}
                src={ProjectVideeoCombaMaster} // Vidéo du second projet
                muted
                playsInline
                preload="auto"
                loop
                className="w-full h-full"
                autoPlay={true} // Lecture automatique sur ordinateur
              />
            ) : null}
          </div>
          <h3 className="font-bold text-center md:text-start mt-2">
            Second Projet
          </h3>
          <p className="text-gray-500 text-center md:text-start">
            Kit d'interface utilisateur pour créer de belles interfaces animées.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
