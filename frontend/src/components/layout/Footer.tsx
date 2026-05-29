import { FiGithub, FiExternalLink, FiArrowUp } from 'react-icons/fi';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Logo */}
                <a href="#" className="footer__logo" aria-label="Go to top">
                    <span className="footer__logo-text">AR</span>
                </a>

                {/* Center Content */}
                <div className="footer__content">
                    <p className="footer__copyright">
                        © {currentYear} Aman Rawat. All rights reserved.
                    </p>

                    <div className="footer__credits">
                        <span>Dev by</span>
                        <a
                            href="https://yashxdev.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__link"
                            aria-label="Developer portfolio"
                        >
                            Yash Khandelwal
                            <FiExternalLink size={11} />
                        </a>
                        <span className="footer__separator">•</span>
                        <a
                            href="https://github.com/yashx-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__link"
                            aria-label="GitHub"
                        >
                            <FiGithub size={13} />
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Back to Top */}
                <button
                    onClick={scrollToTop}
                    className="footer__top-btn"
                    aria-label="Scroll to top"
                >
                    <FiArrowUp size={16} />
                </button>
            </div>
        </footer>
    );
};