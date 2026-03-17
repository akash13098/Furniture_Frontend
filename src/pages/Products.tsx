import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import SectionReveal from '@/components/SectionReveal';
import { Search } from 'lucide-react';
import products from '@/data/products.json';

const categories = ['All', ...new Set(products.map((p) => p.category))];
const allMaterials = [...new Set(products.flatMap((p) => p.materials))];
const allColors = [...new Set(products.flatMap((p) => p.colors))];

const Products = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === 'All' || p.category === category;
      const matchMaterial = selectedMaterials.length === 0 ||
        p.materials.some((m) => selectedMaterials.includes(m));
      const matchColor = selectedColors.length === 0 ||
        p.colors.some((c) => selectedColors.includes(c));
      return matchSearch && matchCategory && matchMaterial && matchColor;
    });
  }, [search, category, selectedMaterials, selectedColors]);

  const toggleFilter = (value: string, list: string[], setter: (v: string[]) => void) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container-luxury">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="label-text text-accent mb-3 block">Our Collection</span>
            <h1 className="heading-lg">Products</h1>
          </div>
        </SectionReveal>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 pl-7 pr-0 bg-transparent border-b border-input text-foreground focus:border-foreground focus:outline-none transition-colors text-sm"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
          {/* Filters */}
          <aside className="space-y-8">
            <div>
              <h3 className="label-text text-foreground mb-4">Category</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`text-sm text-left py-1 transition-colors ${
                      category === cat ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="label-text text-foreground mb-4">Color</h3>
              <div className="flex flex-wrap gap-2">
                {allColors.map((color) => {
                  const colorMap: Record<string, string> = { walnut: '#5d4037', oak: '#d7ccc8', black: '#111', white: '#f5f5f5' };
                  return (
                    <button
                      key={color}
                      onClick={() => toggleFilter(color, selectedColors, setSelectedColors)}
                      className={`w-7 h-7 rounded-full transition-all ${
                        selectedColors.includes(color) ? 'ring-2 ring-foreground ring-offset-2 scale-110' : 'hover:scale-105'
                      }`}
                      style={{ backgroundColor: colorMap[color] || color }}
                      aria-label={color}
                    />
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="label-text text-foreground mb-4">Material</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {allMaterials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => toggleFilter(mat, selectedMaterials, setSelectedMaterials)}
                    className={`text-sm text-left py-1 transition-colors ${
                      selectedMaterials.includes(mat) ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div>
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-20">No products found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
                {filtered.map((product, i) => (
                  <SectionReveal key={product.id} delay={i * 0.05}>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
