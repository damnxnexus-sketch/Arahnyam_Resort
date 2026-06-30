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
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <span className="label-caps" style={{ color: 'var(--primary)', marginBottom: '16px', display: 'block' }}>Location & Bookings</span>
          <h2 className="headline-lg">Bhimtal, Uttarakhand</h2>
          <p className="body-md" style={{ marginTop: '24px', color: 'var(--on-surface-variant)' }}>
            Nestled deep in the forests of Bhimtal, Arahnyam offers a calm nature retreat. 
            Recognized as the best resort in Bhimtal for affordable luxury, we provide a peaceful escape from the urban hustle.
          </p>
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <p className="body-lg" style={{ fontWeight: '500' }}>
              Booking Call: <a href="tel:+919557345422" style={{ color: 'var(--primary)', textDecoration: 'none' }}>+91 9557345422</a>
            </p>
            <p className="body-md">
              WhatsApp Support: <a href="https://wa.me/919557345422" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>+91 9557345422</a>
            </p>
            <p className="body-md" style={{ marginTop: '12px' }}>
              <a href="https://maps.app.goo.gl/v27rJfrWVMCfu1jS8" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', marginRight: '16px', fontWeight: '500' }}>Get Directions on Google Maps</a>
              •
              <a href="https://www.instagram.com/arahnyam/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', marginLeft: '16px', fontWeight: '500' }}>Follow on Instagram</a>
            </p>
          </div>
          <div style={{ marginTop: '48px' }}>
            <span className="headline-md">ARAHNYAM</span>
            <p className="label-caps" style={{ marginTop: '8px', letterSpacing: '0.2em', color: 'var(--on-surface-variant)' }}>Affordable Luxury Resort in Bhimtal</p>
          </div>
        </div>
      </footer>
    </>
  );
}
