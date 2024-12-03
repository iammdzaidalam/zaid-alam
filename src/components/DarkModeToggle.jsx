import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const checkTimeForMode = () => {
        const currentHour = new Date().getHours();
        if (currentHour >= 19 || currentHour < 6) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            if (newMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return newMode;
        });
    };

    useEffect(() => {
        checkTimeForMode(); 
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    return (
        <nav className="fixed left-0 top-0 z-30 p-4">
            <button onClick={toggleDarkMode} className="rounded-md p-2">
                {isDarkMode ? (
                    <FaSun className="h-6 w-6 text-customText" /> 
                ) : (
                    <FaMoon className="h-6 w-6 text-customText2" /> 
                )}
            </button>
        </nav>
    );
};

export default DarkModeToggle;
