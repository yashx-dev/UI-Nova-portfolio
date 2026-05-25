export const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer-logo">
                AMAN RAWAT
            </a>

            <p className="footer-copy">
                © 2025 Aman Rawat. Crafted with <span>♥</span> & Motion.
            </p>

            <p className="footer-copy">
                Video Editor & Motion Designer
            </p>

            <div className="footer-dev">
                <p>
                    Designed & Developed by{' '}
                    <a
                        href="https://yashxdev.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Yash
                    </a>
                </p>

                <a
                    href="https://github.com/yashx-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-github"
                >
                    GitHub
                </a>
            </div>
        </footer>
    );
};