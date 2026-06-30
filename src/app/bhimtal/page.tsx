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
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '16px' }}>Exploring the Region</span>
          <h2 className="headline-lg">Nearby Places of Interest</h2>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '16px auto 0' }}>
            Arahnyam is hidden in the forests of Bhimtal, offering a calm nature retreat while remaining close to the region's best sightseeing places.
          </p>
        </div>

        <div className="grid-12" style={{ gap: '48px', alignItems: 'flex-start' }}>
          
          {/* Column 1: Immediate Strolls (0 - 6 km) */}
          <div style={{ gridColumn: 'span 4' }}>
            <h3 className="headline-md" style={{ fontSize: '24px', marginBottom: '32px', borderBottom: '2px solid var(--primary)', paddingBottom: '12px' }}>
              Immediate Strolls
              <span style={{ display: 'block', fontSize: '14px', fontFamily: 'var(--font-inter)', fontWeight: '400', color: 'var(--on-surface-variant)', marginTop: '8px' }}>
                0 to 6 km from Arahnyam
              </span>
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { name: "Sunny Lake", dist: "0 km", time: "Walking distance", desc: "Private lakeside setting with peaceful Himalayan views. Ideal for sunrise, photography, and relaxation." },
                { name: "Bhim Taal Lake", dist: "3 km", time: "8 min", desc: "The largest lake in the Nainital region. Famous for boating, kayaking, cafés, and scenic walks." },
                { name: "Aquarium Island Cafe", dist: "3.5 km", time: "10 min", desc: "Island located in the middle of Bhimtal Lake with an aquarium and panoramic lake views." },
                { name: "Bhimtal Lake Dam", dist: "4 km", time: "10 min", desc: "Great place to admire the lake, especially during sunrise and sunset." },
                { name: "Bhimtal View Point", dist: "5 km", time: "15 min", desc: "One of the finest panoramic viewpoints overlooking the entire lake." },
                { name: "Bhimtal Lake View Point", dist: "5 km", time: "15 min", desc: "Excellent photography location, especially during golden hour." },
                { name: "Sunset Point-Bhimtal", dist: "6 km", time: "18 min", desc: "Spectacular sunset over the Kumaon hills." }
              ].map((item, idx) => (
                <div key={idx} style={{ background: 'var(--surface-container-low)', padding: '24px', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 12px rgba(0,0,0,0.01)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h4 className="headline-md" style={{ fontSize: '18px', margin: 0 }}>{item.name}</h4>
                    <span className="label-caps" style={{ color: 'var(--primary)', fontWeight: '600', background: 'rgba(0,23,16,0.05)', padding: '4px 8px', borderRadius: 'var(--radius-sm)' }}>
                      {item.dist}
                    </span>
                  </div>
                  <p className="body-md" style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--on-surface-variant)' }}>{item.desc}</p>
                  <p className="label-caps" style={{ fontSize: '10px', marginTop: '12px', color: 'var(--primary)', letterSpacing: '0.1em' }}>
                    ⏱ {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Lakes & Waterfalls (8 - 11 km) */}
          <div style={{ gridColumn: 'span 4' }}>
            <h3 className="headline-md" style={{ fontSize: '24px', marginBottom: '32px', borderBottom: '2px solid var(--primary)', paddingBottom: '12px' }}>
              Lakes & Forest Trails
              <span style={{ display: 'block', fontSize: '14px', fontFamily: 'var(--font-inter)', fontWeight: '400', color: 'var(--on-surface-variant)', marginTop: '8px' }}>
                8 to 11 km from Arahnyam
              </span>
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { name: "Sattal Lakes", dist: "8 km", time: "18 min", desc: "Cluster of seven interconnected freshwater lakes. Perfect for birdwatching, kayaking, and nature walks.", link: "https://www.namasteindiatrip.com/blog/places-to-visit-in-kainchi-dham/" },
                { name: "Sattal Water Fall", dist: "9 km", time: "20 min", desc: "Hidden waterfall surrounded by dense forest; best during monsoon and post-monsoon." },
                { name: "Naukuchiatal", dist: "9 km", time: "20 min", desc: "\"Lake of Nine Corners.\" Famous for paragliding, paddle boating, and tranquil surroundings." },
                { name: "Nal Damyanti Tal", dist: "11 km", time: "25 min", desc: "Mythological lake associated with King Nala and Queen Damayanti. Quiet and less crowded." }
              ].map((item, idx) => (
                <div key={idx} style={{ background: 'var(--surface-container-low)', padding: '24px', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 12px rgba(0,0,0,0.01)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h4 className="headline-md" style={{ fontSize: '18px', margin: 0 }}>{item.name}</h4>
                    <span className="label-caps" style={{ color: 'var(--primary)', fontWeight: '600', background: 'rgba(0,23,16,0.05)', padding: '4px 8px', borderRadius: 'var(--radius-sm)' }}>
                      {item.dist}
                    </span>
                  </div>
                  <p className="body-md" style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--on-surface-variant)' }}>
                    {item.desc}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', marginLeft: '6px', textDecoration: 'underline' }}>
                        More Info
                      </a>
                    )}
                  </p>
                  <p className="label-caps" style={{ fontSize: '10px', marginTop: '12px', color: 'var(--primary)', letterSpacing: '0.1em' }}>
                    ⏱ {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Day Trips & Spiritual Excursions (14 - 40 km) */}
          <div style={{ gridColumn: 'span 4' }}>
            <h3 className="headline-md" style={{ fontSize: '24px', marginBottom: '32px', borderBottom: '2px solid var(--primary)', paddingBottom: '12px' }}>
              Day Trips & Spiritual
              <span style={{ display: 'block', fontSize: '14px', fontFamily: 'var(--font-inter)', fontWeight: '400', color: 'var(--on-surface-variant)', marginTop: '8px' }}>
                14 to 40 km from Arahnyam
              </span>
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { name: "Kainchi Dham Ashram", dist: "18 km", time: "30–35 min", desc: "One of India's most revered spiritual destinations, founded by Neem Karoli Baba in 1962. Visited by devotees worldwide. Reach early (before 8 AM) to avoid crowds.", link: "https://www.thrillophilia.com/attractions/kainchi-dham" },
                { name: "Ghorakhal Golu Devta", dist: "14 km", time: "25 min", desc: "Temple renowned for thousands of bells and devotees' written wishes." },
                { name: "Bhowali Town", dist: "18 km", time: "30 min", desc: "Known for fruit orchards, local jams, and a peaceful hill-town atmosphere.", link: "https://www.stayvista.com/blog/kainchi-dham-trip-winter-guide/" },
                { name: "Nainital Hill Station", dist: "22 km", time: "40 min", desc: "Uttarakhand's iconic hill station featuring Naini Lake, Mall Road, ropeway, Snow View Point, and Naina Devi Temple." },
                { name: "Hanuman Garhi", dist: "24 km", time: "45 min", desc: "Famous Hanuman temple offering one of the region's best sunset views." },
                { name: "Snow View Point", dist: "26 km", time: "50 min", desc: "Stunning Himalayan panorama featuring peaks like Nanda Devi on clear days." },
                { name: "Mukteshwar Cliffs", dist: "40 km", time: "1 hr 15 min", desc: "Popular for Chauli Ki Jali cliffs, ancient Shiva temple, adventure activities, and Himalayan vistas." }
              ].map((item, idx) => (
                <div key={idx} style={{ background: 'var(--surface-container-low)', padding: '24px', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 12px rgba(0,0,0,0.01)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h4 className="headline-md" style={{ fontSize: '18px', margin: 0 }}>{item.name}</h4>
                    <span className="label-caps" style={{ color: 'var(--primary)', fontWeight: '600', background: 'rgba(0,23,16,0.05)', padding: '4px 8px', borderRadius: 'var(--radius-sm)' }}>
                      {item.dist}
                    </span>
                  </div>
                  <p className="body-md" style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--on-surface-variant)' }}>
                    {item.desc}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', marginLeft: '6px', textDecoration: 'underline' }}>
                        More Info
                      </a>
                    )}
                  </p>
                  <p className="label-caps" style={{ fontSize: '10px', marginTop: '12px', color: 'var(--primary)', letterSpacing: '0.1em' }}>
                    ⏱ {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
