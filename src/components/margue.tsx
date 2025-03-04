import React from 'react';
import styles from './LogoSlider.module.css';

const LogoSlider = ({ logos }) => {
    // Duplicate logos to have 100 identical sets
    const allLogos = Array.from({ length: 100 }, () => logos).flat();
    console.log("allLogos", allLogos);

    return (
        <div className={styles.container}>
            <div className={styles.sliderWrapper}>
                {allLogos.map((logo, index) => (
                    <div key={index} className={styles.logoItem}>
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className={styles.logoImage}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoSlider;
