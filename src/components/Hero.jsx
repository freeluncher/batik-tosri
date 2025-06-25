import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <div className={styles.logoSection}>
              <div className={styles.logoIcon}>
                <img 
                  src="/logo-tosri.svg" 
                  alt="Batik Tosri Logo" 
                  className={styles.logoSvg}
                />
              </div>
              <h1 className={styles.logoText}>Batik Tosri</h1>
            </div>
            
            <div className={styles.description}>
              <p className={styles.mainText}>
                Batik premium buatan tangan pengrajin berpengalaman lebih dari 50 tahun di{' '}
                <span className={styles.highlight}>Desa Bakaran Wetan, Juwana, Pati, Jawa Tengah.</span>{' '}
                Setiap helai batik adalah karya seni yang mengedepankan kualitas, tradisi, dan keindahan warisan budaya Indonesia.
              </p>
            </div>
            
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>
                Learn More
              </button>
              <button className={styles.secondaryButton}>
                Pre-Order Now
              </button>
            </div>
          </div>
          
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img 
                src="/model-batik.png" 
                alt="Batik Tosri Models wearing traditional batik clothing" 
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
