import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ResortDetails from "@/components/ResortDetails";

export const metadata: Metadata = {
  title: "Best Resort in Bhimtal Valleys | Arahnyam Editorial Luxury",
  description: "Discover Arahnyam, the finest resort in Bhimtal. A sanctuary of silent luxury, nestled deep within 15 acres of primeval forests.",
  keywords: "resort in bhimtal, best resort in bhimtal valleys, luxury resort bhimtal",
};

export default function BhimtalPage() {
  return (
    <>
      <PageHeader 
        title="The Heart of Bhimtal" 
        subtitle="Location & Philosophy" 
        imageSrc="/nature.png" 
      />
      
      <div style={{ paddingTop: '80px' }}>
        <ResortDetails />
      </div>

      <section className="section-spacing container" style={{ textAlign: 'center' }}>
        <h2 className="headline-lg" style={{ marginBottom: '40px' }}>Why Choose Bhimtal?</h2>
        <p className="body-lg" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--on-surface-variant)' }}>
          Unlike other crowded hill stations, Bhimtal retains its raw, untouched majesty. 
          Arahnyam leverages this seclusion to offer a truly exclusive retreat. 
          The misty mornings and the golden hour sunlight filtering through the canopy create a healing environment that resets the soul.
        </p>
      </section>
    </>
  );
}
