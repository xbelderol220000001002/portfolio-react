import { useState, useEffect } from 'react';
import './styles/LandingPage.css';
import MyImage from './assets/junex.jpg';
import fbIcon from './assets/fb.png';
import githubIcon from './assets/github.png';
import ytIcon from './assets/yt.svg';
import Gmail from './assets/gmail.png';


function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [text, setText] = useState("");
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
    const fullText = "Heello, I'm Xaian!";
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault(); // optional: prevent link default
        setDropdownOpen(prev => !prev);
      };

    const toggleMenu = () => setMenuOpen(prev => !prev);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setAnimate(true), 300);

        let i = 0;
        const typing = () => {
            if (i < fullText.length) {
                setText(prev => prev + fullText.charAt(i));
                i++;
                setTimeout(typing, 100);
            }
        };
        typing();
    }, []);

    useEffect(() => {
        const revealCards = () => {
            const cards = document.querySelectorAll('.glass-card');
            cards.forEach(card => {
                const top = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight - 100) {
                    card.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', revealCards);
        revealCards();
        return () => window.removeEventListener('scroll', revealCards);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prev => {
            localStorage.setItem('darkMode', !prev);
            return !prev;
        });
    };

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    const socialLinks = (
        <div className="social-icons-container">
            <div className="social-icons-horizontal">
                <a href="https://www.facebook.com/xpeb.kaizer" target="_blank" rel="noopener noreferrer">
                    <img src={fbIcon} alt="Facebook" className="social-icon" />
                </a>
                <a href="https://github.com/xbelderol220000001002" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="social-icon" />
                </a>
                <a href="https://www.youtube.com/@xaianpaulbelderol" target="_blank" rel="noopener noreferrer">
                    <img src={ytIcon} alt="YouTube" className="social-icon" />
                </a>               
                <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
                    <img src={Gmail} alt="Gmail" className="social-icon" />
                </a>
            </div>
        </div>
    );
    return (
        <div className={`landing-page ${darkMode ? 'dark-mode' : ''}`} id="home">
            <header className="header">
                <nav className="nav-container">
                    <div className="logo">こんにちは (Konnichiwa)</div>
                    <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                        <li><a href="#home">Home</a></li>
                        <li className="dropdown-container">
                    <a href="#about" className="dropdown-toggle" onClick={toggleDropdown}>Services</a>    
                    <ul className={`dropdown ${dropdownOpen ? 'show' : ''}`}>
                    <li><a href="#web-development">UI/UX</a></li>
                    <li><a href="#mobile-development">Frontend</a></li>
                    <li><a href="#project-management">Backend</a></li>
                    <li><a href="#web-development">Test Case</a></li>
                    </ul>
                    </li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
                    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                        {darkMode ? '☀️' : '🌙'}
                    </button>
                </nav>
            </header>

            <section className={`hero-section ${animate ? 'fade-in' : ''}`}>
                <div className="hero-left">
                    <img src={MyImage} alt="Xaian" />
                </div>
                <div className="hero-right">
                    <h2>{text}</h2>
                    <p>I'm a project manager and a bit of a developer.</p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn-primary">Contact Me</a>
                        <a href="/Xaian_Belderol_Resume.pdf" className="btn-outline" download>Download Resume</a>
                    </div>
                    {socialLinks}
                </div>
            </section>

  <section id="about" className="glass-card">     
  <div className="glass-card-content">
    <h2>About Me</h2>
    <p>Hello, it's me, Xan! Actually I'm not really a passionate IT student, I'm more into playing video games, watching anime, and movies. I can code and handle IT stuff, but my motivation depends on my mood.</p>
  </div>
</section>
<section id="about" className="glass-card">
                
  <div className="glass-card-content">
    <h2>What do I do?</h2>
    <p>Currently, I am a Project Manager leading my team to achieve specific goals for our clients. Even though I am a Project Manager, I also have IT skills and can do coding, especially for the frontend. The frameworks I use include:</p>
    <ul className="skills-list">
                        <li>React</li>
                        <li>Vuejs</li>
                    </ul>
  </div>
</section>

<div className="glossy-card">
<div className="glass-card" id="services">
    <h2>My Projects</h2>

    <div className="first-sections">
  <section className="web-section" id="web-development">
    <a href="#web-development-details">
      <p>Web Development</p>
    </a>
  </section>

  <section className="mobile-section" id="mobile-development">
    <a href="#mobile-development-details">
      <p>Mobile Development</p>
    </a>
  </section>

  <section className="pm-section" id="project-management">
    <a href="#project-management-details">
      <p>Project Management</p>
    </a>
  </section>
</div>
</div>
</div>


  <div className="glass-card-content">
    <div className="glass-card" id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me for any inquiries or project collaboration.</p>
      <a href="https://mail.google.com/mail/u/0/#inbox" className="btn-primary">Email Me</a>
    </div>
  </div>


<footer>
  <p>&copy; {new Date().getFullYear()} Xaian Paul Belderol. All Rights Reserved.</p>
</footer>
        </div>
    );
}

export default LandingPage;