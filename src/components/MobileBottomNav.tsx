import React from 'react';
import { ScreenType } from '../types';
import { PROFILE_AVATAR_URL } from '../data/products';

interface MobileBottomNavProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenAccount: () => void;
  wishlistCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentScreen,
  onNavigate,
  onOpenSearch,
  onOpenWishlist,
  onOpenAccount,
  wishlistCount,
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#fcf9f3]/95 backdrop-blur-xl border-t border-[#1c1c18]/10 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] md:hidden pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        {/* Home */}
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center justify-center gap-1 min-w-[56px] h-12 transition-colors ${
            currentScreen === 'home' ? 'text-black font-extrabold' : 'text-[#444748]'
          }`}
        >
          <span className={`material-symbols-outlined text-[22px] ${currentScreen === 'home' ? 'fill-1' : ''}`}>
            home
          </span>
          <span className="font-heading text-[9px] uppercase tracking-widest">Home</span>
        </button>

        {/* Catalog */}
        <button
          onClick={() => onNavigate('catalog')}
          className={`flex flex-col items-center justify-center gap-1 min-w-[56px] h-12 transition-colors ${
            currentScreen === 'catalog' ? 'text-black font-extrabold' : 'text-[#444748]'
          }`}
        >
          <span className={`material-symbols-outlined text-[22px] ${currentScreen === 'catalog' ? 'fill-1' : ''}`}>
            grid_view
          </span>
          <span className="font-heading text-[9px] uppercase tracking-widest">Catalog</span>
        </button>

        {/* Search */}
        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center gap-1 min-w-[56px] h-12 text-[#444748] hover:text-black transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">search</span>
          <span className="font-heading text-[9px] uppercase tracking-widest">Search</span>
        </button>

        {/* Wishlist */}
        <button
          onClick={onOpenWishlist}
          className="flex flex-col items-center justify-center gap-1 min-w-[56px] h-12 text-[#444748] hover:text-black transition-colors relative"
        >
          <span className="material-symbols-outlined text-[22px]">favorite</span>
          {wishlistCount > 0 && (
            <span className="absolute top-1 right-3 w-4 h-4 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
          <span className="font-heading text-[9px] uppercase tracking-widest">Wishlist</span>
        </button>

        {/* Account */}
        <button
          onClick={onOpenAccount}
          className="flex flex-col items-center justify-center gap-1 min-w-[56px] h-12 text-[#444748] hover:text-black transition-colors"
        >
          <div className="w-5 h-5 rounded-full overflow-hidden border border-black/20">
            <img src={PROFILE_AVATAR_URL} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <span className="font-heading text-[9px] uppercase tracking-widest">Account</span>
        </button>
      </div>
    </nav>
  );
};
