import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageWrapper}>
        {/* 
        Uncomment the video element below and place your video file in `/public/hero-video.mp4`
        <video 
          src="/hero-video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.heroVideo}
        /> 
        */}
        <div className={styles.videoPlaceholder}></div>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <h1 className="display-xl">Silent Luxury in the Forests of Bhimtal.</h1>
          <p className="body-lg">
            Discover Arahnyam, a calm nature retreat hidden in the forests of Bhimtal. An affordable luxury resort beside a serene pool, designed for biological reconnection and peace.
          </p>
          <div className={styles.actions}>
            <Link href="/pool-side" className="btn btn-primary">The Poolside</Link>
            <Link href="/cottages" className="btn btn-ghost" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>View Cottages</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
