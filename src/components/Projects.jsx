
import ProjectVideeoCallofduty from "../img/C​a​l​l​​o​f​​D​u​t​y​.mp4";
import ProjectVideeoCombaMaster from "../img/CombatMaster.mp4";

const Projects = () => {
  return (
      <section className="text-start mt-24 w-full max-w-3xl mx-auto">
           <h2 className="text-lg font-medium">Projets sélectionnés</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5">
              <video 
                src={ProjectVideeoCallofduty} 
                autoPlay 
                loop 
                muted 
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="font-bold">Premier Project</h3>
              <p className="text-gray-500">Composants et modèles avancés pour créer de superbes sites Web.</p>
            </div>
            <div className="p-5">
              <video 
                src={ProjectVideeoCombaMaster} 
                autoPlay 
                loop 
                muted 
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="font-bold">Segond Project</h3>
              <p className="text-gray-500">Kit d'interface utilisateur pour créer de belles interfaces animées.</p>
            </div>
            </div>
          </section>
  );
}
export default Projects;