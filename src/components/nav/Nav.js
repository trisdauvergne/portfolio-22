import React, { useState } from 'react';
import { Link } from 'react-scroll';
// import OutsideClickHandler from 'react-outside-click-handler';
import './nav.scss';

const Nav = () => {
    const [ aboutBtnClicked, setAboutBtnClicked ] = useState(false);
    const [ projectsBtnClicked, setProjectsBtnClicked ] = useState(false);
    const [ cvBtnClicked, setCvBtnClicked ] = useState(false);
    const [ connectBtnClicked, setConnectBtnClicked ] = useState(false);
    
    const changeBtnClass = (e) => {
        const btnId = e.target.id;
        if (btnId === 'about-btn') {
            setAboutBtnClicked(true);
            setProjectsBtnClicked(false);
            setCvBtnClicked(false);
            setConnectBtnClicked(false);
        } else if (btnId === 'projects-btn') {
            setProjectsBtnClicked(true);
            setAboutBtnClicked(false);
            setCvBtnClicked(false);
            setConnectBtnClicked(false);
        } else if (btnId === 'cv-btn') {
            setCvBtnClicked(true);
            setProjectsBtnClicked(false);
            setAboutBtnClicked(false);
            setConnectBtnClicked(false);
        } else if (btnId === 'connect-btn') {
            setConnectBtnClicked(true);
            setCvBtnClicked(false);
            setProjectsBtnClicked(false);
            setAboutBtnClicked(false);
        }
    };

    return (
        <nav className="nav">
            <div className="nav-container">
                {/* <OutsideClickHandler onOutsideClick={resetBtns}> */}
                    <Link to="about" smooth={true} duration={1000} onClick={changeBtnClass}>
                        <button id="about-btn" className={aboutBtnClicked ? "btn-clicked" : ``}>About</button>
                    </Link>
                    <Link to="projects" smooth={true} duration={1000} onClick={changeBtnClass}>
                        <button id="projects-btn" className={projectsBtnClicked ? "btn-clicked" : ``}>Projects</button>
                    </Link>
                    <Link to="cv" smooth={true} duration={1000} onClick={changeBtnClass}>
                        <button id="cv-btn" className={cvBtnClicked ? "btn-clicked" : ``}>CV</button>
                    </Link>
                    <Link to="connect" smooth={true} duration={1000} onClick={changeBtnClass}>
                        <button id="connect-btn" className={connectBtnClicked ? "btn-clicked" : ``}>Connect</button>
                    </Link>
                {/* </OutsideClickHandler> */}
            </div>
        </nav>
    )
}

export default Nav
