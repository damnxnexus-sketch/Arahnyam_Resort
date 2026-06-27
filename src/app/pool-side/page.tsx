import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Infinity Pool Side Resort Bhimtal | Arahnyam",
  description: "Arahnyam is the premier pool side resort in Bhimtal. Dive into our serene infinity pool overlooking the misty valleys and primeval forests.",
  keywords: "Pool side resort bhimtal, infinity pool resort bhimtal, luxury pool resort",
};

export default function PoolSidePage() {
  return (
    <>
      <PageHeader 
        title="The Infinity Pool" 
        subtitle="Unparalleled Serenity" 
        imageSrc="/hero.png" 
      />
      
      <section className="section-spacing container">
        <div className="grid-12" style={{ alignItems: 'center' }}>
          <div style={{ gridColumn: 'span 6' }}>
             <h2 className="headline-lg">A Cinematic Poolside Experience.</h2>
             <p className="body-lg" style={{ marginTop: '24px', color: 'var(--on-surface-variant)' }}>
               Suspended above the misty valleys of Bhimtal, our infinity pool offers a breathtaking vantage point. It is the perfect place to decompress, bask in the golden sunlight, and reconnect with nature.
             </p>
             <ul style={{ marginTop: '32px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                 <span className="body-md">Temperature controlled waters</span>
               </li>
               <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                 <span className="body-md">Golden hour poolside lounging</span>
               </li>
               <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                 <span className="body-md">Exclusive access for cottage guests</span>
               </li>
             </ul>
          </div>
          <div style={{ gridColumn: 'span 6', position: 'relative', height: '500px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15, 45, 36, 0.08)' }}>
             <Image src="/hero.png" alt="Pool side resort bhimtal" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </>
  );
}
