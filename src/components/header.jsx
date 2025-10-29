import { Top } from "./Top";

const Header = () => {
  return (
    <header className="text-start  w-full max-w-3xl mx-auto mt-9">
      <Top />
      <p className="font-medium text-gray-500 dark:text-gray-400  row-auto">
        Je conçois des applications modernes, rapides et intuitives, pensées
        pour offrir une expérience utilisateur fluide .
      </p>
    </header>
  );
};

export default Header;
