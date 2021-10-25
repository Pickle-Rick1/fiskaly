import React, { useContext } from 'react';
import { BaseComponentProps } from '@/types';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { ThemeContext } from '@/contexts/ThemeContext';

export const ThemeToggle: React.FC<BaseComponentProps> = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full cursor-pointer">
            {theme === 'dark' ? (
                <SunIcon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-2xl cursor-pointer"
                />
            ) : (
                <MoonIcon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-2xl cursor-pointer"
                />
            )}
        </div>
    );
}
