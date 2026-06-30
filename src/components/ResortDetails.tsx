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
          <h2 className="headline-lg">Your calm nature retreat in the forests of Bhimtal.</h2>
          <p className="body-lg" style={{ marginTop: '24px', color: 'var(--on-surface-variant)' }}>
            Arahnyam Editorial Luxury is widely recognized as the best resort in Bhimtal for travelers seeking a calm nature retreat. 
            Nestled deep within 15 acres of primeval pine and oak forest canopy, this affordable luxury resort in Bhimtal blends modern comfort with raw, untamed beauty.
            Along with our tranquil accommodations, our in-house restaurant serves a mouthwatering selection of tasty vegetarian and non-vegetarian food, prepared fresh to order by local chefs.
          </p>
          <div className={styles.stats}>
            <div>
              <span className="headline-md">15+</span>
              <span className="label-caps">Acres of Forest</span>
            </div>
            <div>
              <span className="headline-md">1</span>
              <span className="label-caps">Serene Pool</span>
            </div>
            <div>
              <span className="headline-md">1</span>
              <span className="label-caps">Restaurant (Veg/Non-Veg)</span>
            </div>
          </div>
          <div style={{ marginTop: '48px' }}>
            <Link href="/bhimtal" className="btn btn-ghost" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>Discover Our Philosophy</Link>
          </div>
        </div>
        
        <div className={styles.imageCard}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/Pics/full_view.JPG" 
              alt="Misty forest view of Arahnyam Resort in Bhimtal" 
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
