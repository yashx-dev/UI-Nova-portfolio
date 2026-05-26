import { useState, useEffect } from 'react';

interface NavItem {
    label: string;
    id: string;
}

const navItems: NavItem[] = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Work', id: 'projects' },
    { label: 'Reviews', id: 'testimonials' },
    
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const [navBackground, setNavBackground] = useState<string>(
        'rgba(8,8,8,.6)'
    );

    useEffect(() => {
        const handleScroll = (): void => {
            const scrolled = window.scrollY > 80;

            setNavBackground(
                scrolled
                    ? 'rgba(8,8,8,.92)'
                    : 'rgba(8,8,8,.6)'
            );
        };

        window.addEventListener('scroll', handleScroll);

        return (): void => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id: string): void => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        closeMenu();
    };

    const toggleMenu = (): void => {
        setIsMenuOpen((prev) => !prev);

        document.body.classList.toggle('menu-open');
    };

    const closeMenu = (): void => {
        setIsMenuOpen(false);

        document.body.classList.remove('menu-open');
    };

    return (
        <>
            <nav style={{ background: navBackground }}>
                <button
                    className="nav-logo"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        })
                    }
                >
                    AR
                </button>

                <ul className="nav-links">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions">
                    <button
                        className="nav-cta"
                        onClick={() => scrollToSection('contact')}
                    >
                        Hire Me
                    </button>

                    <button
                        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className="mobile-nav-link"
                        onClick={() => scrollToSection(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </>
    );
};