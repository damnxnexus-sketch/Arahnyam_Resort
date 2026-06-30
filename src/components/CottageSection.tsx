import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CottageSection.module.css';

export default function CottageSection() {
  return (
    <section id="cottages" className={`section-spacing container`}>
      <div className={styles.header}>
        <span className="label-caps" style={{ color: 'var(--primary)', fontWeight: '600' }}>The Stays</span>
        <h2 className="headline-lg">Bespoke Accommodations</h2>
      </div>

      <div className={styles.cardsWrapper}>
        {/* stay 1: A-Frame Poolside Cottage */}
        <div className={styles.cardContainer}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/Pics/A_shape_rooms.JPG" 
              alt="Iconic A-shape pool-side cottage at Arahnyam Resort" 
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.glassCard}>
            <h3 className="headline-md" style={{ marginBottom: '16px' }}>Poolside A-Frame</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: '32px' }}>
              Wake up to the sounds of the primeval forest and step directly into your serene pool. 
              Designed with natural stone and wood, our cottages blend seamlessly with the environment, 
              providing unparalleled luxury that remains accessible.
            </p>
            <ul className={styles.amenities} style={{ marginBottom: '32px' }}>
              <li><span className="label-caps">Serene Pool Access</span></li>
              <li><span className="label-caps">Forest View</span></li>
              <li><span className="label-caps">Natural Stone Baths</span></li>
              <li><span className="label-caps">Private Deck</span></li>
            </ul>
            <Link href="/cottages" className="btn btn-primary">
              Explore Cottages
            </Link>
          </div>
        </div>

        {/* stay 2: Canopy Treehouse */}
        <div className={styles.cardContainer}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/Pics/treehouse.jpeg" 
              alt="Canopy Treehouse Cabin at Arahnyam Resort" 
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.glassCardLeft}>
            <h3 className="headline-md" style={{ marginBottom: '16px' }}>Canopy Treehouse</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: '32px' }}>
              Elevated deep within the lush green canopy, our luxury treehouse is built to give a raw, immersive feel of nature. It features beautiful warm editorial interiors and a premium indoor bathtub for soaking in ultimate tranquility.
            </p>
            <ul className={styles.amenities} style={{ marginBottom: '32px' }}>
              <li><span className="label-caps">Canopy Valley View</span></li>
              <li><span className="label-caps">Suspended Wooden Deck</span></li>
              <li><span className="label-caps">Indoor Bathtub</span></li>
              <li><span className="label-caps">Immersive Nature Feel</span></li>
            </ul>
            <Link href="/contact" className="btn btn-primary">
              Check Availability
            </Link>
          </div>
        </div>

        {/* stay 3: Forest Premium Estate */}
        <div className={styles.cardContainer}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/Pics/Big_Shape.JPG" 
              alt="Forest Premium Estate Building at Arahnyam Resort" 
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.glassCard}>
            <h3 className="headline-md" style={{ marginBottom: '16px' }}>Forest Premium Estate</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: '32px' }}>
              Designed for families and groups, our spacious premium estates feature comfortable rooms with multiple decker beds, easily accommodating 5-6 people. Reconnect with nature together without compromising on comfort.
            </p>
            <ul className={styles.amenities} style={{ marginBottom: '32px' }}>
              <li><span className="label-caps">Decker Beds (Sleeps 5-6)</span></li>
              <li><span className="label-caps">Grand Glass Lounge</span></li>
              <li><span className="label-caps">Spacious Family Setup</span></li>
              <li><span className="label-caps">Forest Views</span></li>
            </ul>
            <Link href="/contact" className="btn btn-primary">
              Reserve Estate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
