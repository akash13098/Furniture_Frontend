import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CollectionCardProps {
  id: string;
  name: string;
  image: string;
}

const CollectionCard = ({ id, name, image }: CollectionCardProps) => {
  return (
    <Link to={`/collections/${id}`} className="group block relative overflow-hidden">
      <div className="aspect-[3/4] overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-400" />
        <div className="absolute inset-0 flex items-end p-8">
          <h3 className="text-2xl font-display text-background tracking-wide">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
