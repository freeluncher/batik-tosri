import React, { useEffect, useRef, useState } from 'react';
import styles from './PreOrder.module.css';

const PreOrder = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    pesan: ''
  });

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const { namaLengkap, email, pesan } = formData;
    const subject = encodeURIComponent('Pre-Order Batik Tosri');
    const body = encodeURIComponent(`
Nama Lengkap: ${namaLengkap}
Email: ${email}
Pesan: ${pesan}

Salam,
${namaLengkap}
    `);
    
    window.open(`mailto:info@batiktosri.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleWhatsApp = () => {
    const { namaLengkap, email, pesan } = formData;
    const message = encodeURIComponent(`
Halo, saya ingin melakukan pre-order batik Tosri.

Nama Lengkap: ${namaLengkap}
Email: ${email}
Pesan: ${pesan}

Terima kasih!
    `);
    
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.preOrder} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.backgroundPattern}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Pre-Order Batik Collection</h2>
            <p className={styles.subtitle}>Pesan sekarang dan dapatkan batik kualitas tinggi</p>
          </div>

          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Formulir Pre-Order</h3>
            
            <form className={styles.form} onSubmit={handleSendEmail}>
              <div className={styles.inputGroup}>
                <label htmlFor="namaLengkap" className={styles.label}>
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="namaLengkap"
                  name="namaLengkap"
                  value={formData.namaLengkap}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap anda"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="contoh@email.com"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="pesan" className={styles.label}>
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleInputChange}
                  placeholder="Tuliskan pesan atau preferensi batik yang diinginkan"
                  className={styles.textarea}
                  rows="4"
                  required
                />
              </div>

              <button type="submit" className={styles.sendEmailButton}>
                Send Email
              </button>

              <div className={styles.divider}>
                <span className={styles.dividerText}>OR Direct</span>
              </div>

              <button 
                type="button" 
                className={styles.whatsappButton}
                onClick={handleWhatsApp}
              >
                <img 
                  src="/whatsapp.svg" 
                  alt="WhatsApp" 
                  className={styles.whatsappIcon}
                />
                Whatsaap
              </button>
            </form>

            <p className={styles.supportText}>
              Dengan memesan, Anda mendukung pelestarian warisan budaya Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreOrder;
