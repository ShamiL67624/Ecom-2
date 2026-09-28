import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
  onShowToast: (message: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onShowToast,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0); // e.g. 0.4 for 40%

  if (!isOpen) return null;

  const rawSubtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = rawSubtotal * appliedDiscount;
  const finalTotal = Math.max(0, rawSubtotal - discountAmount);
  const freeShippingThreshold = 15000;
  const freeShippingReached = rawSubtotal >= freeShippingThreshold;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'FALL40' || clean === 'ATELIER40') {
      setAppliedDiscount(0.4);
      onShowToast('Vault discount 40% OFF applied!');
    } else if (clean === 'ATELIERVIP') {
      setAppliedDiscount(0.15);
      onShowToast('VIP discount 15% OFF applied!');
    } else {
      onShowToast('Invalid promo code. Use code FALL40 for 40% OFF');
    }
  };

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
            <span className="font-heading font-black text-[18px] uppercase tracking-wider text-black">
              Shopping Bag
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#f0eee8] text-[11px] font-mono font-bold">
              {items.length} {items.length === 1 ? 'Piece' : 'Pieces'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#f0eee8] flex items-center justify-center text-black hover:bg-[#e5e2dc] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="bg-[#f0eee8] px-6 py-3 border-b border-[#e5e2dc] text-[11px]">
          <div className="flex justify-between font-bold mb-1">
            <span>
              {freeShippingReached
                ? '✓ Complimentary Worldwide Express Shipping Unlocked'
                : `Add ₹${(freeShippingThreshold - rawSubtotal).toLocaleString('en-IN')} for Free Express Shipping`}
            </span>
            <span className="font-mono">{Math.min(100, Math.round((rawSubtotal / freeShippingThreshold) * 100))}%</span>
          </div>
          <div className="h-1.5 w-full bg-[#e5e2dc] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#745a34] rounded-full transition-all duration-300"
              style={{
                width: `${Math.min(100, (rawSubtotal / freeShippingThreshold) * 100)}%`,
              }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-[#444748]">
              <span className="material-symbols-outlined text-[48px] text-[#c4c7c7] mb-2">
                shopping_bag
              </span>
              <p className="font-heading font-bold text-[16px] text-black">Your bag is empty</p>
              <p className="text-[13px] mt-1 max-w-xs">
                Explore our curated drops and archival collection to acquire garments.
              </p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${idx}`}
                className="bg-white rounded-xl p-3.5 border border-[#e5e2dc] shadow-sm flex gap-3 relative"
              >
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-20 h-24 rounded-lg object-cover bg-[#f0eee8] flex-shrink-0"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start pr-6">
                      <h4 className="font-heading font-bold text-[13px] text-black line-clamp-1">
                        {item.product.title}
                      </h4>
                    </div>
                    <div className="text-[11px] text-[#444748] mt-0.5 font-mono">
                      <span>Size: {item.selectedSize}</span> • <span>Color: {item.selectedColor}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-[#e5e2dc] rounded-md bg-[#f6f3ed]">
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-black"
                      >
                        <span className="material-symbols-outlined text-[14px]">remove</span>
                      </button>
                      <span className="w-6 text-center font-mono text-[12px] font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-black"
                      >
                        <span className="material-symbols-outlined text-[14px]">add</span>
                      </button>
                    </div>

                    <span className="font-heading font-black text-[14px] text-black">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => onRemoveItem(idx)}
                  className="absolute top-2 right-2 text-[#444748] hover:text-[#ba1a1a]"
                >
                  <span className="material-symbols-outlined text-[18px]">delete_outline</span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Area */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#e5e2dc] space-y-4">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="PROMO CODE (e.g. FALL40)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 h-10 px-3 rounded-lg bg-[#f6f3ed] border border-[#e5e2dc] text-[12px] font-mono uppercase focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="px-4 h-10 rounded-lg bg-black text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#745a34] transition-all"
              >
                Apply
              </button>
            </form>

            {/* Calculations */}
            <div className="space-y-1.5 text-[12px]">
              <div className="flex justify-between text-[#444748]">
                <span>Subtotal</span>
                <span className="font-mono">₹{rawSubtotal.toLocaleString('en-IN')}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-[#745a34] font-bold">
                  <span>Vault Archive Discount ({(appliedDiscount * 100).toFixed(0)}%)</span>
                  <span className="font-mono">-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-[#444748]">
                <span>Express Courier &amp; Insurance</span>
                <span className="font-mono text-[#745a34] font-bold">COMPLIMENTARY</span>
              </div>
              <div className="flex justify-between text-[16px] font-heading font-black text-black pt-2 border-t border-[#e5e2dc]">
                <span>Total</span>
                <span>₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onCheckout}
              className="w-full h-12 rounded-full bg-[#000000] text-white font-heading text-[12px] font-black uppercase tracking-widest hover:bg-[#745a34] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>PROCEED TO SECURE CHECKOUT</span>
              <span className="material-symbols-outlined text-[18px]">lock</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
