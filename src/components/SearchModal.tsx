import React, { useState } from 'react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? products.filter((p) => {
        const text = `${p.title} ${p.subtitle} ${p.categoryLabel} ${p.specs.silhouette} ${p.specs.lining}`.toLowerCase();
        return text.includes(query.toLowerCase());
      })
    : [];

  const handleSelect = (product: Product) => {
    onSelectProduct(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 overflow-hidden">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e5e2dc] z-10">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#e5e2dc] flex items-center gap-3">
          <span className="material-symbols-outlined text-[24px] text-[#745a34]">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search archival pieces, silhouettes, textiles (e.g. wool, trench, hoodie)..."
            className="flex-1 text-[15px] font-medium text-[#1c1c18] focus:outline-none placeholder:text-[#444748]/60 bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#444748] hover:text-black"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-[#f0eee8] text-[12px] font-bold uppercase tracking-wider text-black"
          >
            ESC
          </button>
        </div>

        {/* Results or Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {query.trim() === '' ? (
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#745a34] font-bold block mb-2">
                  TRENDING SEARCHES
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Oversized Wool Trench', 'French Terry Hoodie', 'Monolith Sneaker', 'Pleated Trousers', 'Leather Crossbody'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1.5 rounded-full bg-[#f6f3ed] hover:bg-[#e5e2dc] text-[12px] text-[#1c1c18] font-medium transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#745a34] font-bold block mb-2">
                  CURATED REALMS
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[12px]">
                  {['Outerwear', 'Streetwear', 'Tailored', 'Footwear'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setQuery(cat)}
                      className="p-3 rounded-xl bg-[#f0eee8] hover:bg-[#e5e2dc] text-left font-bold text-[#1c1c18] transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-[#444748]">
              <span className="material-symbols-outlined text-[36px] text-[#c4c7c7] mb-2">
                search_off
              </span>
              <p className="font-heading font-bold text-[14px]">No garments matching &ldquo;{query}&rdquo;</p>
              <p className="text-[12px] mt-1">Try exploring Outerwear or Streetwear categories.</p>
            </div>
          ) : (
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#745a34] font-bold block mb-2">
                FOUND {results.length} PIECES
              </span>
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelect(product)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#f6f3ed] cursor-pointer transition-colors border border-transparent hover:border-[#e5e2dc]"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-14 h-16 rounded-lg object-cover bg-[#f0eee8]"
                  />
                  <div className="flex-1">
                    <span className="text-[10px] font-mono uppercase text-[#745a34] font-bold">
                      {product.categoryLabel}
                    </span>
                    <h4 className="font-heading font-bold text-[14px] text-black">
                      {product.title}
                    </h4>
                    <span className="text-[11px] text-[#444748]">{product.subtitle}</span>
                  </div>
                  <div className="font-heading font-black text-[15px] text-black">
                    ₹{product.price.toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
