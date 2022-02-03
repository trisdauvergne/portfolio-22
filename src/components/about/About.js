import React from 'react';
import { Link } from 'react-scroll';
import './about.scss';

const About = () => {
    return (
        <section className="about" id="about">
            <h1 className="section-heading">About me.</h1>
            <div>
                <p>I'm a former design project manager from London, now turned developer living in Stockholm.</p>
                <p>I am interested in all aspects of design (especially good UX and UI), passionate about music, and an appreciator of food (of course).</p>
                <p>I decided to pursue a career as a developer after seeing the exciting online experiences many brands were creating in response to changing customer behaviours.</p>
                <p>Working as a developer allows me to create meaningful online experiences and respond to problems with creative solutions.</p>
            </div>
            <Link to="projects" smooth={true} duration={1000}>
                <button className="nav-btn">Projects</button>
                {/* <button className="nav-btn">Projects <span class="material-icons">arrow_downward</span></button> */}
            </Link>
        </section>
    )
};

export default About;
