"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <span className="headline-md">ARAHNYAM</span>
            <span className="label-caps" style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--on-surface-variant)', marginTop: '4px' }}>Editorial Luxury</span>
          </Link>
        </div>
        <nav className={styles.navLinks}>
          <Link href="/bhimtal" className="label-caps">The Resort</Link>
          <Link href="/cottages" className="label-caps">Cottages</Link>
          <Link href="/pool-side" className="label-caps">The Pool</Link>
          <Link href="/contact" className="label-caps">Contact</Link>
        </nav>
        <div className={styles.cta}>
          <a href="https://wa.me/919557345422" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '12px 24px' }}>
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
