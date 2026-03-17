import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  secondImage?: string;
  category?: string;
}

const ProductCard = ({ id, name, price, image, secondImage, category }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`} className="group block">
      <div className="aspect-[3/4] overflow-hidden bg-secondary mb-4 relative">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
          loading="lazy"
        />
        {secondImage && (
          <img
            src={secondImage}
            alt={`${name} alternate`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-luxury"
            loading="lazy"
          />
        )}
      </div>
      {category && (
        <span className="label-text text-accent mb-1 block">{category}</span>
      )}
      <h3 className="font-display text-lg mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground">${price.toLocaleString()}</p>
    </Link>
  );
};

export default ProductCard;
