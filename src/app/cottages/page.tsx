import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CottageSection from "@/components/CottageSection";

export const metadata: Metadata = {
  title: "Luxury Cottages in Bhimtal | Arahnyam Resort",
  description: "Experience affordable luxury in our forest-view cottages at Arahnyam Resort. Designed with natural stone, wood, and complete with infinity pool access.",
  keywords: "luxury cottages in bhimtal, affordable luxury cottage, resort in bhimtal, cottage resort",
};

export default function CottagesPage() {
  return (
    <>
      <PageHeader 
        title="Affordable Luxury Cottages" 
        subtitle="Your Private Sanctuary" 
        imageSrc="/cottage.png" 
      />
      <div style={{ paddingTop: '80px' }}>
        <CottageSection />
      </div>
      
      <section className="section-spacing container">
        <div className="grid-12">
          <div style={{ gridColumn: 'span 12', textAlign: 'center' }}>
             <h2 className="headline-lg">Seamless Blending with Nature</h2>
             <p className="body-lg" style={{ maxWidth: '800px', margin: '24px auto', color: 'var(--on-surface-variant)' }}>
               Every cottage is meticulously designed to harmonize with the surrounding primeval forests of Bhimtal. Natural elements weave through the architecture, offering a sense of breathability, safety, and exclusivity.
             </p>
          </div>
        </div>
      </section>
    </>
  );
}
