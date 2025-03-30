import { useState } from "react";
import ProjectVideeoCallofduty from "../img/C​a​l​l​​o​f​​D​u​t​y​.mp4";
import ProjectVideeoCombaMaster from "../img/CombatMaster.mp4";
import img from "../img/Capture.png";
 
const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openVideo = (video) => {
    setCurrentVideo(video);
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
    setCurrentVideo(null);
  };

  return (
    <section className="text-start mt-24 w-full max-w-3xl mx-auto">
      <h2 className="text-lg font-medium">Projets sélectionnés</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5">
          <img
            src={img}
            alt="Premier Project"
            onClick={() => openVideo(ProjectVideeoCallofduty)}
            className="w-full h-auto rounded-lg mb-4 cursor-pointer"
          />
          <h3 className="font-bold">Premier Project</h3>
          <p className="text-gray-500">Composants et modèles avancés pour créer de superbes sites Web.</p>
        </div>

        <div className="p-5">
          <img
            src={img}
            alt="Segond Project"
            onClick={() => openVideo(ProjectVideeoCombaMaster)}
            className="w-full h-auto rounded-lg mb-4 cursor-pointer"
          />
          <h3 className="font-bold">Segond Project</h3>
          <p className="text-gray-500">Kit d'interface utilisateur pour créer de belles interfaces animées.</p>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeVideo}
        >
          {currentVideo && (
            <video
              src={currentVideo}
              controls
              autoPlay
              className="w-full max-w-full h-auto rounded-lg mx-auto"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default Projects;
