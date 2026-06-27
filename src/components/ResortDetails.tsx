import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ResortDetails.module.css';

export default function ResortDetails() {
  return (
    <section id="about" className={`section-spacing container`}>
      <div className={styles.wrapper}>
        <div className={styles.textContent}>
          <span className="label-caps" style={{ color: 'var(--primary)', marginBottom: '16px', display: 'block' }}>The Sanctuary</span>
          <h2 className="headline-lg">A retreat into the primeval forest.</h2>
          <p className="body-lg" style={{ marginTop: '24px', color: 'var(--on-surface-variant)' }}>
            Arahnyam Editorial Luxury is not just a resort in Bhimtal; it is a philosophy of slow living. 
            We have stripped away the noise of urban life to offer you vast expanses of tranquility, 
            blending the minimalist elegance of glassmorphism with the raw, untamed beauty of nature.
          </p>
          <div className={styles.stats}>
            <div>
              <span className="headline-md">15+</span>
              <span className="label-caps">Acres of Forest</span>
            </div>
            <div>
              <span className="headline-md">1</span>
              <span className="label-caps">Infinity Pool</span>
            </div>
          </div>
          <div style={{ marginTop: '48px' }}>
            <Link href="/bhimtal" className="btn btn-ghost" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>Discover Our Philosophy</Link>
          </div>
        </div>
        
        <div className={styles.imageCard}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/nature.png" 
              alt="Misty forest in the valleys of Bhimtal" 
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.glassBadge}>
            <span className="label-caps">Exclusivity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
