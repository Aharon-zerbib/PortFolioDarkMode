import { useNavigate } from "react-router-dom"; // Import de useNavigate
import image2test from "../img/image.png";
import ImgCrm from "../img/ImgCrm.png";
//import Capture1test from "../img/Capture1test.png";

const Projects = () => {
  const navigate = useNavigate();

  // Fonction pour naviguer vers la page Kasa
  const click = () => {
    navigate("/kasa");
  };

  /*
  const jsp = () => {
    navigate("/Sofi");
  };
*/
  return (
    <section className="text-start mt-24 w-full max-w-3xl mx-auto">
      <h2 className="text-lg font-medium">Projets sélectionnés</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="p-5 cursor-pointer"
          onClick={() => navigate("/clienzen")}
        >
          <img
            src={ImgCrm}
            alt="Premier Project"
            className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-100"
          />
          <h3 className="font-bold">ClientZen</h3>
          <p className="text-gray-500">Crm pour Microentreprises</p>
        </div>
        <div className="p-5 cursor-pointer" onClick={click}>
          <img
            src={image2test}
            alt="Premier Project"
            className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-100"
          />
          <h3 className="font-bold">Kaza</h3>
          <p className="text-gray-500">Cite Kaza OpenClassRoom .</p>
        </div>

        {/*
        <div
          className="p-5 cursor-pointer"
          onClick={jsp}
        >
          <img
            src={Capture1test}
            alt="Segond Project"
            className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-100"
          />
          <h3 className="font-bold">Segond Project</h3>
          <p className="text-gray-500">Cite Sofi Bloue OpenClassRoom.</p>
        </div>
        */}
      </div>
    </section>
  );
};

export default Projects;
