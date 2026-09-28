import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { CATEGORIES, VOGUE_CRITIC_AVATAR, HERO_IMAGE_URL } from '../data/products';

interface HomeScreenProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onNavigateToCatalog: (category?: string) => void;
  onAddToCart: (product: Product, color?: string, size?: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: Set<string>;
  onShowToast: (message: string) => void;
  onOpenLookbook: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  products,
  onSelectProduct,
  onNavigateToCatalog,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onShowToast,
  onOpenLookbook,
}) => {
  // Live Countdown Timer for Archive Sale
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 48, seconds: 12 });
  const [featuredTab, setFeaturedTab] = useState<'all' | 'outerwear' | 'knitwear' | 'footwear'>('all');
  const [circleEmail, setCircleEmail] = useState('');
  const [circleJoined, setCircleJoined] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    onShowToast(`Promo code ${code} copied to clipboard! (40% OFF applied)`);
  };

  const handleCircleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!circleEmail) return;
    setCircleJoined(true);
    onShowToast('Welcome to The Atelier Circle. VIP invite link sent.');
    setTimeout(() => {
      setCircleEmail('');
      setCircleJoined(false);
    }, 4000);
  };

  // Filter featured products based on selected tab
  const featuredProducts = products.filter((p) => {
    if (featuredTab === 'all') return true;
    if (featuredTab === 'knitwear') return p.category === 'streetwear' || p.category === 'knitwear';
    return p.category === featuredTab;
  }).slice(0, 4);

  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: HERO EDITORIAL */}
      <section className="relative w-full px-4 md:px-8 pt-4 pb-8 md:pb-12 max-w-[1440px] mx-auto">
        <div className="relative w-full h-[520px] md:h-[620px] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-end p-6 md:p-12 group">
          {/* Background Image with subtle zoom on hover */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
          />

          {/* Luxury Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent hidden md:block" />

          {/* Desktop Top Right Tag */}
          <div className="absolute top-8 right-8 hidden md:flex items-center gap-3">
            <span className="text-[11px] font-mono tracking-widest uppercase text-white/70">
              SPEC. 09-J // BATCH #042
            </span>
          </div>

          {/* Main Hero Content */}
          <div className="relative z-10 flex flex-col items-start gap-3 max-w-2xl">
            {/* Tag Pills */}
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#e3c193] animate-pulse"></span>
                <span className="font-heading font-bold text-[10px] md:text-[11px] text-white tracking-widest uppercase">
                  FALL / WINTER &apos;25 EDITORIAL
                </span>
              </div>
              <div className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] md:text-[11px] font-bold text-[#ffddb1] tracking-widest uppercase">
                LIMITED RUN 09
              </div>
            </div>

            <div className="text-[12px] font-mono text-white/60 tracking-widest uppercase mt-1">
              THE MONOLITHIC CAPSULE
            </div>

            <h1 className="font-heading text-[36px] sm:text-[46px] md:text-[62px] text-white tracking-tight font-extrabold uppercase leading-[1.05]">
              NEW SEASON.<br />NEW ATTITUDE.
            </h1>

            <p className="text-[14px] md:text-[16px] text-[#ebe8e2] max-w-lg leading-relaxed font-light">
              Sculpted silhouettes, heavyweight Japanese cottons, and refined utilitarian tailoring engineered for radical urban poise.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
              <button
                onClick={() => onNavigateToCatalog('all')}
                className="flex-1 sm:flex-none min-w-[150px] h-12 inline-flex items-center justify-center gap-2 px-7 rounded-full bg-white text-black font-heading text-[12px] font-bold tracking-widest uppercase hover:bg-[#ffddb1] shadow-xl active:scale-95 transition-all cursor-pointer"
              >
                <span>SHOP NOW</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                onClick={onOpenLookbook}
                className="flex-1 sm:flex-none min-w-[150px] h-12 inline-flex items-center justify-center gap-2 px-7 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-heading text-[12px] font-bold tracking-widest uppercase hover:bg-white/25 active:scale-95 transition-all cursor-pointer"
              >
                <span>EXPLORE</span>
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
              </button>
            </div>
          </div>

          {/* Desktop Right Side Spec Overlay */}
          <div className="absolute right-8 bottom-8 hidden lg:block bg-black/60 backdrop-blur-md border border-white/15 rounded-xl p-5 max-w-xs text-white shadow-2xl">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e3c193]">
                FABRIC DENSITY
              </span>
              <span className="text-[10px] font-mono text-white/60">SPEC. 09-J</span>
            </div>
            <div className="font-heading font-black text-[28px] tracking-tight text-white mb-2">
              520 GSM
            </div>
            <p className="text-[11px] text-white/70 leading-relaxed">
              Double-twisted warp fibers sourced from Wakayama looms. Zero pilling guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CURATED REALMS / BROWSE COLLECTIONS */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="font-heading text-[11px] font-bold tracking-widest uppercase text-[#745a34] block mb-1">
              SECTOR CATALOGUE
            </span>
            <h2 className="font-heading font-black text-[22px] md:text-[32px] tracking-tight uppercase text-[#1c1c18]">
              Curated Realms
            </h2>
            <p className="hidden md:block text-[13px] text-[#444748] mt-1 max-w-xl">
              Discrete garment divisions tailored to spatial movement, structural draping, and tactical endurance.
            </p>
          </div>
          <button
            onClick={() => onNavigateToCatalog('all')}
            className="font-heading text-[12px] font-bold text-[#444748] hover:text-[#000000] flex items-center gap-1 transition-colors uppercase tracking-wider"
          >
            <span>View all</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        {/* Categories Grid (Horizontal scroller on mobile, multi-column on desktop) */}
        <div className="flex md:grid md:grid-cols-5 gap-3.5 overflow-x-auto no-scrollbar pb-3 md:pb-0 snap-x snap-mandatory">
          {CATEGORIES.filter((c) => c.id !== 'all').slice(0, 5).map((category, idx) => (
            <div
              key={category.id}
              onClick={() => onNavigateToCatalog(category.id)}
              className="snap-start flex-shrink-0 w-36 sm:w-44 md:w-auto h-52 md:h-64 rounded-xl overflow-hidden relative shadow-md group cursor-pointer border border-[#e5e2dc]/40"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/95 transition-all" />

              <div className="absolute inset-0 p-3.5 md:p-4 flex flex-col justify-end items-start text-white">
                <span className="text-[10px] font-mono text-[#ffddb1] tracking-widest uppercase mb-1">
                  0{idx + 1} // {category.sublabel?.split('//')[1]?.trim() || 'ATELIER'}
                </span>
                <span className="font-heading font-bold text-[14px] md:text-[17px] tracking-tight uppercase leading-snug">
                  {category.label}
                </span>
                <div className="mt-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-white/80 group-hover:text-white transition-colors">
                  <span>Explore</span>
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FEATURED DROPS */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#745a34]"></span>
              <span className="font-heading text-[11px] font-bold tracking-widest uppercase text-[#745a34]">
                CURATED SELECTION • FW25
              </span>
            </div>
            <h2 className="font-heading font-black text-[24px] md:text-[34px] tracking-tight uppercase text-[#1c1c18]">
              Featured Drops
            </h2>
          </div>

          {/* Desktop Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {(
              [
                { id: 'all', label: 'All Garments' },
                { id: 'outerwear', label: 'Outerwear' },
                { id: 'knitwear', label: 'Knit & Fleece' },
                { id: 'footwear', label: 'Footwear' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFeaturedTab(tab.id)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                  featuredTab === tab.id
                    ? 'bg-[#000000] text-white shadow-md'
                    : 'bg-[#f0eee8] text-[#444748] hover:bg-[#e5e2dc]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {featuredProducts.map((product) => {
            const isLiked = wishlistIds.has(product.id);
            return (
              <div
                key={product.id}
                className="bg-[#ffffff] rounded-xl p-2.5 md:p-3.5 shadow-sm border border-[#e5e2dc]/50 flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
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
                  {product.badge && (
                    <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5">
                      <span className="font-heading text-[10px] font-extrabold uppercase tracking-wider text-[#1c1c18]">
                        {product.badge}
                      </span>
                    </div>
                  )}

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
                    aria-label="Quick Add to Bag"
                    className="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-[#000000] text-white flex items-center justify-center shadow-lg active:scale-90 hover:bg-[#745a34] transition-all"
                  >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[#444748] text-[11px]">
                    <span className="font-heading text-[10px] uppercase font-bold tracking-wider text-[#745a34]">
                      {product.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1 font-mono">
                      <span className="material-symbols-outlined text-[#745a34] text-[13px] fill-1">
                        star
                      </span>
                      <span className="font-bold text-[#1c1c18]">{product.rating}</span>
                      <span className="text-[#444748]">({product.reviewCount})</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-heading text-[13px] md:text-[15px] font-bold text-[#1c1c18] truncate cursor-pointer hover:text-[#745a34] transition-colors"
                  >
                    {product.title}
                  </h3>

                  {/* Color dots */}
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

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-heading font-black text-[15px] md:text-[17px] text-[#1c1c18]">
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
      </section>

      {/* SECTION 4: PROMOTIONAL EDITORIAL BANNER (Archive Sale) */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="relative w-full rounded-2xl bg-[#000000] text-white p-6 md:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
          {/* Ambient Amber Glow */}
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#745a34]/30 blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-[#e3c193]/15 blur-3xl pointer-events-none" />

          {/* Left Column Content */}
          <div className="relative z-10 flex flex-col gap-3 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#745a34] text-white font-heading text-[10px] font-bold uppercase tracking-widest">
                VAULT ACCESS LEVEL 2
              </span>
              <span className="text-[10px] font-mono text-[#e3c193] tracking-widest uppercase hidden sm:inline">
                • NUMBERED ARCHIVE
              </span>
            </div>

            <h3 className="font-heading text-[26px] sm:text-[34px] md:text-[42px] leading-tight font-extrabold uppercase tracking-tight text-white">
              ATELIER ARCHIVE SALE<br />
              <span className="text-[#ffddb1]">UP TO 40% OFF</span>
            </h3>

            <p className="text-[13px] md:text-[15px] text-[#e5e2dc] leading-relaxed max-w-md font-light">
              Vault iterations from seasons past. Unreleased prototypes, numbered wool garments, and deadstock raw denim available for 24 hours only.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
                <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest">
                  CODE:
                </span>
                <span className="font-heading text-[13px] font-extrabold tracking-widest text-[#ffddb1]">
                  FALL40
                </span>
                <button
                  onClick={() => handleCopyCode('FALL40')}
                  title="Copy Promo Code"
                  className="text-white hover:text-[#ffddb1] ml-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                </button>
              </div>

              <button
                onClick={() => {
                  handleCopyCode('FALL40');
                  onNavigateToCatalog('all');
                }}
                className="h-11 px-6 rounded-full bg-white text-black font-heading text-[11px] font-extrabold uppercase tracking-widest hover:bg-[#ffddb1] active:scale-95 transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>CLAIM ACCESS</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Countdown Clock */}
          <div className="relative z-10 flex flex-col items-start md:items-end justify-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 md:p-6 flex flex-col items-center shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-ping" />
                <span className="text-[10px] font-mono text-white/70 tracking-widest uppercase">
                  EXPIRATION WINDOW • ACTIVE
                </span>
              </div>

              {/* Countdown Digits */}
              <div className="flex items-center gap-3 font-mono font-bold text-[32px] md:text-[40px] text-white">
                <div className="flex flex-col items-center">
                  <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[9px] uppercase tracking-widest text-white/50 font-sans">
                    HOURS
                  </span>
                </div>
                <span className="text-[#ffddb1] -mt-3">:</span>
                <div className="flex flex-col items-center">
                  <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[9px] uppercase tracking-widest text-white/50 font-sans">
                    MINS
                  </span>
                </div>
                <span className="text-[#ffddb1] -mt-3">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-[#ffddb1]">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-[9px] uppercase tracking-widest text-white/50 font-sans">
                    SECS
                  </span>
                </div>
              </div>

              <div className="text-[10px] text-white/60 tracking-wider text-center mt-3 max-w-[200px]">
                Free bespoke garment bag &amp; courier delivery included.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CUSTOMER PRAISE & VOGUE EDITORIAL PICK */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#ffffff] rounded-2xl p-6 md:p-12 border border-[#e5e2dc]/50 shadow-sm">
          {/* Left Column: Stylist Editorial Portrait (Desktop) */}
          <div className="lg:col-span-4 relative rounded-xl overflow-hidden aspect-[3/4] bg-[#f6f3ed] shadow-md hidden sm:block">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4aqRpk1ZTvAeAKC3eVz2Lqy2DDC8HN1ejKxdMQu66BES8eNx19-2Bol5sF4zCyRBfsaKcTV9eaIqnaWDGdQHqbfgViwC1TJHB7vD9tF3LTqX7J9C_ieKcdNrKsVfrR_kYoW08BG1_i01nw4CpgedOFy9QTiPU9d7mZf0B2npiO3W2-w8J6kkZ0OmbxhCZ4FqggrD-23c_YgNDAYHDrJlizrGTGhUck0uXh9P69mOwjwlqCO51CTYW5g"
              alt="Editorial Runway Drape"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-[11px] font-mono">
              PARIS FASHION WEEK FW25
            </div>
          </div>

          {/* Right Column: Critique & Metrics */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-[#745a34]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px] fill-1">
                    star
                  </span>
                ))}
              </div>
              <span className="font-heading text-[11px] font-bold uppercase tracking-widest text-[#745a34]">
                CRITICAL RECEPTION • VOGUE INDIA CRITIQUE
              </span>
            </div>

            <blockquote className="font-heading text-[20px] sm:text-[24px] md:text-[28px] text-[#1c1c18] font-bold leading-snug tracking-tight">
              &ldquo;ATELIER IX sets an untouchable standard in silhouette discipline. The wool trench drape has the weight of bespoke Savile Row tailoring crossed with Tokyo subculture.&rdquo;
            </blockquote>

            {/* Key Quality Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e5e2dc]">
              <div>
                <div className="font-heading font-black text-[24px] md:text-[32px] text-[#1c1c18]">
                  99.4%
                </div>
                <div className="text-[10px] md:text-[11px] text-[#444748] uppercase tracking-wider font-mono">
                  Fiber Retention Score
                </div>
              </div>
              <div>
                <div className="font-heading font-black text-[24px] md:text-[32px] text-[#1c1c18]">
                  100%
                </div>
                <div className="text-[10px] md:text-[11px] text-[#444748] uppercase tracking-wider font-mono">
                  Traceable Mill Origins
                </div>
              </div>
              <div>
                <div className="font-heading font-black text-[24px] md:text-[32px] text-[#745a34]">
                  #01
                </div>
                <div className="text-[10px] md:text-[11px] text-[#444748] uppercase tracking-wider font-mono">
                  Emerging Atelier FW25
                </div>
              </div>
            </div>

            {/* Reviewer / Critic Profile */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <img
                  src={VOGUE_CRITIC_AVATAR}
                  alt="Arjun Vardhan"
                  className="w-12 h-12 rounded-full object-cover border border-[#e5e2dc] shadow-sm"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-heading font-bold text-[14px] text-[#1c1c18]">
                      Arjun Vardhan
                    </span>
                    <span className="material-symbols-outlined text-[#745a34] text-[16px] fill-1">
                      verified
                    </span>
                  </div>
                  <span className="text-[11px] text-[#444748]">
                    Lead Stylist &amp; Verified Collector
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-4 text-[11px] font-heading font-black tracking-widest text-[#444748] uppercase">
                <span>FEATURED IN:</span>
                <span className="text-black">VOGUE</span>
                <span className="text-black">•</span>
                <span className="text-black">HYPEBEAST</span>
                <span className="text-black">•</span>
                <span className="text-black">MONOCLE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: VIP ATELIER CIRCLE */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="bg-[#f0eee8] rounded-2xl p-6 md:p-12 text-center flex flex-col items-center border border-[#e5e2dc]">
          <div className="w-12 h-12 rounded-full bg-[#ffddb1] text-[#745a34] flex items-center justify-center mb-3 shadow-sm">
            <span className="material-symbols-outlined text-[24px]">mail</span>
          </div>

          <span className="font-heading text-[11px] font-bold uppercase tracking-widest text-[#745a34] mb-1">
            INVITATION ONLY
          </span>

          <h3 className="font-heading text-[24px] md:text-[34px] font-black uppercase tracking-tight text-[#1c1c18]">
            The Atelier Circle
          </h3>

          <p className="text-[13px] md:text-[15px] text-[#444748] max-w-lg mt-2 leading-relaxed">
            Receive private drop links 15 minutes before seasonal capsule releases. Published quarterly in limited numbered runs. Strictly zero spam.
          </p>

          <form onSubmit={handleCircleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-2.5 mt-6">
            <input
              type="email"
              value={circleEmail}
              onChange={(e) => setCircleEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 h-12 px-4 rounded-xl bg-white text-[#1c1c18] placeholder:text-[#444748]/60 text-[14px] border border-[#e5e2dc] focus:outline-none focus:border-black shadow-sm"
            />
            <button
              type="submit"
              className="h-12 px-7 rounded-xl bg-[#000000] text-white font-heading text-[11px] font-bold uppercase tracking-widest hover:bg-[#745a34] active:scale-95 transition-all shadow-md whitespace-nowrap cursor-pointer"
            >
              {circleJoined ? 'Joined Circle' : 'Join the Circle'}
            </button>
          </form>

          <span className="text-[11px] text-[#444748] mt-3 font-mono">
            Zero spam. Pure editorial reverence. Opt out anytime.
          </span>
        </div>
      </section>
    </div>
  );
};
