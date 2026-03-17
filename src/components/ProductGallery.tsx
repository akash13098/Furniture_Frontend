import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="aspect-[4/5] overflow-hidden bg-secondary group cursor-crosshair">
        <AnimatePresence mode="wait">
          <motion.img
            key={mainImage}
            src={mainImage}
            alt={productName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
          />
        </AnimatePresence>
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setMainImage(img)}
              className={`aspect-square overflow-hidden bg-secondary transition-opacity duration-300 ${
                mainImage === img ? 'opacity-100 ring-1 ring-foreground' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} className="w-full h-full object-cover" alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
