import ContactForm from '@/components/ContactForm';
import SectionReveal from '@/components/SectionReveal';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container-luxury">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="label-text text-accent mb-3 block">Get in Touch</span>
            <h1 className="heading-lg">Contact Us</h1>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <SectionReveal>
            <div className="space-y-10">
              <div>
                <h3 className="label-text text-foreground mb-3">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 234-5678</p>
              </div>
              <div>
                <h3 className="label-text text-foreground mb-3">Email</h3>
                <p className="text-muted-foreground">info@edition-furniture.com</p>
              </div>
              <div>
                <h3 className="label-text text-foreground mb-3">Address</h3>
                <p className="text-muted-foreground">42 Design District<br />New York, NY 10013</p>
              </div>
              <div className="aspect-video overflow-hidden mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2!2d-74.005!3d40.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzEyLjAiTiA3NMKwMDAnMTguMCJX!5e0!3m2!1sen!2sus!4v1600000000000"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  title="Location"
                />
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div>
              <h3 className="heading-md mb-8">Send a Message</h3>
              <ContactForm />
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
