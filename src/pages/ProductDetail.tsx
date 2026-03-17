import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductGallery from '@/components/ProductGallery';
import ColorSelector from '@/components/ColorSelector';
import SectionReveal from '@/components/SectionReveal';
import products from '@/data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [activeColor, setActiveColor] = useState(product?.colors[0] || '');

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <div className="container-luxury">
          <h1 className="heading-lg mb-4">Product Not Found</h1>
          <Link to="/products" className="btn-outline inline-block">Back to Products</Link>
        </div>
      </div>
    );
  }

  const images = product.images[activeColor as keyof typeof product.images] || [];

  const handleColorChange = (color: string) => {
    setActiveColor(color);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container-luxury">
        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <SectionReveal className="lg:col-span-7">
            <ProductGallery images={images} productName={product.name} />
          </SectionReveal>

          <SectionReveal delay={0.2} className="lg:col-span-5 flex flex-col justify-center">
            <span className="label-text text-accent mb-3">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-display mb-4">{product.name}</h1>
            <p className="text-2xl mb-8 text-foreground">${product.price.toLocaleString()}</p>

            <div className="mb-10">
              <ColorSelector
                colors={product.colors}
                activeColor={activeColor}
                onColorChange={handleColorChange}
              />
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-10">
              <p>{product.description}</p>
              <div className="pt-4 space-y-2">
                <p>
                  <span className="label-text text-foreground mr-2">Dimensions:</span>
                  {product.dimensions}
                </p>
                <p>
                  <span className="label-text text-foreground mr-2">Materials:</span>
                  {product.materials.join(', ')}
                </p>
              </div>
            </div>

            <button className="btn-primary">Inquire for Showroom</button>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
