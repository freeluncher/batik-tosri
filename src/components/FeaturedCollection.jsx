import React, { useEffect, useRef, useState } from 'react';
import styles from './FeaturedCollection.module.css';

const FeaturedCollection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -50px 0px'
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

  const collections = [
    {
      id: 1,
      name: 'Batik Merak',
      image: '/bakaran.jpg',
      description: 'Motif klasik dengan keindahan burung merak yang memukau'
    },
    {
      id: 2,
      name: 'Batik Kawung',
      image: '/kawung.jpg',
      description: 'Motif tradisional dengan filosofi kehidupan yang mendalam'
    },
    {
      id: 3,
      name: 'Batik Sogan',
      image: '/sogan.jpg',
      description: 'Warna khas sogan dengan nuansa heritage yang elegan'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.featuredCollection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Collection</h2>
          <div className={styles.titleUnderline}></div>
          <button className={styles.moreButton}>
            More Catalogues
            <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className={styles.collectionsGrid}>
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className={styles.collectionCard}
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className={styles.collectionImage}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <h3 className={styles.collectionName}>{collection.name}</h3>
                    <p className={styles.collectionDescription}>{collection.description}</p>
                    <button className={styles.viewButton}>View Collection</button>
                  </div>
                </div>
              </div>
              <div className={styles.cardFooter}>
                <h3 className={styles.cardTitle}>{collection.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
