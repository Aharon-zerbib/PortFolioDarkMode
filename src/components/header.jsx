import { Top } from "./Top";

const Header = () => {
  return (
    <header className="text-start  w-full max-w-3xl mx-auto mt-9">
      <Top />
      <p className="font-medium text-gray-500 dark:text-gray-400  row-auto">
        Spécialisé en Next.js, React et bases de données. Je conçois des
        applications modernes, performantes et centrées sur l’expérience
        utilisateur.
      </p>
    </header>
  );
};

export default Header;
