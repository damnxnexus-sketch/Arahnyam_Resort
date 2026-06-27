import React from 'react';
import Image from 'next/image';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

export default function PageHeader({ title, subtitle, imageSrc }: PageHeaderProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageWrapper}>
        <Image 
          src={imageSrc}
          alt={title}
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <span className="label-caps" style={{ color: 'var(--tertiary-fixed)', display: 'block', marginBottom: '16px' }}>{subtitle}</span>
          <h1 className="display-xl">{title}</h1>
        </div>
      </div>
    </section>
  );
}
