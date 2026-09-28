import React, { useState } from 'react';
import { ScreenType } from '../types';
import { LOGO_URL, PROFILE_AVATAR_URL } from '../data/products';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType, category?: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onSelectCategoryFilter?: (catId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onSelectCategoryFilter,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('₹ INR');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  const handleNavClick = (screen: ScreenType, catId?: string) => {
    onNavigate(screen);
    if (catId && onSelectCategoryFilter) {
      onSelectCategoryFilter(catId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-40 bg-[#fcf9f3]/90 backdrop-blur-xl border-b border-[#1c1c18]/5 transition-all">
      {/* Top Banner (Desktop & Mobile) */}
      <div className="bg-[#000000] text-[#fcf9f3] text-[11px] font-semibold tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-2 overflow-hidden">
        <span className="truncate">
          COMPLIMENTARY EXPRESS WORLDWIDE SHIPPING ON ORDERS OVER ₹15,000 • USE CODE &apos;ATELIERVIP&apos;
        </span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Mobile Left: Menu Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="w-10 h-10 flex items-center justify-center text-[#1c1c18] hover:text-[#745a34] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
        </div>

        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group text-left focus:outline-none"
        >
          <img
            src={LOGO_URL}
            alt="ATELIER IX"
            className="h-7 md:h-8 w-auto object-contain transition-opacity group-hover:opacity-85"
            onError={(e) => {
              // Fallback text if logo fails
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex items-center gap-2">
            <span className="font-heading font-black tracking-widest text-[20px] md:text-[22px] text-[#1c1c18]">
              ATELIER
            </span>
            <span className="w-2 md:w-2.5 h-5 md:h-6 rounded-full bg-[#745a34] inline-block shadow-sm"></span>
            <span className="font-heading font-extrabold tracking-widest text-[20px] md:text-[22px] text-[#745a34]">
              IX
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[12px] xl:text-[13px] font-bold tracking-widest uppercase">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors hover:text-[#745a34] ${
              currentScreen === 'home' ? 'text-[#000000] border-b-2 border-[#000000] pb-1' : 'text-[#444748]'
            }`}
          >
            HOME
          </button>
          <button
            onClick={() => handleNavClick('catalog', 'all')}
            className={`transition-colors hover:text-[#745a34] ${
              currentScreen === 'catalog' ? 'text-[#000000] border-b-2 border-[#000000] pb-1' : 'text-[#444748]'
            }`}
          >
            SHOP
          </button>
          <button
            onClick={() => handleNavClick('catalog', 'all')}
            className="text-[#444748] hover:text-[#745a34] transition-colors"
          >
            NEW ARRIVALS
          </button>
          <button
            onClick={() => handleNavClick('catalog', 'streetwear')}
            className="text-[#444748] hover:text-[#745a34] transition-colors"
          >
            MEN
          </button>
          <button
            onClick={() => handleNavClick('catalog', 'tailored')}
            className="text-[#444748] hover:text-[#745a34] transition-colors"
          >
            WOMEN
          </button>
          <button
            onClick={() => handleNavClick('catalog', 'outerwear')}
            className="text-[#444748] hover:text-[#745a34] transition-colors"
          >
            OUTERWEAR
          </button>
          <button
            onClick={() => handleNavClick('catalog', 'all')}
            className="text-[#444748] hover:text-[#745a34] transition-colors"
          >
            ARCHIVE
          </button>
          <button
            onClick={() => handleNavClick('catalog', 'all')}
            className="text-[#ba1a1a] hover:text-[#745a34] transition-colors flex items-center gap-1 font-bold"
          >
            SALE
            <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] animate-ping inline-block"></span>
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1 md:gap-3">
          {/* Desktop Search Bar */}
          <div className="hidden xl:flex items-center relative">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 bg-[#f0eee8] hover:bg-[#ebe8e2] px-3.5 py-1.5 rounded-full text-[12px] text-[#444748] border border-transparent focus:outline-none transition-all w-48 text-left"
            >
              <span className="material-symbols-outlined text-[18px]">search</span>
              <span className="truncate">Search Maison...</span>
            </button>
          </div>

          {/* Search Icon (Mobile / Tablet) */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="xl:hidden w-10 h-10 flex items-center justify-center text-[#1c1c18] hover:text-[#745a34] transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>

          {/* Currency Switcher (Desktop) */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              className="text-[12px] font-bold tracking-wider px-2 py-1 text-[#1c1c18] hover:text-[#745a34] flex items-center gap-0.5"
            >
              <span>{currency}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
            </button>
            {showCurrencyDropdown && (
              <div className="absolute right-0 mt-2 w-28 bg-white border border-[#e5e2dc] rounded-lg shadow-xl py-1 z-50 text-[12px]">
                {['₹ INR', '$ USD', '€ EUR', '£ GBP', '¥ JPY'].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr);
                      setShowCurrencyDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 hover:bg-[#f6f3ed] font-medium ${
                      currency === curr ? 'font-bold text-[#745a34]' : 'text-[#1c1c18]'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            aria-label="Wishlist"
            className="w-10 h-10 relative flex items-center justify-center text-[#1c1c18] hover:text-[#745a34] transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">favorite</span>
            {wishlistCount > 0 && (
              <span className="absolute top-2 right-1.5 min-w-[16px] h-4 bg-[#000000] text-white text-[10px] font-bold flex items-center justify-center rounded-full px-1 leading-none shadow-sm">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart / Shopping Bag Button */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping Bag"
            className="w-10 h-10 relative flex items-center justify-center text-[#1c1c18] hover:text-[#745a34] transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-2 right-1.5 min-w-[16px] h-4 bg-[#745a34] text-white text-[10px] font-bold flex items-center justify-center rounded-full px-1 leading-none shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Profile Avatar */}
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border border-[#e5e2dc] shadow-sm ml-1 flex-shrink-0 cursor-pointer hover:ring-2 hover:ring-[#745a34]/30 transition-all">
            <img
              src={PROFILE_AVATAR_URL}
              alt="Collector Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Desktop Sub-ticker Bar (as shown in desktop screenshot) */}
      <div className="hidden lg:flex items-center justify-between border-t border-[#1c1c18]/5 bg-[#f6f3ed]/60 px-8 py-1.5 text-[10px] tracking-widest text-[#444748] uppercase font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a]"></span>
          <span className="font-bold text-[#1c1c18]">FW/25 ARCHIVE DROP LIVE</span>
        </div>
        <div>TOKYO MILLS 520GSM JAPANESE TERRY</div>
        <div>EDITION RUN: STRICTLY 250 UNITS PER SILHOUETTE</div>
        <div className="text-[#745a34] font-bold">CODE: &apos;FALL40&apos; ACTIVE AT CHECKOUT</div>
      </div>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#fcf9f3] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#e5e2dc]">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-black tracking-widest text-[20px] text-[#1c1c18]">
                    ATELIER
                  </span>
                  <span className="w-2 h-5 rounded-full bg-[#745a34]"></span>
                  <span className="font-heading font-extrabold tracking-widest text-[20px] text-[#745a34]">
                    IX
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#f0eee8] flex items-center justify-center text-[#1c1c18]"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              <nav className="py-6 flex flex-col gap-4 text-[15px] font-bold tracking-wider uppercase">
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-left py-2 hover:text-[#745a34] flex items-center justify-between border-b border-[#e5e2dc]/40"
                >
                  <span>Home Editorial</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <button
                  onClick={() => handleNavClick('catalog', 'all')}
                  className="text-left py-2 hover:text-[#745a34] flex items-center justify-between border-b border-[#e5e2dc]/40"
                >
                  <span>Full Catalogue (148 Pieces)</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <button
                  onClick={() => handleNavClick('catalog', 'outerwear')}
                  className="text-left py-2 hover:text-[#745a34] flex items-center justify-between border-b border-[#e5e2dc]/40"
                >
                  <span>Outerwear &amp; Coats</span>
                  <span className="text-[11px] font-mono text-[#745a34]">24 Pieces</span>
                </button>
                <button
                  onClick={() => handleNavClick('catalog', 'streetwear')}
                  className="text-left py-2 hover:text-[#745a34] flex items-center justify-between border-b border-[#e5e2dc]/40"
                >
                  <span>Streetwear &amp; Fleece</span>
                  <span className="text-[11px] font-mono text-[#745a34]">32 Pieces</span>
                </button>
                <button
                  onClick={() => handleNavClick('catalog', 'tailored')}
                  className="text-left py-2 hover:text-[#745a34] flex items-center justify-between border-b border-[#e5e2dc]/40"
                >
                  <span>Tailored Trousers</span>
                  <span className="text-[11px] font-mono text-[#745a34]">28 Pieces</span>
                </button>
                <button
                  onClick={() => handleNavClick('catalog', 'footwear')}
                  className="text-left py-2 hover:text-[#745a34] flex items-center justify-between border-b border-[#e5e2dc]/40"
                >
                  <span>Footwear &amp; Monolith</span>
                  <span className="text-[11px] font-mono text-[#745a34]">15 Pieces</span>
                </button>
                <button
                  onClick={() => handleNavClick('catalog', 'accessories')}
                  className="text-left py-2 hover:text-[#745a34] flex items-center justify-between border-b border-[#e5e2dc]/40"
                >
                  <span>Leather Accessories</span>
                  <span className="text-[11px] font-mono text-[#745a34]">30 Pieces</span>
                </button>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#e5e2dc] flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={PROFILE_AVATAR_URL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-[14px] font-bold text-[#1c1c18]">Elena Rostova</div>
                  <div className="text-[11px] text-[#745a34] font-medium tracking-wide">
                    Verified Tier 2 Collector
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-[#444748] uppercase tracking-widest pt-2">
                © 2025 ATELIER IX S.A.
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
