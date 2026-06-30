import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CottageSection from "@/components/CottageSection";

export const metadata: Metadata = {
  title: "Affordable Luxury Cottages & Treehouses | Resort in Bhimtal",
  description: "Stay in our affordable luxury cottages and canopy treehouses at Arahnyam, the best resort in Bhimtal. Hidden in the forest with cozy decker beds (sleeps 5-6), indoor bathtubs, and serene pool access.",
  keywords: "best resort in bhimtal, resort in bhimtal, affordable luxury resort in bhimtal, cottages in bhimtal, treehouse in bhimtal, calm nature retreat",
};

export default function CottagesPage() {
  return (
    <>
      <PageHeader 
        title="Affordable Luxury Cottages" 
        subtitle="Your Private Sanctuary" 
        imageSrc="/Pics/FrontView.png" 
      />
      <div style={{ paddingTop: '80px' }}>
        <CottageSection />
      </div>
      
      <section className="section-spacing container">
        <div className="grid-12">
          <div style={{ gridColumn: 'span 12', textAlign: 'center', marginBottom: '48px' }}>
             <h2 className="headline-lg">Seamless Blending with Nature</h2>
             <p className="body-lg" style={{ maxWidth: '800px', margin: '24px auto 0', color: 'var(--on-surface-variant)' }}>
               Every cottage at our calm nature retreat is meticulously designed to harmonize with the surrounding primeval forests of Bhimtal. Natural elements weave through the architecture, offering a sense of safety, comfort, and affordable luxury. Call <a href="tel:+919557345422" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>+91 9557345422</a> to book your stay.
             </p>
          </div>
        </div>
      </section>

      <section className="container" style={{ marginBottom: '160px' }}>
        <div className="grid-12" style={{ gap: '32px' }}>
          
          {/* Card 1: Warm Bedroom */}
          <div style={{ 
            gridColumn: 'span 4', 
            background: 'var(--surface-container-low)', 
            borderRadius: 'var(--radius-xl)', 
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ position: 'relative', height: '320px', width: '100%' }}>
              <Image 
                src="/Pics/interior.JPG" 
                alt="Cozy Cottage Interior Bedroom" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '32px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 className="headline-md" style={{ fontSize: '24px', marginBottom: '12px' }}>Cozy Luxury</h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                  Warm editorial interiors featuring raw textures, natural wood paneling, and curated rustic décor.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Modern Bath/Room Interior */}
          <div style={{ 
            gridColumn: 'span 4', 
            background: 'var(--surface-container-low)', 
            borderRadius: 'var(--radius-xl)', 
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ position: 'relative', height: '320px', width: '100%' }}>
              <Image 
                src="/Pics/Room_Interior.JPG" 
                alt="Modern Cottage Bathroom & Living Space" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '32px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 className="headline-md" style={{ fontSize: '24px', marginBottom: '12px' }}>Refined Comfort</h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                  Minimalist yet luxurious spaces with high-end fixtures that prioritize wellness and relaxation.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Sanctuary Trails */}
          <div style={{ 
            gridColumn: 'span 4', 
            background: 'var(--surface-container-low)', 
            borderRadius: 'var(--radius-xl)', 
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ position: 'relative', height: '320px', width: '100%' }}>
              <Image 
                src="/Pics/next.jpeg" 
                alt="Scenic Nature Pathways at Arahnyam Resort" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '32px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 className="headline-md" style={{ fontSize: '24px', marginBottom: '12px' }}>Sanctuary Trails</h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                  Winding forest pathways, outdoor lounge zones, and lakeside trails designed for slow walks and morning reflection.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
