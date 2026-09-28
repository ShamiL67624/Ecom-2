import React, { useState } from 'react';

interface FooterProps {
  onNewsletterSuccess?: (email: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNewsletterSuccess }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    if (onNewsletterSuccess) onNewsletterSuccess(email);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#fcf9f3] border-t border-[#1c1c18]/10 pt-12 md:pt-16 pb-24 md:pb-16 text-[#1c1c18]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Desktop 4-Column Layout */}
        <div className="hidden md:grid grid-cols-12 gap-8 pb-12 border-b border-[#1c1c18]/10">
          {/* Col 1: Brand & Newsletter (4 cols) */}
          <div className="col-span-4 flex flex-col justify-between pr-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-heading font-black tracking-widest text-[22px] text-[#1c1c18]">
                  ATELIER
                </span>
                <span className="w-2.5 h-6 rounded-full bg-[#745a34] inline-block"></span>
                <span className="font-heading font-black tracking-widest text-[22px] text-[#745a34]">
                  IX
                </span>
              </div>
              <p className="text-[13px] text-[#444748] leading-relaxed max-w-sm mb-6">
                High-grade artisanal streetwear synthesized with modern brutalist architecture. Published quarterly in limited numbered runs. Designed between Tokyo and Mumbai.
              </p>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for private drops"
                  required
                  className="flex-1 h-11 px-4 rounded-lg bg-[#ffffff] border border-[#e5e2dc] text-[13px] focus:outline-none focus:border-[#000000] shadow-sm transition-all"
                />
                <button
                  type="submit"
                  className="h-11 px-6 rounded-lg bg-[#000000] text-[#ffffff] text-[11px] font-bold tracking-widest uppercase hover:bg-[#745a34] transition-all shadow-sm active:scale-95 whitespace-nowrap"
                >
                  {subscribed ? 'Joined' : 'Subscribe'}
                </button>
              </form>
              {subscribed && (
                <div className="text-[11px] text-[#745a34] font-semibold mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">check_circle</span>
                  Added to private priority dispatch list.
                </div>
              )}
            </div>
          </div>

          {/* Col 2: Client Services (3 cols) */}
          <div className="col-span-3">
            <h4 className="font-heading font-bold text-[13px] tracking-widest uppercase text-[#1c1c18] mb-4">
              Client Services
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#444748]">
              <li><a href="#" className="hover:text-[#000000] transition-colors">Complimentary Shipping</a></li>
              <li><a href="#" className="hover:text-[#000000] transition-colors">Returns &amp; Exchanges</a></li>
              <li><a href="#" className="hover:text-[#000000] transition-colors">Track Bespoke Order</a></li>
              <li><a href="#" className="hover:text-[#000000] transition-colors">Garment Care &amp; Sizing</a></li>
              <li><a href="#" className="hover:text-[#000000] transition-colors">Book Private Atelier</a></li>
            </ul>
          </div>

          {/* Col 3: Maison & Heritage (3 cols) */}
          <div className="col-span-3">
            <h4 className="font-heading font-bold text-[13px] tracking-widest uppercase text-[#1c1c18] mb-4">
              Maison &amp; Heritage
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#444748]">
              <li><a href="#" className="hover:text-[#000000] transition-colors">The Architecture</a></li>
              <li><a href="#" className="hover:text-[#000000] transition-colors">Sustainability Index</a></li>
              <li><a href="#" className="hover:text-[#000000] transition-colors">Artisanal Mills</a></li>
              <li><a href="#" className="hover:text-[#000000] transition-colors">Archive Editions</a></li>
              <li><a href="#" className="hover:text-[#000000] transition-colors">Careers &amp; Residencies</a></li>
            </ul>
          </div>

          {/* Col 4: Legal & Terms (2 cols) */}
          <div className="col-span-2">
            <h4 className="font-heading font-bold text-[13px] tracking-widest uppercase text-[#1c1c18] mb-4">
              Legal &amp; Terms
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#444748]">
              <li><a href="#" className="hover:text-[#000000] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#000000] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#000000] transition-colors">Cookie Preferences</a></li>
              <li><a href="#" className="hover:text-[#000000] transition-colors">Accessibility</a></li>
              <li><a href="#" className="hover:text-[#000000] transition-colors">Intellectual Property</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="md:hidden flex flex-col gap-6 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-heading font-black tracking-widest text-[20px] text-[#1c1c18]">
                ATELIER
              </span>
              <span className="w-2.5 h-6 rounded-full bg-[#745a34] inline-block"></span>
              <span className="font-heading font-black tracking-widest text-[20px] text-[#745a34]">
                IX
              </span>
            </div>
            <p className="text-[13px] text-[#444748] leading-relaxed">
              Architectural garments engineered for tactile permanence. Designed between Tokyo and Mumbai.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <details className="group bg-[#ffffff] rounded-lg overflow-hidden shadow-sm border border-[#e5e2dc]/50">
              <summary className="flex justify-between items-center p-3.5 cursor-pointer select-none">
                <span className="font-heading text-[13px] uppercase font-bold text-[#1c1c18] tracking-wider">
                  Client Services
                </span>
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-open:rotate-180 text-[#444748]">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="px-4 pb-4 flex flex-col gap-2 text-[13px] text-[#444748]">
                <a href="#" className="hover:text-black">Track Order &amp; Delivery</a>
                <a href="#" className="hover:text-black">Bespoke Fitting Guide</a>
                <a href="#" className="hover:text-black">Complimentary Returns</a>
                <a href="#" className="hover:text-black">Garment Care Manual</a>
              </div>
            </details>

            <details className="group bg-[#ffffff] rounded-lg overflow-hidden shadow-sm border border-[#e5e2dc]/50">
              <summary className="flex justify-between items-center p-3.5 cursor-pointer select-none">
                <span className="font-heading text-[13px] uppercase font-bold text-[#1c1c18] tracking-wider">
                  Maison &amp; Heritage
                </span>
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-open:rotate-180 text-[#444748]">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="px-4 pb-4 flex flex-col gap-2 text-[13px] text-[#444748]">
                <a href="#" className="hover:text-black">The Osaka Weaving Mills</a>
                <a href="#" className="hover:text-black">Sustainability Manifesto</a>
                <a href="#" className="hover:text-black">Archival Exhibitions</a>
                <a href="#" className="hover:text-black">Press &amp; Inquiries</a>
              </div>
            </details>

            <details className="group bg-[#ffffff] rounded-lg overflow-hidden shadow-sm border border-[#e5e2dc]/50">
              <summary className="flex justify-between items-center p-3.5 cursor-pointer select-none">
                <span className="font-heading text-[13px] uppercase font-bold text-[#1c1c18] tracking-wider">
                  Legal &amp; Privacy
                </span>
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-open:rotate-180 text-[#444748]">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="px-4 pb-4 flex flex-col gap-2 text-[13px] text-[#444748]">
                <a href="#" className="hover:text-black">Terms of Service</a>
                <a href="#" className="hover:text-black">Privacy Policy</a>
                <a href="#" className="hover:text-black">Authenticity Guarantee</a>
              </div>
            </details>
          </div>

          {/* Social Icons (Mobile) */}
          <div className="flex items-center gap-3 pt-2">
            <button aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#f0eee8] flex items-center justify-center text-[#1c1c18] hover:bg-[#745a34] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            </button>
            <button aria-label="Twitter / X" className="w-10 h-10 rounded-full bg-[#f0eee8] flex items-center justify-center text-[#1c1c18] hover:bg-[#745a34] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">tag</span>
            </button>
            <button aria-label="SoundCloud" className="w-10 h-10 rounded-full bg-[#f0eee8] flex items-center justify-center text-[#1c1c18] hover:bg-[#745a34] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">graphic_eq</span>
            </button>
            <button aria-label="Store Location" className="w-10 h-10 rounded-full bg-[#f0eee8] flex items-center justify-center text-[#1c1c18] hover:bg-[#745a34] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">pin_drop</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Payments & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#444748] uppercase tracking-wider">
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
            <span className="text-[#1c1c18] font-bold">ACCEPTED TRANSACTIONS:</span>
            <span>UPI</span>
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>AMEX</span>
            <span>APPLE PAY</span>
          </div>
          <div>
            © 2025 ATELIER IX S.A. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};
