import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../data/products';

interface CatalogScreenProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, color?: string, size?: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: Set<string>;
  onShowToast: (message: string) => void;
  onOpenLookbook: () => void;
}

export const CatalogScreen: React.FC<CatalogScreenProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onShowToast,
  onOpenLookbook,
}) => {
  // Filter States
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [inStockOnly, setInStockOnly] = useState<boolean>(true);
  const [selectedSilhouette, setSelectedSilhouette] = useState<string>('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<number>(25000);
  const [sortOption, setSortOption] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [gridCols, setGridCols] = useState<2 | 3>(3);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (selectedSize) count++;
    if (inStockOnly) count++;
    if (selectedSilhouette) count++;
    if (selectedMaterial) count++;
    if (maxPrice < 25000) count++;
    return count;
  }, [selectedCategory, selectedSize, inStockOnly, selectedSilhouette, selectedMaterial, maxPrice]);

  const clearAllFilters = () => {
    onSelectCategory('all');
    setSelectedSize('');
    setInStockOnly(false);
    setSelectedSilhouette('');
    setSelectedMaterial('');
    setMaxPrice(25000);
  };

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'outerwear' && p.category !== 'outerwear') return false;
        if (selectedCategory === 'streetwear' && p.category !== 'streetwear') return false;
        if (selectedCategory === 'tailored' && p.category !== 'tailored') return false;
        if (selectedCategory === 'footwear' && p.category !== 'footwear') return false;
        if (selectedCategory === 'knitwear' && p.category !== 'knitwear') return false;
        if (selectedCategory === 'accessories' && p.category !== 'accessories') return false;
      }
      // Price filter
      if (p.price > maxPrice) return false;
      // Size filter
      if (selectedSize && !p.sizes.includes(selectedSize)) return false;
      // In stock
      if (inStockOnly && selectedSize && !p.inStockSizes.includes(selectedSize)) return false;
      // Silhouette
      if (
        selectedSilhouette &&
        !p.specs.silhouette.toLowerCase().includes(selectedSilhouette.toLowerCase())
      ) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0; // default featured
    });
  }, [products, selectedCategory, maxPrice, selectedSize, inStockOnly, selectedSilhouette, sortOption]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between text-[11px] md:text-[12px] text-[#444748] mb-3">
        <div className="flex items-center gap-1.5 font-medium">
          <span className="hover:text-black cursor-pointer" onClick={() => onSelectCategory('all')}>Home</span>
          <span>/</span>
          <span className="hover:text-black cursor-pointer" onClick={() => onSelectCategory('all')}>Shop</span>
          <span>/</span>
          <span className="text-[#1c1c18] font-bold">All Collections (Menswear &amp; Streetwear)</span>
        </div>
        <div className="hidden lg:flex items-center gap-3 font-mono text-[10px] tracking-wider uppercase text-[#745a34]">
          <span>CURATED IN PARIS &amp; TOKYO</span>
          <span>•</span>
          <span>ARCHIVAL RELEASE NO. 09</span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="mb-6">
        <span className="text-[10px] md:text-[11px] font-mono tracking-widest uppercase text-[#745a34] block mb-1">
          • SEASONAL CAPSULE 2024 / 2025
        </span>
        <h1 className="font-heading font-black text-[28px] sm:text-[36px] md:text-[48px] uppercase tracking-tight text-[#1c1c18] leading-none mb-2">
          Menswear &amp; Streetwear
        </h1>
        <p className="text-[13px] md:text-[15px] text-[#444748] max-w-2xl font-light">
          Curated Catalogue • 148 Pieces engineered with sculptural precision and heavyweight textiles.
        </p>
      </div>

      {/* Active Filter Tags Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-6 pt-2 pb-2 border-y border-[#1c1c18]/10 text-[12px]">
        <span className="font-bold text-[10px] tracking-widest uppercase text-[#745a34] mr-2">
          ACTIVE:
        </span>

        {selectedCategory !== 'all' && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0eee8] text-[#1c1c18] font-medium text-[11px]">
            <span>Category: {selectedCategory.toUpperCase()}</span>
            <button onClick={() => onSelectCategory('all')} className="hover:text-[#ba1a1a]">
              <span className="material-symbols-outlined text-[14px]">close</span>
            </button>
          </span>
        )}

        {selectedSize && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0eee8] text-[#1c1c18] font-medium text-[11px]">
            <span>Size {selectedSize}</span>
            <button onClick={() => setSelectedSize('')} className="hover:text-[#ba1a1a]">
              <span className="material-symbols-outlined text-[14px]">close</span>
            </button>
          </span>
        )}

        {inStockOnly && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0eee8] text-[#1c1c18] font-medium text-[11px]">
            <span>In Stock Only</span>
            <button onClick={() => setInStockOnly(false)} className="hover:text-[#ba1a1a]">
              <span className="material-symbols-outlined text-[14px]">close</span>
            </button>
          </span>
        )}

        {selectedSilhouette && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0eee8] text-[#1c1c18] font-medium text-[11px]">
            <span>{selectedSilhouette}</span>
            <button onClick={() => setSelectedSilhouette('')} className="hover:text-[#ba1a1a]">
              <span className="material-symbols-outlined text-[14px]">close</span>
            </button>
          </span>
        )}

        {activeFiltersCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-[11px] font-bold text-[#ba1a1a] hover:underline uppercase tracking-wider ml-2"
          >
            CLEAR ALL
          </button>
        )}

        {/* Mobile Filter Trigger Button */}
        <div className="ml-auto lg:hidden">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-wider shadow-sm"
          >
            <span className="material-symbols-outlined text-[15px]">tune</span>
            <span>FILTER ({activeFiltersCount})</span>
          </button>
        </div>
      </div>

      {/* Horizontal Category Scroll Bar (Mobile & Tablet) */}
      <div className="flex lg:hidden items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-black text-white shadow-sm'
                : 'bg-[#ffffff] text-[#444748] border border-[#e5e2dc]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Grid & Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* DESKTOP REFINE SIDEBAR (3 cols) */}
        <aside className="hidden lg:block lg:col-span-3 bg-white rounded-2xl p-6 border border-[#e5e2dc]/60 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#e5e2dc]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">tune</span>
              <h3 className="font-heading font-black text-[14px] uppercase tracking-wider text-[#1c1c18]">
                REFINE
              </h3>
            </div>
            {activeFiltersCount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-[#f0eee8] text-[10px] font-bold font-mono text-[#745a34]">
                {activeFiltersCount} ACTIVE
              </span>
            )}
          </div>

          {/* Categories List */}
          <div>
            <h4 className="font-heading font-bold text-[11px] uppercase tracking-widest text-[#745a34] mb-3">
              CATEGORIES
            </h4>
            <div className="space-y-1 text-[13px]">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`w-full flex items-center justify-between py-1.5 px-2 rounded-lg transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-black text-white font-bold'
                      : 'text-[#444748] hover:bg-[#f6f3ed]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="text-[11px] font-mono opacity-70">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Index Slider */}
          <div className="pt-4 border-t border-[#e5e2dc]">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-heading font-bold text-[11px] uppercase tracking-widest text-[#745a34]">
                PRICE INDEX
              </h4>
              <span className="font-mono text-[12px] font-bold text-[#1c1c18]">
                ₹2,000 – ₹{maxPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="3000"
              max="25000"
              step="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-black cursor-pointer"
            />
          </div>

          {/* Sizing (Unisex) */}
          <div className="pt-4 border-t border-[#e5e2dc]">
            <h4 className="font-heading font-bold text-[11px] uppercase tracking-widest text-[#745a34] mb-3">
              SIZING (UNISEX)
            </h4>
            <div className="grid grid-cols-5 gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(selectedSize === sz ? '' : sz)}
                  className={`h-9 rounded-lg font-heading text-[12px] font-bold uppercase transition-all ${
                    selectedSize === sz
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-[#f6f3ed] text-[#1c1c18] hover:bg-[#e5e2dc]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Tone & Palette Swatches */}
          <div className="pt-4 border-t border-[#e5e2dc]">
            <h4 className="font-heading font-bold text-[11px] uppercase tracking-widest text-[#745a34] mb-3">
              TONE &amp; PALETTE
            </h4>
            <div className="flex items-center gap-2.5">
              {[
                { name: 'Noir', hex: '#161616' },
                { name: 'Charcoal', hex: '#2f2e2d' },
                { name: 'Camel', hex: '#9d7c58' },
                { name: 'Bone', hex: '#ece7dc' },
                { name: 'Olive', hex: '#484b3f' },
              ].map((color) => (
                <button
                  key={color.name}
                  title={color.name}
                  className="w-7 h-7 rounded-full border border-black/15 shadow-sm hover:scale-110 active:scale-95 transition-all"
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          {/* Silhouette & Fit */}
          <div className="pt-4 border-t border-[#e5e2dc]">
            <h4 className="font-heading font-bold text-[11px] uppercase tracking-widest text-[#745a34] mb-3">
              SILHOUETTE &amp; FIT
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[12px]">
              {['Oversized', 'Relaxed', 'Tailored', 'Boxy'].map((fit) => (
                <button
                  key={fit}
                  onClick={() => setSelectedSilhouette(selectedSilhouette === fit ? '' : fit)}
                  className={`py-1.5 px-3 rounded-lg font-medium transition-all ${
                    selectedSilhouette === fit
                      ? 'bg-black text-white font-bold'
                      : 'bg-[#f6f3ed] text-[#444748] hover:bg-[#e5e2dc]'
                  }`}
                >
                  {fit}
                </button>
              ))}
            </div>
          </div>

          {/* Artisanal Material */}
          <div className="pt-4 border-t border-[#e5e2dc]">
            <h4 className="font-heading font-bold text-[11px] uppercase tracking-widest text-[#745a34] mb-2">
              ARTISANAL MATERIAL
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-mono uppercase tracking-wider">
              {['MELTON WOOL', 'FRENCH TERRY', 'CUPRO SILK', 'RAW DENIM'].map((mat) => (
                <span key={mat} className="px-2.5 py-1 bg-[#f6f3ed] rounded-md text-[#444748]">
                  {mat}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* PRODUCTS AREA (9 cols on desktop) */}
        <div className="lg:col-span-9 space-y-8">
          {/* Top Bar Controls */}
          <div className="flex items-center justify-between text-[12px] text-[#444748]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#745a34]" />
              <span className="font-mono text-[#1c1c18] font-bold">
                SHOWING {displayedProducts.length} OF {filteredProducts.length} PIECES
              </span>
              <span className="hidden sm:inline text-[#444748]">• Archival Batch #24-Q3</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Grid Toggle (Desktop) */}
              <div className="hidden sm:flex items-center gap-1 bg-[#f0eee8] p-1 rounded-lg">
                <button
                  onClick={() => setGridCols(2)}
                  className={`p-1 rounded ${gridCols === 2 ? 'bg-white shadow-sm text-black' : 'text-[#444748]'}`}
                  title="2 Columns"
                >
                  <span className="material-symbols-outlined text-[18px]">view_agenda</span>
                </button>
                <button
                  onClick={() => setGridCols(3)}
                  className={`p-1 rounded ${gridCols === 3 ? 'bg-white shadow-sm text-black' : 'text-[#444748]'}`}
                  title="3 Columns"
                >
                  <span className="material-symbols-outlined text-[18px]">grid_view</span>
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-1">
                <span className="font-bold text-[11px] uppercase tracking-wider text-[#1c1c18] hidden sm:inline">
                  Sort:
                </span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as any)}
                  className="bg-white border border-[#e5e2dc] rounded-lg px-3 py-1.5 text-[12px] font-bold text-[#1c1c18] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured Drops</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Collector Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div
            className={`grid gap-4 md:gap-6 ${
              gridCols === 2
                ? 'grid-cols-1 sm:grid-cols-2'
                : 'grid-cols-2 sm:grid-cols-2 xl:grid-cols-3'
            }`}
          >
            {displayedProducts.map((product) => {
              const isLiked = wishlistIds.has(product.id);
              return (
                <div
                  key={product.id}
                  className="bg-[#ffffff] rounded-xl p-3 md:p-3.5 shadow-sm border border-[#e5e2dc]/50 flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Container */}
                  <div
                    onClick={() => onSelectProduct(product)}
                    className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-[#f6f3ed] mb-3 cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.badge && (
                        <div className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-black/5">
                          <span className="font-heading text-[10px] font-extrabold uppercase tracking-wider text-[#1c1c18]">
                            {product.badge}
                          </span>
                        </div>
                      )}
                      {product.specs.fabricDensity && (
                        <div className="px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md shadow-sm">
                          <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-white">
                            {product.specs.fabricDensity}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product);
                      }}
                      aria-label="Save to Wishlist"
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1c1c18] active:scale-75 transition-transform shadow-sm hover:bg-white"
                    >
                      <span
                        className={`material-symbols-outlined text-[17px] ${
                          isLiked ? 'text-[#ba1a1a] fill-1' : 'text-[#1c1c18]'
                        }`}
                      >
                        favorite
                      </span>
                    </button>

                    {/* Quick Add Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                        onShowToast(`${product.title} added to bag`);
                      }}
                      aria-label="Quick Add"
                      className="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-[#000000] text-white flex items-center justify-center shadow-lg active:scale-90 hover:bg-[#745a34] transition-all"
                    >
                      <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#745a34]">
                        {product.edition || product.categoryLabel}
                      </span>
                      <div className="flex items-center gap-1 font-mono">
                        <span className="material-symbols-outlined text-[#745a34] text-[13px] fill-1">
                          star
                        </span>
                        <span className="font-bold text-[#1c1c18]">{product.rating}</span>
                      </div>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-heading text-[14px] md:text-[15px] font-bold text-[#1c1c18] truncate cursor-pointer hover:text-[#745a34] transition-colors"
                    >
                      {product.title}
                    </h3>

                    <p className="text-[12px] text-[#444748] truncate">
                      {product.subtitle}
                    </p>

                    {/* Color Swatch dots */}
                    <div className="flex items-center gap-1.5 py-1">
                      {product.colors.map((c) => (
                        <span
                          key={c.name}
                          className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-inner"
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-heading font-black text-[16px] md:text-[18px] text-[#1c1c18]">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[12px] text-[#444748] line-through font-mono">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* IN-FEED ARCHITECTURAL LAYERING LOOKBOOK BANNER */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-10 text-white group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAz1ul_CHLDBxdf_tkE87aG4aqPVYyNR0y3fJVBVs6MruB3PDIQkeo5okbiCc0EDY4gjkOT_6U5DzvTRNwz3RQeCOHVyzKiDR47tjons3DJ7nwJWd90KPcS0eFpHOti8r1AlZQNJWeDMy57v9ym3455PRGtE7xELCjiWNkOA1dZPzj1vlAikQE1woRqpfhOY3nkrB7M8uCk-2j5dAxRkmUEma8uqNFGMBhjrAnH19T1Yb7KYQzWWFw0dQ')`,
              }}
            />
            <div className="absolute inset-0 bg-black/75 group-hover:bg-black/70 transition-colors" />

            <div className="relative z-10 max-w-xl flex flex-col gap-3">
              <span className="text-[10px] md:text-[11px] font-mono text-[#ffddb1] tracking-widest uppercase">
                DROP IX • LIMITED RUN NUMBERED 01/300
              </span>
              <h3 className="font-heading text-[26px] sm:text-[34px] font-black uppercase tracking-tight leading-tight">
                Architectural Layering
              </h3>
              <p className="text-[13px] md:text-[14px] text-[#e5e2dc] leading-relaxed font-light">
                Sculpted from 500-gram combed cotton and bonded melton wool. Engineered to exist outside cyclical trend calendars.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenLookbook}
                  className="h-11 px-6 rounded-full bg-white text-black font-heading text-[11px] font-bold uppercase tracking-widest hover:bg-[#ffddb1] shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  EXPLORE DROP
                </button>
                <button
                  onClick={onOpenLookbook}
                  className="h-11 px-6 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-heading text-[11px] font-bold uppercase tracking-widest hover:bg-white/25 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">play_circle</span>
                  <span>LOOKBOOK FILM</span>
                </button>
              </div>
            </div>
          </div>

          {/* Load More Pagination */}
          <div className="flex flex-col items-center gap-3 pt-6 pb-4">
            <div className="flex items-center justify-between w-full max-w-xs text-[11px] font-mono text-[#444748]">
              <span>Showing {displayedProducts.length} of {filteredProducts.length} pieces</span>
              <span>{Math.round((displayedProducts.length / filteredProducts.length) * 100)}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full max-w-xs h-1 bg-[#e5e2dc] rounded-full overflow-hidden">
              <div
                className="h-full bg-black rounded-full transition-all duration-300"
                style={{
                  width: `${(displayedProducts.length / filteredProducts.length) * 100}%`,
                }}
              />
            </div>

            {displayedProducts.length < filteredProducts.length && (
              <button
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="mt-3 px-8 h-12 rounded-full bg-[#000000] text-white font-heading text-[12px] font-bold uppercase tracking-widest hover:bg-[#745a34] active:scale-95 transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>LOAD MORE PIECES</span>
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#e5e2dc]">
                <h3 className="font-heading font-black text-[16px] uppercase tracking-wider text-[#1c1c18]">
                  Filter &amp; Refine
                </h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#f0eee8] flex items-center justify-center text-black"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Sizing */}
              <div>
                <h4 className="font-heading font-bold text-[12px] uppercase tracking-wider text-[#745a34] mb-2">
                  Size
                </h4>
                <div className="grid grid-cols-5 gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(selectedSize === sz ? '' : sz)}
                      className={`h-10 rounded-lg font-bold text-[12px] uppercase ${
                        selectedSize === sz ? 'bg-black text-white' : 'bg-[#f6f3ed] text-black'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="flex justify-between text-[12px] font-bold mb-2">
                  <span>Price Up to</span>
                  <span>₹{maxPrice.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="25000"
                  step="1000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-black"
                />
              </div>

              {/* In stock */}
              <label className="flex items-center gap-3 cursor-pointer py-2">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-5 h-5 accent-black rounded"
                />
                <span className="text-[13px] font-medium text-[#1c1c18]">In Stock Only</span>
              </label>
            </div>

            <div className="pt-6 border-t border-[#e5e2dc] flex items-center gap-3">
              <button
                onClick={clearAllFilters}
                className="flex-1 h-12 rounded-xl bg-[#f0eee8] text-black font-bold text-[12px] uppercase tracking-wider"
              >
                Clear
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 h-12 rounded-xl bg-black text-white font-bold text-[12px] uppercase tracking-wider"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
