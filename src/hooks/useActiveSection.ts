import { useEffect, useState } from "react";

export const useActiveSection = () => { 
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const handleScroll = () => {
        const section = document.querySelectorAll('section');
        section.forEach((el) => {
            const top = el.getBoundingClientRect().top;
            const bottom = el.getBoundingClientRect().bottom;
            const id = el.getAttribute('id');
            if (top <= 0 && bottom > 0) {
                setActiveSection(id);
            }
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return activeSection;
}