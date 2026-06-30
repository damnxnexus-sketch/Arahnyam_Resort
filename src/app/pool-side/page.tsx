import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Best Pool Side Resort in Bhimtal | Arahnyam Resort",
  description: "Experience Arahnyam, the best pool side resort in Bhimtal. Relax by our serene pool hidden deep in the forest, perfect for a calm nature retreat. Call +91 9557345422 to book.",
  keywords: "best resort in bhimtal, resort in bhimtal, pool side resort bhimtal, affordable luxury resort bhimtal, calm nature retreat",
};

export default function PoolSidePage() {
  return (
    <>
      <PageHeader 
        title="The Serene Pool" 
        subtitle="Unparalleled Serenity" 
        imageSrc="/Pics/Pool.JPG" 
      />
      
      <section className="section-spacing container">
        <div className="grid-12" style={{ alignItems: 'center' }}>
          <div style={{ gridColumn: 'span 6' }}>
             <h2 className="headline-lg">A Calm Pool Side Resort in Bhimtal.</h2>
             <p className="body-lg" style={{ marginTop: '24px', color: 'var(--on-surface-variant)' }}>
               Suspended deep within the forests of Bhimtal, Arahnyam is a calm nature retreat. Our beautiful serene pool offers a breathtaking vantage point. It is the perfect place to decompress, bask in the golden sunlight, and reconnect with nature. Book your poolside getaway today by calling <a href="tel:+919557345422" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>+91 9557345422</a>.
             </p>
             <ul style={{ marginTop: '32px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                 <span className="body-md">Temperature controlled pool waters</span>
               </li>
               <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                 <span className="body-md">Golden hour poolside lounging</span>
               </li>
               <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                 <span className="body-md">Exclusive access for resort guests</span>
               </li>
             </ul>
          </div>
          <div style={{ gridColumn: 'span 6', position: 'relative', height: '500px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15, 45, 36, 0.08)' }}>
             <Image src="/Pics/pool_close_view.JPG" alt="Best pool side resort in bhimtal" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </>
  );
}
