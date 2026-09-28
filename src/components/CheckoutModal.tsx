import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onClearCart: () => void;
  onShowToast: (message: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onClearCart,
  onShowToast,
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    name: 'Elena Rostova',
    email: 'elena.rostova@maison.com',
    phone: '+91 98200 45678',
    address: 'Apartment 14B, The Monolith Towers, Altamount Road',
    city: 'Mumbai',
    pincode: '400026',
    paymentMethod: 'UPI',
  });

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    onClearCart();
    onShowToast('Order confirmed! Archival dispatch #AT-84920 initialized.');
  };

  const orderNumber = 'AT-84920-FW25';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl z-10 border border-[#e5e2dc]">
        {step === 'details' ? (
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#e5e2dc]">
              <div>
                <h3 className="font-heading font-black text-[18px] uppercase tracking-wider text-black">
                  Instant Acquisition
                </h3>
                <span className="text-[11px] font-mono text-[#745a34]">ENCRYPTED CONCIERGE CHECKOUT</span>
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-full bg-[#f0eee8] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#745a34] block mb-1">
                  Recipient Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg bg-[#f6f3ed] border border-[#e5e2dc] text-[13px] focus:outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#745a34] block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg bg-[#f6f3ed] border border-[#e5e2dc] text-[13px] focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#745a34] block mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg bg-[#f6f3ed] border border-[#e5e2dc] text-[13px] focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#745a34] block mb-1">
                  Delivery Address
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg bg-[#f6f3ed] border border-[#e5e2dc] text-[13px] focus:outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#745a34] block mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg bg-[#f6f3ed] border border-[#e5e2dc] text-[13px] focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#745a34] block mb-1">
                    Pincode
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg bg-[#f6f3ed] border border-[#e5e2dc] text-[13px] focus:outline-none focus:border-black font-mono"
                  />
                </div>
              </div>

              {/* Payment selector */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#745a34] block mb-1.5">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2 text-[11px] font-bold">
                  {['UPI', 'CARD', 'COD'].map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setFormData({ ...formData, paymentMethod: method })}
                      className={`h-9 rounded-lg border transition-all ${
                        formData.paymentMethod === method
                          ? 'border-black bg-black text-white'
                          : 'border-[#e5e2dc] bg-[#f6f3ed] text-black'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#e5e2dc] flex items-center justify-between text-[14px]">
                <span className="font-bold text-[#444748]">Payable Amount</span>
                <span className="font-heading font-black text-[20px] text-black">
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-full bg-black text-white font-heading text-[12px] font-black uppercase tracking-widest hover:bg-[#745a34] transition-all shadow-xl active:scale-95"
              >
                CONFIRM &amp; DISPATCH
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#f0eee8] text-[#745a34] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <h3 className="font-heading font-black text-[22px] uppercase tracking-wider text-black">
              Acquisition Confirmed
            </h3>
            <p className="text-[13px] text-[#444748] max-w-xs mx-auto leading-relaxed">
              Your garments have been allocated from Vault No. 09. A private courier tracking link has been dispatched to {formData.email}.
            </p>
            <div className="bg-[#f0eee8] p-3 rounded-xl font-mono text-[12px] font-bold text-black max-w-xs mx-auto">
              ORDER REF: {orderNumber}
            </div>
            <button
              onClick={onClose}
              className="px-8 h-11 rounded-full bg-black text-white font-heading text-[11px] font-extrabold uppercase tracking-widest hover:bg-[#745a34] transition-all"
            >
              RETURN TO ATELIER
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
