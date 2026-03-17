import SectionReveal from '@/components/SectionReveal';

const showroomImages = [
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800',
];

const Showroom = () => {
  return (
    <div>
      {/* Banner */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000"
          alt="Showroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <SectionReveal>
            <h1 className="heading-xl text-background text-center">Our Showroom</h1>
          </SectionReveal>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <SectionReveal>
              <div>
                <span className="label-text text-accent mb-4 block">Visit Us</span>
                <h2 className="heading-lg mb-8">Experience Edition in Person</h2>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  Our flagship showroom offers an immersive experience of the Edition collection. 
                  Touch the materials, test the comfort, and see how each piece transforms a space. 
                  Our design consultants are available to guide you through the collection and help 
                  you find the perfect pieces for your home.
                </p>

                <div className="space-y-6 text-sm">
                  <div>
                    <h4 className="label-text text-foreground mb-2">Address</h4>
                    <p className="text-muted-foreground">42 Design District<br />New York, NY 10013</p>
                  </div>
                  <div>
                    <h4 className="label-text text-foreground mb-2">Opening Hours</h4>
                    <p className="text-muted-foreground">
                      Monday – Friday: 10:00 AM – 7:00 PM<br />
                      Saturday: 11:00 AM – 6:00 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                  <div>
                    <h4 className="label-text text-foreground mb-2">Contact</h4>
                    <p className="text-muted-foreground">
                      +1 (555) 234-5678<br />
                      showroom@edition-furniture.com
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="aspect-square overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2!2d-74.005!3d40.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzEyLjAiTiA3NMKwMDAnMTguMCJX!5e0!3m2!1sen!2sus!4v1600000000000"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Showroom Location"
                />
              </div>
            </SectionReveal>
          </div>

          {/* Gallery */}
          <div className="mt-24">
            <SectionReveal>
              <h3 className="heading-md text-center mb-12">Showroom Gallery</h3>
            </SectionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {showroomImages.map((img, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="aspect-square overflow-hidden group">
                    <img
                      src={img}
                      alt="Showroom view"
                      className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showroom;
