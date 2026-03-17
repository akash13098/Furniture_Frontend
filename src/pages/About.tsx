import SectionReveal from '@/components/SectionReveal';

const About = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000"
          alt="About Edition"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <SectionReveal>
            <h1 className="heading-xl text-background text-center">About Edition</h1>
          </SectionReveal>
        </div>
      </div>

      {/* Brand Story */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <div>
                <span className="label-text text-accent mb-4 block">Our Story</span>
                <h2 className="heading-lg mb-8">Born from a Love of Craft</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Edition was established in 2010 by a collective of designers and craftspeople united by a shared vision: to create furniture that speaks to both the intellect and the senses. Our founding principle — that exceptional design should be accessible yet uncompromising — continues to guide every decision we make.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From our workshop in New York's Design District, we collaborate with artisans across the globe, sourcing materials that meet our exacting standards for beauty, sustainability, and longevity.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=1000"
                  alt="Workshop"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <div className="aspect-[4/5] overflow-hidden order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1000"
                  alt="Design philosophy"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="order-1 lg:order-2">
                <span className="label-text text-accent mb-4 block">Philosophy</span>
                <h2 className="heading-lg mb-8">Less, but Better</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We believe that great design is not about adding more, but about finding the essential. Every line, joint, and surface in an Edition piece has been considered, refined, and reconsidered — until only what matters remains.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our design process begins with observation: how people actually live, work, and gather. The result is furniture that feels inevitable — as though it could not have been designed any other way.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="section-padding">
        <div className="container-luxury max-w-3xl text-center">
          <SectionReveal>
            <span className="label-text text-accent mb-4 block">Craftsmanship</span>
            <h2 className="heading-lg mb-8">Made to Last Generations</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Each Edition piece passes through the hands of dozens of skilled artisans. From the initial selection of raw timber to the final hand-rubbed finish, our process honours centuries-old woodworking traditions while embracing modern precision.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We use only responsibly sourced hardwoods, full-grain leathers, and natural textiles. These materials age gracefully, developing a patina that tells the story of the life lived around them.
            </p>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
