import { useState, useEffect } from 'react';

const Connect = () => {
    const [theme, setTheme] = useState('system');
    
    useEffect(() => {
        // Récupérer le thème actuel du localStorage
        const savedTheme = localStorage.getItem('theme') || 'system';
        setTheme(savedTheme);
    }, []);
    
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Déclencher un événement storage pour que Root puisse le détecter
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'theme',
            newValue: newTheme
        }));
    };
    
    return (
        <footer className="mt-24 w-full max-w-3xl mx-auto">
            <h2 className="text-lg font-medium">Connect</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
                N'hésitez pas à me contacter à <a className="underline dark:text-zinc-300" href="mailto:Amzyt770@gmail.com">Amzyt770@gmail.com</a>
            </p>
            <div className="mt-4 space-x-6">
                <a href="https://github.com/Aharon-zerbib" className="hover:text-gray-400">Github</a>
                <a href="https://www.linkedin.com/in/aharon-zerbib-911bb6276/" className="hover:text-gray-400">LinkedIn</a>
            </div>
            
            <div className="mt-8 flex items-center justify-between">
                <p className="text-gray-500">Port Folio Ronron</p>
                
                <div className="flex items-center space-x-4">
                   
                    <button 
                        onClick={() => handleThemeChange('light')}
                        className={`p-2 rounded flex items-center justify-center ${theme === 'light' ? 'bg-gray-300 dark:bg-gray-700' : ''}`}
                        aria-label="Light theme"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </button>
                    <button 
                        onClick={() => handleThemeChange('dark')}
                        className={`p-2 rounded flex items-center justify-center ${theme === 'dark' ? 'bg-gray-300 dark:bg-gray-700' : ''}`}
                        aria-label="Dark theme"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </button> <button 
                        onClick={() => handleThemeChange('system')}
                        className={`p-2 rounded flex items-center justify-center ${theme === 'system' ? 'bg-gray-300 dark:bg-gray-700' : ''}`}
                        aria-label="System theme"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Connect;