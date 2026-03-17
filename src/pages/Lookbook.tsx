import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000', span: 'row-span-2' },
  { url: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800', span: '' },
  { url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800', span: '' },
  { url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000', span: 'row-span-2' },
  { url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800', span: '' },
  { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800', span: '' },
  { url: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800', span: '' },
  { url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1000', span: 'row-span-2' },
  { url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800', span: '' },
];

const Lookbook = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const next = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const prev = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

  return (
    <div className="pt-32 pb-24">
      <div className="container-luxury">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="label-text text-accent mb-3 block">Inspiration</span>
            <h1 className="heading-lg">Lookbook</h1>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
          {galleryImages.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.04}>
              <motion.div
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className={`${item.span} overflow-hidden bg-secondary cursor-pointer h-full`}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={item.url}
                  className="w-full h-full object-cover"
                  alt="Lookbook inspiration"
                  loading="lazy"
                />
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/95 z-[70] flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 text-background/80 hover:text-background"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-6 text-background/80 hover:text-background"
              aria-label="Previous"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-6 text-background/80 hover:text-background"
              aria-label="Next"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.img
              key={lightboxIndex}
              src={galleryImages[lightboxIndex].url.replace('w=800', 'w=1600').replace('w=1000', 'w=1600')}
              alt="Lookbook"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lookbook;
