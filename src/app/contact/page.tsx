import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Book Best Resort in Bhimtal | Contact Arahnyam Resort",
  description: "Book your calm nature retreat stay at Arahnyam, the best resort in Bhimtal. Contact our reservation desk on call or WhatsApp at +91 9557345422 today.",
  keywords: "best resort in bhimtal, resort in bhimtal, contact arahnyam resort, book resort in bhimtal, nature retreat bhimtal",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Reserve Your Stay" 
        subtitle="Bookings & Enquiries" 
        imageSrc="/Pics/Arahnyam_Main_Building.JPG" 
      />
      
      <section className="section-spacing container">
        <div className="grid-12" style={{ alignItems: 'flex-start' }}>
          <div style={{ gridColumn: 'span 5' }}>
             <h2 className="headline-md">Get in touch</h2>
             <p className="body-md" style={{ marginTop: '16px', color: 'var(--on-surface-variant)', marginBottom: '48px' }}>
                Book your calm nature forest retreat stay at Arahnyam, the premier affordable luxury resort in Bhimtal. Our reservation desk is ready to assist you.
             </p>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
               <div>
                 <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>WhatsApp Booking</span>
                 <a href="https://wa.me/919557345422" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Chat on WhatsApp</a>
               </div>
               
               <div>
                 <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>Direct Booking Line</span>
                 <p className="body-lg"><a href="tel:+919557345422" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>+91 9557345422</a></p>
               </div>
               
               <div>
                 <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>Location</span>
                 <p className="body-lg">Arahnyam Editorial Luxury,<br />Hidden Forest, Bhimtal, Uttarakhand, India</p>
               </div>
               
               <div>
                 <span className="label-caps" style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>Instagram</span>
                 <p className="body-lg">
                   <a href="https://www.instagram.com/arahnyam/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>
                     @arahnyam
                   </a>
                 </p>
               </div>
             </div>
          </div>
          
          <div style={{ gridColumn: 'span 7', width: '100%', minHeight: '480px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15, 45, 36, 0.05)', border: '1px solid rgba(255, 255, 255, 0.4)' }}>
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.9996614486987!2d79.5311319!3d29.3640006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0997213b1b365%3A0x3b59645108836b2e!2sArahnyam%20(Pool%20Side%20Cafe%20%26%20Cottages)!5e0!3m2!1sen!2sin!4v1719760000000!5m2!1sen!2sin" 
               width="100%" 
               height="480" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Arahnyam Location Map"
             />
          </div>
        </div>
      </section>
    </>
  );
}
