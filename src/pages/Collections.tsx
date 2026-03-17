import { useParams, Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import CollectionCard from '@/components/CollectionCard';
import SectionReveal from '@/components/SectionReveal';
import products from '@/data/products.json';
import collectionsData from '@/data/collections.json';

const categoryMap: Record<string, string> = {
  'living-room': 'Living Room',
  'dining-room': 'Dining Room',
  'bedroom': 'Bedroom',
  'office': 'Office',
};

const Collections = () => {
  const { id } = useParams();

  // If no id, show all collections
  if (!id) {
    return (
      <div className="pt-32 pb-24">
        <div className="container-luxury">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="label-text text-accent mb-3 block">Explore</span>
              <h1 className="heading-lg">Collections</h1>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {collectionsData.map((col, i) => (
              <SectionReveal key={col.id} delay={i * 0.1}>
                <CollectionCard id={col.id} name={col.name} image={col.image} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const collection = collectionsData.find((c) => c.id === id);
  const categoryName = categoryMap[id] || '';
  const collectionProducts = products.filter((p) => p.category === categoryName);

  if (!collection) {
    return (
      <div className="pt-32 pb-24 text-center container-luxury">
        <h1 className="heading-lg mb-4">Collection Not Found</h1>
        <Link to="/collections" className="btn-outline inline-block">View All Collections</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={collection.image} alt={collection.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <SectionReveal>
            <h1 className="heading-xl text-background text-center">{collection.name}</h1>
          </SectionReveal>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-luxury">
          <SectionReveal>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
              {collection.description}
            </p>
          </SectionReveal>
          {collectionProducts.length === 0 ? (
            <p className="text-center text-muted-foreground">More pieces coming soon.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {collectionProducts.map((product, i) => (
                <SectionReveal key={product.id} delay={i * 0.08}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.images[product.colors[0] as keyof typeof product.images][0]}
                    secondImage={product.images[product.colors[0] as keyof typeof product.images][1]}
                  />
                </SectionReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Collections;
