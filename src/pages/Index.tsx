import HeroSlider from '@/components/HeroSlider';
import ProductCard from '@/components/ProductCard';
import CollectionCard from '@/components/CollectionCard';
import SectionReveal from '@/components/SectionReveal';
import { Link } from 'react-router-dom';
import products from '@/data/products.json';
import collections from '@/data/collections.json';

const featuredProducts = products.slice(0, 6);

const lookbookImages = [
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <HeroSlider />

      {/* Featured Collections */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="label-text text-accent mb-3 block">Curated Spaces</span>
              <h2 className="heading-lg">Collections</h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((col, i) => (
              <SectionReveal key={col.id} delay={i * 0.1}>
                <CollectionCard id={col.id} name={col.name} image={col.image} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="label-text text-accent mb-3 block">Handcrafted</span>
              <h2 className="heading-lg">Featured Pieces</h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {featuredProducts.map((product, i) => (
              <SectionReveal key={product.id} delay={i * 0.08}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.images[product.colors[0] as keyof typeof product.images][0]}
                  secondImage={product.images[product.colors[0] as keyof typeof product.images][1]}
                  category={product.category}
                />
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <div className="text-center mt-16">
              <Link to="/products" className="btn-outline inline-block">
                View All Products
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <span className="label-text text-accent mb-4 block">Our Story</span>
                <h2 className="heading-lg mb-8">Designed for<br />the Way You Live</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Edition was founded on a simple belief: that beautiful design should enhance everyday life. Each piece in our collection represents a dialogue between tradition and innovation, crafted by artisans who understand that true luxury lies in the details.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  We source the finest materials from responsible suppliers and employ time-honoured techniques to create furniture that endures — both in construction and in style.
                </p>
                <Link to="/about" className="btn-outline inline-block">
                  Discover More
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Interior Inspiration Gallery */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="label-text text-accent mb-3 block">Inspiration</span>
              <h2 className="heading-lg">Interior Gallery</h2>
            </div>
          </SectionReveal>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {lookbookImages.map((img, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="overflow-hidden break-inside-avoid group cursor-pointer">
                  <img
                    src={img}
                    alt="Interior inspiration"
                    className="w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2000"
          alt="Showroom"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <SectionReveal>
            <span className="label-text text-background/80 mb-4 block">Experience in Person</span>
            <h2 className="heading-lg text-background mb-8">Visit Our Showroom</h2>
            <Link to="/showroom" className="btn-outline border-background/80 text-background hover:bg-background hover:text-foreground inline-block">
              Book an Appointment
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
