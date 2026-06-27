import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CottageSection.module.css';

export default function CottageSection() {
  return (
    <section id="cottages" className={`section-spacing container`}>
      <div className={styles.header}>
        <span className="label-caps" style={{ color: 'var(--tertiary-container)' }}>The Experience</span>
        <h2 className="headline-lg">Poolside Cottages</h2>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/cottage.png" 
            alt="Affordable luxury cottage beside a serene infinity pool" 
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.glassCard}>
          <h3 className="headline-md" style={{ marginBottom: '16px' }}>Affordable Luxury</h3>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: '32px' }}>
            Wake up to the sounds of the primeval forest and step directly into your serene infinity pool. 
            Designed with natural stone and wood, our cottages blend seamlessly with the environment, 
            providing unparalleled luxury that remains accessible.
          </p>
          <ul className={styles.amenities} style={{ marginBottom: '32px' }}>
            <li><span className="label-caps">Infinity Pool Access</span></li>
            <li><span className="label-caps">Forest View</span></li>
            <li><span className="label-caps">Natural Stone Baths</span></li>
            <li><span className="label-caps">Private Deck</span></li>
          </ul>
          <Link href="/cottages" className="btn btn-primary">
            Explore Cottages
          </Link>
        </div>
      </div>
    </section>
  );
}
