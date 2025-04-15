import { Top } from "./Top";

const Header=()=>{
    return (
        <header className="text-start  w-full max-w-3xl mx-auto mt-9">
        <Top/>
        <p className="font-medium text-gray-500 dark:text-gray-400  row-auto">
        Axé sur la création d'expériences web intuitives et performantes. Combler le fossé entre  conception<br/>  et développement.
        </p>
      </header>
    );
}

export default Header;