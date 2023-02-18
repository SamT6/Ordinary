import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/fonts.css';
import landing_1 from '../images/landing-1.jpg';
import landing_2 from '../images/landing-2.jpg';
import landing_3 from '../images/landing-3.jpg';
import metamask_fox from '../images/MetaMask_Fox.png';
import styles from "../styles/Background.module.css";

import '../styles/header.css';

const Header = ({connect_wallet}) =>  {
    
    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black', // force color here since background changes
        marginTop: 15,
    };

    const imageStyle = {
        width: '20px',
        height: '20px',
    };

    return (
        <div className="header space">
            <Link
                key='home'
                className="header textStyle"
                to='/home'
            >
                <h2 className="header textStyle">Ordinary</h2>
            </Link>
            <div>
                <button style={buttonStyle} onClick={connect_wallet}>
                    <img style={imageStyle} src={metamask_fox} />
                    <h3 className="header textStyle"> Connect with MetaMask</h3>
                </button>
            </div>
        </div >
    );

}

const Landing = ({ connect_wallet }) => {
    
    return (
        <div>
            <Header connect_wallet={connect_wallet} />
            <article
                className={styles.article}
                style={{ backgroundImage: `url(${landing_1})` }}
                >
                <h1 className={styles.header}> Let's</h1>
            </article>
            <article
                className={styles.article}
                style={{ backgroundImage: `url(${landing_2})` }}
                >
                <h1 className={styles.header}> build </h1>
            </article>
            <article
                className={styles.article}
                style={{ backgroundImage: `url(${landing_3})` }}
                >
                <h1 className={styles.header}> better teams! </h1>
            </article>
        </div>
    );
};

export default Landing;