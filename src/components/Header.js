import React from "react";

function Header() {
    return (
        // Header
        // Name:    John Divinagracia
        // Tagline: Aspiring Software Developer
        // Nav:
        //      - About Me
        //      - Projects
        //      - Skills
        //      - Contact
        //      - Linkedin, GitHub
        <header>
            <h1>John Divinagracia, CS Student</h1>
            <nav>
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                </ul>
                <section>
                    {/* LinkedIn Image */}
                    <img src="src/media/linkedin-icon.png"/>

                    {/* GitHub Image */}
                    <img src=""/>

                </section>
            </nav>
        </header>
    );
}

export default Header;