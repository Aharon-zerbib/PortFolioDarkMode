export default function FreelanceSection() {
  return (
    <section className="pt-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Freelance</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Je propose mes services en développement web et création
          d’applications modernes. Voici quelques points forts de mon travail en
          freelance :
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="rounded-2xl  p-6 dark:hover:bg-white/10 border border-gray-300 border-opacity-30">
          <h3 className="text-xl font-semibold mb-3">💻 Développement Web</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Création de sites modernes, rapides et responsives avec React,
            Next.js et TailwindCSS.
          </p>
        </div>
        <div className="rounded-2xl p-6 dark:hover:bg-white/10 border border-gray-300 border-opacity-30">
          <h3 className="text-xl font-semibold mb-3">⚡ Performance & SEO</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Optimisation des performances, accessibilité et bon référencement
            naturel (SEO).
          </p>
        </div>

        <div className="rounded-2xl  p-6 dark:hover:bg-white/10 border border-gray-300 border-opacity-30">
          <h3 className="text-xl font-semibold mb-3">🤝 Collaboration</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Communication claire, suivi de projet agile et adaptation aux
            besoins spécifiques des clients.
          </p>
        </div>
      </div>
    </section>
  );
}
