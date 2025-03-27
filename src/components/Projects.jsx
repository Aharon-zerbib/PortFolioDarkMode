import { useEffect, useRef } from "react";
import ProjectVideeoCallofduty from "../img/C​a​l​l​​o​f​​D​u​t​y​.mp4";
import ProjectVideeoCombaMaster from "../img/CombatMaster.mp4";

const Projects = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const playVideos = () => {
      videoRef1.current?.play().catch(() => {});
      videoRef2.current?.play().catch(() => {});
    };

    playVideos();
    document.addEventListener("visibilitychange", playVideos);

    return () => {
      document.removeEventListener("visibilitychange", playVideos);
    };
  }, []);

  return (
    <section className="text-start mt-24 w-full max-w-3xl mx-auto px-4">
      <h2 className="text-lg font-medium text-center md:text-start">
        Projets sélectionnés
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4">
          <video
            ref={videoRef1}
            src={ProjectVideeoCallofduty}
            muted
            playsInline
            loop
           className="w-full h-auto rounded-lg mb-4 bg-black"
          />
          <h3 className="font-bold text-center md:text-start">
            Premier Projet
          </h3>
          <p className="text-gray-500 text-center md:text-start">
            Composants et modèles avancés pour créer de superbes sites Web.
          </p>
        </div>
        <div className="p-4">
          <video
            ref={videoRef2}
            src={ProjectVideeoCombaMaster}
            muted
            playsInline
            loop
            className="w-full max-w-full h-auto rounded-lg mb-4"
          />
          <h3 className="font-bold text-center md:text-start">
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
