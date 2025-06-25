import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const navigationLinks = [
    'Home',
    'About',
    'Catalogue',
    'Contact',
    'Blog'
  ];

  const faqItems = [
    'Bagaimana Cara Order?',
    'Apakah saya dapat langsung datang ke lokasi?',
    'Berapa lama waktu Pre-Order?',
    'Apakah ada minimum order?',
    'Tentang Pengiriman'
  ];

  const socialMediaLinks = [
    {
      name: 'Instagram',
      username: '@batiktosri',
      icon: '/instagram.svg',
      url: 'https://instagram.com/batiktosri'
    },
    {
      name: 'Facebook',
      username: 'batiktosri',
      icon: '/facebook.svg', 
      url: 'https://facebook.com/batiktosri'
    },
    {
      name: 'WhatsApp',
      username: '+6289541495496?',
      icon: '/whatsapp.svg',
      url: 'https://wa.me/6289541495496'
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Company Info Section */}
          <div className={styles.companySection}>
            <div className={styles.logoContainer}>
              <img 
                src="/logo-tosri-secondary.svg" 
                alt="Batik Tosri" 
                className={styles.logo}
              />
              <h3 className={styles.companyName}>Batik Tosri</h3>
            </div>
            
            <p className={styles.companyDescription}>
              Batik premium buatan tangan pengrajin berpengalaman lebih dari 50 tahun di Desa 
              Bakaran Wetan, Juwana, Pati, Jawa Tengah. Setiap helai batik adalah karya seni yang menggedepankan 
              kualitas, tradisi, dan keindahan warisan budaya Indonesia.
            </p>

            <nav className={styles.navigation}>
              <ul className={styles.navList}>
                {navigationLinks.map((link, index) => (
                  <li key={index} className={styles.navItem}>
                    <a href={`#${link.toLowerCase()}`} className={styles.navLink}>
                      - {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* FAQs Section */}
          <div className={styles.faqSection}>
            <h3 className={styles.sectionTitle}>FAQs</h3>
            <ul className={styles.faqList}>
              {faqItems.map((faq, index) => (
                <li key={index} className={styles.faqItem}>
                  <a href="#faq" className={styles.faqLink}>
                    • {faq}
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.socialMedia}>
              <h4 className={styles.socialTitle}>Social Media</h4>
              <div className={styles.socialLinks}>
                {socialMediaLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name}
                      className={styles.socialIcon}
                    />
                    <span className={styles.socialUsername}>{social.username}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className={styles.locationSection}>
            <h3 className={styles.sectionTitle}>Location</h3>
            
            <div className={styles.locationInfo}>
              <div className={styles.locationText}>
                <p className={styles.locationLabel}>Country: Indonesia</p>
                <p className={styles.locationLabel}>Address:</p>
                <address className={styles.address}>
                  Jl. Mangkudipuro, Bakaran Wetan, Kec. Juwana, Kabupaten Pati, Jawa Tengah 59185
                </address>
              </div>

              <div className={styles.mapContainer}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.31275995247745!2d111.1293356!3d-6.7084105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e772c899cef440f%3A0x83e947d2f1faa403!2sJl.%20Mangkudipuro%20No.200%2C%20Growong%20Kidul%2C%20Kec.%20Juwana%2C%20Kabupaten%20Pati%2C%20Jawa%20Tengah%2059185!5e0!3m2!1sen!2sid!4v1750838107505!5m2!1sen!2sid"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.map}
                  title="Batik Tosri Location"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={styles.copyright}>
          <div className={styles.copyrightLine}></div>
          <p className={styles.copyrightText}>
            ©2025 Batik Tosri. Allright reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
