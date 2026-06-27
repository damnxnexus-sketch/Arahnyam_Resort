import Hero from "@/components/Hero";
import ResortDetails from "@/components/ResortDetails";
import CottageSection from "@/components/CottageSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ResortDetails />
      <CottageSection />
      
      {/* Footer / Location */}
      <footer id="location" className="section-spacing container" style={{ textAlign: 'center', marginBottom: '80px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <span className="label-caps" style={{ color: 'var(--primary)', marginBottom: '16px', display: 'block' }}>Location</span>
          <h2 className="headline-lg">Bhimtal, Uttarakhand</h2>
          <p className="body-md" style={{ marginTop: '24px', color: 'var(--on-surface-variant)' }}>
            Nestled in the serene valleys of Bhimtal, our resort offers an undisturbed connection with nature, just a short drive from the city.
          </p>
          <div style={{ marginTop: '48px' }}>
            <span className="headline-md">ARAHNYAM</span>
            <p className="label-caps" style={{ marginTop: '8px', letterSpacing: '0.2em', color: 'var(--on-surface-variant)' }}>Editorial Luxury</p>
          </div>
        </div>
      </footer>
    </>
  );
}
