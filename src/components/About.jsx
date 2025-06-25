import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
		<section className={styles.about}>
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
