import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ResortDetails from "@/components/ResortDetails";

export const metadata: Metadata = {
  title: "Best Nature Resort in Bhimtal | Resort in Bhimtal Valleys",
  description: "Discover Arahnyam, the best resort in Bhimtal. Hidden within 15 acres of calm forest, experience affordable luxury, local excursions, and serene surroundings.",
  keywords: "best resort in bhimtal, resort in bhimtal, affordable luxury resort in bhimtal, nature retreat bhimtal, places to visit in bhimtal, bhimtal sightseeing",
};

export default function BhimtalPage() {
  return (
    <>
      <PageHeader 
        title="The Heart of Bhimtal" 
        subtitle="Location & Philosophy" 
        imageSrc="/Pics/Arahnyam_Main_Building.JPG" 
      />
      
      <div style={{ paddingTop: '80px' }}>
        <ResortDetails />
      </div>

      <section className="section-spacing container" style={{ textAlign: 'center' }}>
        <h2 className="headline-lg" style={{ marginBottom: '40px' }}>Why Choose a Nature Resort in Bhimtal?</h2>
        <p className="body-lg" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--on-surface-variant)' }}>
          Unlike other crowded hill stations, Bhimtal retains its raw, untouched majesty. 
          Arahnyam, as an affordable luxury resort in Bhimtal, leverages this absolute seclusion to offer a truly exclusive retreat. 
          The misty mornings and the golden hour sunlight filtering through the canopy create a healing environment that resets the soul.
        </p>
      </section>

      {/* Nearby Sightseeing / Excursions */}
      <section className="container" style={{ marginBottom: '160px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '16px' }}>Exploring the Region</span>
          <h2 className="headline-lg">Nearby Places of Interest</h2>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '16px auto 0' }}>
            Arahnyam is hidden in the forests of Bhimtal, offering a calm nature retreat while remaining close to the region's best sightseeing places.
          </p>
        </div>

        <div className="grid-12" style={{ gap: '24px' }}>
          {/* Place 1 */}
          <div style={{ gridColumn: 'span 4', background: 'var(--surface-container-low)', padding: '32px', borderRadius: 'var(--radius-xl)' }}>
            <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>10 Mins Drive</span>
            <h3 className="headline-md" style={{ fontSize: '22px', marginBottom: '12px' }}>Bhimtal Lake</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              The iconic centerpiece of the town, significantly larger and calmer than Naini Lake. Features boating, kayaking, and a beautiful island restaurant in the center.
            </p>
          </div>

          {/* Place 2 */}
          <div style={{ gridColumn: 'span 4', background: 'var(--surface-container-low)', padding: '32px', borderRadius: 'var(--radius-xl)' }}>
            <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>10 Mins Drive</span>
            <h3 className="headline-md" style={{ fontSize: '22px', marginBottom: '12px' }}>Bhimeshwar Temple</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              An ancient 17th-century Hindu temple dedicated to Lord Shiva, located at the embankment of Bhimtal Lake. It holds immense historical and spiritual significance.
            </p>
          </div>

          {/* Place 3 */}
          <div style={{ gridColumn: 'span 4', background: 'var(--surface-container-low)', padding: '32px', borderRadius: 'var(--radius-xl)' }}>
            <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>10 Mins Drive</span>
            <h3 className="headline-md" style={{ fontSize: '22px', marginBottom: '12px' }}>Victoria Dam</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              A spectacular dam situated at one end of the Bhimtal Lake. Adjoining terraced flower gardens offer panoramic scenic view points, perfect for quiet strolls.
            </p>
          </div>

          {/* Place 4 */}
          <div style={{ gridColumn: 'span 4', background: 'var(--surface-container-low)', padding: '32px', borderRadius: 'var(--radius-xl)' }}>
            <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>15 Mins Drive</span>
            <h3 className="headline-md" style={{ fontSize: '22px', marginBottom: '12px' }}>Butterfly Research Centre</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              India's second-largest collection of butterflies and moths. Located in a beautiful forest bungalow, it offers guided walks highlighting exotic mountain flora and fauna.
            </p>
          </div>

          {/* Place 5 */}
          <div style={{ gridColumn: 'span 4', background: 'var(--surface-container-low)', padding: '32px', borderRadius: 'var(--radius-xl)' }}>
            <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>15 Mins Drive</span>
            <h3 className="headline-md" style={{ fontSize: '22px', marginBottom: '12px' }}>Nal Damyanti Tal</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              A small, holy natural lake nestled in dense forests. Highly sacred to locals, it is a calm birdwatcher's paradise accessible via a short scenic trek.
            </p>
          </div>

          {/* Place 6 */}
          <div style={{ gridColumn: 'span 4', background: 'var(--surface-container-low)', padding: '32px', borderRadius: 'var(--radius-xl)' }}>
            <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>20 Mins Drive</span>
            <h3 className="headline-md" style={{ fontSize: '22px', marginBottom: '12px' }}>Sattal Lakes</h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
              A cluster of seven clean, interconnected freshwater lakes surrounded by thick oak and pine forests. Ideal for bird watching, boating, and nature walks.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
