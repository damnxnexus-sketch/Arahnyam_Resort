import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Book Resort in Bhimtal | Contact Arahnyam",
  description: "Contact Arahnyam Editorial Luxury. Book your stay at the premier pool side resort in Bhimtal via WhatsApp or call.",
  keywords: "book resort in bhimtal, contact arahnyam resort, bhimtal resort booking",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Reserve Your Stay" 
        subtitle="Bookings & Enquiries" 
        imageSrc="/hero.png" 
      />
      
      <section className="section-spacing container">
        <div className="grid-12" style={{ alignItems: 'flex-start' }}>
          <div style={{ gridColumn: 'span 5' }}>
             <h2 className="headline-md">Get in touch</h2>
             <p className="body-md" style={{ marginTop: '16px', color: 'var(--on-surface-variant)', marginBottom: '48px' }}>
               For bespoke experiences, early bookings, and personalized requests, our concierge is ready to assist you.
             </p>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
               <div>
                 <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>WhatsApp Booking</span>
                 <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Chat on WhatsApp</a>
               </div>
               
               <div>
                 <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>Direct Line</span>
                 <p className="body-lg">+91 123 456 7890</p>
               </div>
               
               <div>
                 <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>Location</span>
                 <p className="body-lg">Arahnyam Editorial Luxury,<br />Bhimtal Valleys, Uttarakhand, India</p>
               </div>
             </div>
          </div>
          
          <div style={{ gridColumn: 'span 7', background: 'rgba(252, 249, 244, 0.7)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: 'var(--radius-xl)', padding: '40px', border: '1px solid rgba(255, 255, 255, 0.4)', boxShadow: '0 20px 40px rgba(15, 45, 36, 0.05)', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <p className="headline-md" style={{ color: 'var(--on-surface-variant)', textAlign: 'center' }}>Map Integration Placeholder<br /><span className="body-md">(Custom Mapbox/Leaflet without urban markers)</span></p>
          </div>
        </div>
      </section>
    </>
  );
}
