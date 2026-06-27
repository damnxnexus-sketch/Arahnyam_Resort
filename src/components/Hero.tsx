import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageWrapper}>
        <Image 
          src="/hero.png"
          alt="Luxury poolside resort in Bhimtal"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <h1 className="display-xl">Silent Luxury in the Valleys of Bhimtal.</h1>
          <p className="body-lg">
            Discover a sanctuary of biological reconnection. Affordable luxury cottages beside a serene infinity pool, surrounded by primeval forests.
          </p>
          <div className={styles.actions}>
            <Link href="/pool-side" className="btn btn-primary">The Infinity Pool</Link>
            <Link href="/cottages" className="btn btn-ghost" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>View Cottages</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
