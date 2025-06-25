import React, { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = aboutRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before fully visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={aboutRef}
      className={`${styles.about} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.backgroundImage}></div>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.description}>
            Batik Tosri adalah batik premium buatan tangan oleh pengrajin berpengalaman di Desa Bakaran Wetan, Juwana, Pati. Lebih dari 50 tahun kami menjaga kualitas dan keaslian batik tulis sebagai warisan budaya Indonesia yang penuh
            makna dan keindahan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
