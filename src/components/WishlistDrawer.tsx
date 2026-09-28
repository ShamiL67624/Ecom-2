import React from 'react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: Set<string>;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onRemoveFromWishlist: (product: Product) => void;
  onShowToast: (message: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  allProducts,
  onSelectProduct,
  onAddToCart,
  onRemoveFromWishlist,
  onShowToast,
}) => {
  if (!isOpen) return null;

  const savedProducts = allProducts.filter((p) => wishlistIds.has(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#fcf9f3] shadow-2xl flex flex-col justify-between">
        {/* Header */}
        <div className="p-6 border-b border-[#e5e2dc] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#745a34]">favorite</span>
            <span className="font-heading font-black text-[18px] uppercase tracking-wider text-black">
              Wishlist Archive
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#f0eee8] text-[11px] font-mono font-bold">
              {savedProducts.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#f0eee8] flex items-center justify-center text-black hover:bg-[#e5e2dc] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Saved List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-[#444748]">
              <span className="material-symbols-outlined text-[48px] text-[#c4c7c7] mb-2">
                favorite_border
              </span>
              <p className="font-heading font-bold text-[16px] text-black">Your wishlist is empty</p>
              <p className="text-[13px] mt-1 max-w-xs">
                Save pieces to your archive for quick access and restock notifications.
              </p>
            </div>
          ) : (
            savedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl p-3.5 border border-[#e5e2dc] shadow-sm flex gap-3 relative group"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-24 rounded-lg object-cover bg-[#f0eee8] cursor-pointer flex-shrink-0"
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#745a34] font-bold">
                      {product.categoryLabel}
                    </span>
                    <h4
                      className="font-heading font-bold text-[13px] text-black line-clamp-1 cursor-pointer hover:text-[#745a34]"
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                      }}
                    >
                      {product.title}
                    </h4>
                    <div className="font-heading font-black text-[14px] text-black mt-1">
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => {
                        onAddToCart(product);
                        onShowToast(`${product.title} added to bag`);
                      }}
                      className="flex-1 h-8 rounded-lg bg-black text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#745a34] active:scale-95 transition-all"
                    >
                      Move to Bag
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(product)}
                      className="w-8 h-8 rounded-lg border border-[#e5e2dc] flex items-center justify-center text-[#ba1a1a] hover:bg-[#ffdad6] transition-colors"
                      title="Remove"
                    >
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-white border-t border-[#e5e2dc]">
          <p className="text-[11px] text-[#444748] text-center font-mono">
            Pieces in your archive are held for 30 days. Stock subject to limited production run.
          </p>
        </div>
      </div>
    </div>
  );
};
