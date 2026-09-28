import React, { useState } from 'react';
import { Product } from '../types';
import { REVIEWS, COMPLETE_THE_LOOK_ITEMS } from '../data/products';

interface ProductDetailScreenProps {
  product: Product;
  onAddToCart: (product: Product, color: string, size: string, quantity?: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onBack: () => void;
  onShowToast: (message: string) => void;
  onOpenSizeGuide: () => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onBack,
  onShowToast,
  onOpenSizeGuide,
}) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Camel Melange');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('110001');
  const [pincodeChecked, setPincodeChecked] = useState(true);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    description: true,
    materials: false,
    shipping: false,
  });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length >= 6) {
      setPincodeChecked(true);
      onShowToast(`Delivery confirmed to pincode ${pincode}`);
    }
  };

  const handleInstantBuy = () => {
    onAddToCart(product, selectedColor, selectedSize, quantity);
    onShowToast(`Instant Acquisition initiated for ${product.title}`);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-4 md:py-8">
      {/* Top Breadcrumb & Archival Run Bar */}
      <div className="flex flex-wrap items-center justify-between text-[11px] md:text-[12px] text-[#444748] mb-4 gap-2 border-b border-[#1c1c18]/10 pb-3">
        <div className="flex items-center gap-1.5 font-medium">
          <button onClick={onBack} className="hover:text-black flex items-center gap-1 font-bold">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Back</span>
          </button>
          <span>/</span>
          <span className="hover:text-black cursor-pointer" onClick={onBack}>Shop</span>
          <span>/</span>
          <span className="hover:text-black cursor-pointer" onClick={onBack}>{product.categoryLabel}</span>
          <span>/</span>
          <span className="text-[#1c1c18] font-bold truncate max-w-[200px] md:max-w-none">
            {product.title}
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[10px] md:text-[11px] text-[#745a34]">
          <span className="font-bold">• BATCH #09/150 LIMITED RUN</span>
          <span>|</span>
          <span>SKU: {product.specs.sku}</span>
        </div>
      </div>

      {/* Main Product Showcase (Desktop 2-Column Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start mb-16">
        {/* LEFT: GALLERY SECTION (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
          {/* Vertical Thumbnail Strip (Desktop) / Horizontal (Mobile) */}
          <div className="flex md:flex-col gap-2.5 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20 flex-shrink-0">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIdx(idx)}
                className={`relative w-16 h-20 md:w-20 md:h-24 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 bg-[#f0eee8] ${
                  selectedImageIdx === idx ? 'border-black shadow-md scale-102' : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${product.title} view ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Large Hero Main Image Preview */}
          <div className="relative flex-1 rounded-2xl overflow-hidden bg-[#f6f3ed] aspect-[3/4] shadow-lg group border border-[#e5e2dc]/50">
            <img
              src={images[selectedImageIdx]}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
              onClick={() => setLightboxOpen(true)}
            />

            {/* Mobile / Desktop Action Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md font-mono text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">
                • ATELIER IX
              </span>
              <span className="px-3 py-1 rounded-full bg-[#ffddb1] font-heading text-[10px] font-extrabold uppercase tracking-wider text-[#745a34] shadow-sm flex items-center gap-1">
                <span className="text-[13px]">🔥</span> IN HIGH DEMAND
              </span>
            </div>

            {/* Top Right Controls */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => onToggleWishlist(product)}
                aria-label="Wishlist"
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black shadow-md hover:bg-white active:scale-90 transition-transform"
              >
                <span className={`material-symbols-outlined text-[20px] ${isWishlisted ? 'text-[#ba1a1a] fill-1' : ''}`}>
                  favorite
                </span>
              </button>
              <button
                onClick={() => setLightboxOpen(true)}
                aria-label="Zoom Image"
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black shadow-md hover:bg-white active:scale-90 transition-transform"
              >
                <span className="material-symbols-outlined text-[20px]">zoom_in</span>
              </button>
            </div>

            {/* Image Counter Badge */}
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white font-mono text-[11px] tracking-wider">
              {selectedImageIdx + 1} / {images.length}
            </div>

            {/* Scale Hover Indicator (Desktop) */}
            <div className="hidden lg:flex items-center gap-1.5 absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[#1c1c18] font-mono text-[10px] uppercase font-bold tracking-wider">
              <span className="material-symbols-outlined text-[14px]">center_focus_strong</span>
              <span>100% SCALE HOVER</span>
            </div>
          </div>
        </div>

        {/* RIGHT: PRODUCT CONFIGURATOR & SPECS (5 cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Header Info */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono text-[#745a34] uppercase tracking-widest font-bold">
                {product.edition || 'ATELIER IX ARCHIVE'}
              </span>
              <div className="flex items-center gap-1 font-mono text-[12px]">
                <span className="material-symbols-outlined text-[#745a34] text-[16px] fill-1">star</span>
                <span className="font-bold text-[#1c1c18]">{product.rating}</span>
                <span className="text-[#444748] underline">({product.reviewCount} collector reviews)</span>
              </div>
            </div>

            <h1 className="font-heading font-black text-[28px] sm:text-[34px] uppercase tracking-tight text-[#1c1c18] leading-tight">
              {product.title}
            </h1>

            <p className="text-[13px] md:text-[14px] text-[#444748] mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="bg-[#ffffff] rounded-xl p-4 border border-[#e5e2dc] shadow-sm">
            <div className="flex items-baseline gap-3">
              <span className="font-heading font-black text-[24px] md:text-[28px] text-[#1c1c18]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-[15px] text-[#444748] line-through font-mono">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#fedaaa] text-[#745a34] text-[11px] font-heading font-extrabold uppercase">
                    SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>
            <div className="text-[11px] text-[#444748] mt-1 flex items-center gap-1.5 font-light">
              <span className="material-symbols-outlined text-[15px] text-[#745a34]">verified_user</span>
              <span>Inclusive of all import duties, luxury cess &amp; taxes. Complimentary express courier.</span>
            </div>
          </div>

          {/* Colorway Palette Selector */}
          <div>
            <div className="flex items-center justify-between text-[12px] mb-2 font-bold">
              <span>COLOR: <span className="font-normal text-[#444748]">{selectedColor}</span></span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#745a34]">LIMITED PALETTE</span>
            </div>
            <div className="flex items-center gap-3">
              {product.colors.map((color) => {
                const isSelected = selectedColor === color.name;
                return (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                      isSelected
                        ? 'border-black bg-white shadow-sm ring-2 ring-black/10'
                        : 'border-[#e5e2dc] bg-[#f6f3ed] hover:border-black/30'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-black/20" style={{ backgroundColor: color.hex }} />
                    <span className="text-[12px] font-medium text-[#1c1c18]">{color.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Garment Size Selector */}
          <div>
            <div className="flex items-center justify-between text-[12px] mb-2 font-bold">
              <span>SELECT SIZE:</span>
              <button
                onClick={onOpenSizeGuide}
                className="text-[11px] font-bold text-[#745a34] hover:underline flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">straighten</span>
                <span>Size Guide (cm / in)</span>
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((sz) => {
                const inStock = product.inStockSizes.includes(sz);
                const isSelected = selectedSize === sz;
                return (
                  <button
                    key={sz}
                    disabled={!inStock}
                    onClick={() => setSelectedSize(sz)}
                    className={`h-11 rounded-lg font-heading text-[13px] font-bold uppercase transition-all relative ${
                      isSelected
                        ? 'bg-black text-white shadow-md'
                        : inStock
                        ? 'bg-white border border-[#e5e2dc] text-[#1c1c18] hover:border-black'
                        : 'bg-[#f0eee8] text-[#c4c7c7] cursor-not-allowed line-through'
                    }`}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>

            {/* Archive Alert Stock Chip */}
            <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-[#fedaaa]/40 border border-[#fedaaa] text-[11px] text-[#745a34] font-medium">
              <span className="material-symbols-outlined text-[16px]">inventory_2</span>
              <span>Archive Alert: Only 4 pieces remaining in size {selectedSize}</span>
            </div>
          </div>

          {/* Quantity & CTA Buttons (Desktop) */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center border border-[#e5e2dc] rounded-full bg-white h-12 px-2 shadow-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center text-black hover:bg-[#f0eee8] rounded-full transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <span className="w-10 text-center font-mono font-bold text-[14px]">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(5, q + 1))}
                  className="w-8 h-8 flex items-center justify-center text-black hover:bg-[#f0eee8] rounded-full transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => {
                  onAddToCart(product, selectedColor, selectedSize, quantity);
                  onShowToast(`${product.title} (Size ${selectedSize}) added to bag`);
                }}
                className="flex-1 h-12 rounded-full bg-[#f0eee8] text-[#1c1c18] border border-[#e5e2dc] font-heading text-[12px] font-extrabold uppercase tracking-widest hover:bg-[#e5e2dc] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span>ADD TO CART</span>
              </button>
            </div>

            {/* Instant Acquisition CTA */}
            <button
              onClick={handleInstantBuy}
              className="w-full h-13 rounded-full bg-[#000000] text-white font-heading text-[12px] font-black uppercase tracking-widest hover:bg-[#745a34] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>INSTANT ACQUISITION — ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* Delivery & Pincode Checker */}
          <div className="bg-white rounded-xl p-4 border border-[#e5e2dc] shadow-sm">
            <div className="flex items-center gap-2 text-[12px] font-bold text-[#1c1c18] mb-2">
              <span className="material-symbols-outlined text-[18px]">local_shipping</span>
              <span>ESTIMATE EXPRESS DISPATCH</span>
            </div>

            <form onSubmit={handleCheckPincode} className="flex gap-2">
              <input
                type="text"
                maxLength={6}
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter 6-digit Pincode"
                className="flex-1 h-10 px-3 rounded-lg bg-[#f6f3ed] border border-[#e5e2dc] text-[13px] font-mono focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="px-5 h-10 rounded-lg bg-black text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#745a34] transition-all"
              >
                CHECK
              </button>
            </form>

            {pincodeChecked && (
              <div className="mt-3 text-[11px] text-[#444748] space-y-1">
                <div className="flex items-center gap-1.5 text-black font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-[#745a34]">verified</span>
                  <span>Express delivery by Friday, Oct 24</span>
                </div>
                <div>Cash on Delivery available • 30-Day complimentary home trial &amp; hassle-free pickup</div>
              </div>
            )}
          </div>

          {/* 4 Technical Spec Cards (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-3 text-[12px]">
            <div className="bg-[#f0eee8] p-3 rounded-xl">
              <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-[#745a34] block mb-0.5">
                SILHOUETTE
              </span>
              <span className="font-bold text-[#1c1c18]">{product.specs.silhouette}</span>
            </div>
            <div className="bg-[#f0eee8] p-3 rounded-xl">
              <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-[#745a34] block mb-0.5">
                CLOSURE HARDWARE
              </span>
              <span className="font-bold text-[#1c1c18]">{product.specs.closure}</span>
            </div>
            <div className="bg-[#f0eee8] p-3 rounded-xl">
              <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-[#745a34] block mb-0.5">
                INTERNAL LINING
              </span>
              <span className="font-bold text-[#1c1c18]">{product.specs.lining}</span>
            </div>
            <div className="bg-[#f0eee8] p-3 rounded-xl">
              <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-[#745a34] block mb-0.5">
                MILLED &amp; ASSEMBLED
              </span>
              <span className="font-bold text-[#1c1c18]">{product.specs.origin}</span>
            </div>
          </div>

          {/* Interactive Accordions */}
          <div className="border-t border-[#e5e2dc] pt-2 space-y-2">
            {/* 1. Description & Fit */}
            <div className="border-b border-[#e5e2dc] pb-2">
              <button
                onClick={() => toggleAccordion('description')}
                className="w-full py-2 flex items-center justify-between text-left font-heading font-bold text-[13px] uppercase tracking-wider text-[#1c1c18]"
              >
                <span>Product Description &amp; Archival Fit</span>
                <span className="material-symbols-outlined text-[20px]">
                  {openAccordions.description ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {openAccordions.description && (
                <div className="py-2 text-[13px] text-[#444748] space-y-2">
                  <p>{product.description}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {product.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 2. Materials & Care */}
            <div className="border-b border-[#e5e2dc] pb-2">
              <button
                onClick={() => toggleAccordion('materials')}
                className="w-full py-2 flex items-center justify-between text-left font-heading font-bold text-[13px] uppercase tracking-wider text-[#1c1c18]"
              >
                <span>Materials &amp; Sustainable Care</span>
                <span className="material-symbols-outlined text-[20px]">
                  {openAccordions.materials ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {openAccordions.materials && (
                <div className="py-2 text-[13px] text-[#444748] space-y-1">
                  <ul className="list-disc pl-5 space-y-1">
                    {product.materialsCare.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 3. Shipping & Bespoke Returns */}
            <div className="border-b border-[#e5e2dc] pb-2">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full py-2 flex items-center justify-between text-left font-heading font-bold text-[13px] uppercase tracking-wider text-[#1c1c18]"
              >
                <span>Complimentary Shipping &amp; Bespoke Returns</span>
                <span className="material-symbols-outlined text-[20px]">
                  {openAccordions.shipping ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {openAccordions.shipping && (
                <div className="py-2 text-[13px] text-[#444748] space-y-1">
                  <ul className="list-disc pl-5 space-y-1">
                    {product.shippingInfo.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: COMPLETE THE LOOK */}
      <section className="border-t border-[#1c1c18]/10 pt-12 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[11px] font-mono text-[#745a34] uppercase tracking-widest font-bold">
              STYLED ENSEMBLE
            </span>
            <h2 className="font-heading font-black text-[24px] md:text-[32px] uppercase tracking-tight text-[#1c1c18]">
              Complete The Look
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPLETE_THE_LOOK_ITEMS.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-3 border border-[#e5e2dc] shadow-sm flex flex-col justify-between group">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[#f0eee8] mb-3">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-white/90 font-mono text-[9px] font-bold uppercase tracking-wider">
                  {item.edition}
                </div>
                <button
                  onClick={() => onShowToast(`${item.title} added to ensemble`)}
                  className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shadow-md active:scale-90"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#745a34] font-bold">
                  {item.category}
                </span>
                <h4 className="font-heading font-bold text-[14px] text-[#1c1c18] truncate mt-0.5">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-heading font-black text-[15px] text-[#1c1c18]">
                    ₹{item.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-[#444748]">{item.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: COLLECTOR CONSENSUS & REVIEWS */}
      <section className="border-t border-[#1c1c18]/10 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 bg-white rounded-2xl p-6 md:p-8 border border-[#e5e2dc]">
          {/* Rating Summary (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[#e5e2dc] pb-6 lg:pb-0 lg:pr-8">
            <div className="font-heading font-black text-[48px] md:text-[56px] text-[#1c1c18] leading-none mb-1">
              4.9
            </div>
            <div className="flex items-center gap-1 text-[#745a34] mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[20px] fill-1">star</span>
              ))}
            </div>
            <div className="font-heading font-bold text-[14px] text-[#1c1c18] uppercase tracking-wider">
              Collector Consensus
            </div>
            <div className="text-[12px] text-[#444748] mt-1 font-mono">
              Based on 142 verified drops worldwide
            </div>
          </div>

          {/* Breakdown Bars (4 cols) */}
          <div className="lg:col-span-4 space-y-2 text-[12px] font-mono">
            {[
              { star: 5, pct: 88 },
              { star: 4, pct: 10 },
              { star: 3, pct: 2 },
              { star: 2, pct: 0 },
              { star: 1, pct: 0 },
            ].map((bar) => (
              <div key={bar.star} className="flex items-center gap-2">
                <span className="w-12 text-[#444748]">{bar.star} Stars</span>
                <div className="flex-1 h-2 bg-[#f0eee8] rounded-full overflow-hidden">
                  <div className="h-full bg-black rounded-full" style={{ width: `${bar.pct}%` }} />
                </div>
                <span className="w-8 text-right font-bold">{bar.pct}%</span>
              </div>
            ))}
          </div>

          {/* Fit & Fabric Gauges (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider mb-1">
                <span className="text-[#745a34]">FIT SCALE</span>
                <span className="text-black font-mono">TRUE OVERSIZED</span>
              </div>
              <div className="h-2 bg-[#f0eee8] rounded-full relative overflow-hidden">
                <div className="absolute inset-y-0 left-1/2 w-4 bg-black rounded-full -translate-x-1/2" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider mb-1">
                <span className="text-[#745a34]">FABRIC WEIGHT</span>
                <span className="text-black font-mono">SUBSTANTIAL (680G)</span>
              </div>
              <div className="h-2 bg-[#f0eee8] rounded-full relative overflow-hidden">
                <div className="absolute inset-y-0 right-4 w-4 bg-black rounded-full" />
              </div>
            </div>

            <button
              onClick={() => setShowReviewModal(true)}
              className="w-full h-11 rounded-lg border border-black text-black font-heading text-[11px] font-extrabold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-sm"
            >
              WRITE VERIFIED REVIEW
            </button>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="bg-white rounded-xl p-5 border border-[#e5e2dc] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#f0eee8] flex items-center justify-center font-bold text-[12px]">
                    {rev.author.substring(0, 2)}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[13px] text-[#1c1c18] flex items-center gap-1">
                      <span>{rev.author}</span>
                      <span className="material-symbols-outlined text-[#745a34] text-[15px] fill-1">verified</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#745a34] uppercase">{rev.edition}</span>
                  </div>
                </div>
                <span className="text-[11px] text-[#444748] font-mono">{rev.date}</span>
              </div>

              <div className="flex items-center gap-0.5 text-[#745a34]">
                {[...Array(rev.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[16px] fill-1">star</span>
                ))}
              </div>

              <p className="text-[13px] text-[#444748] italic leading-relaxed">
                &ldquo;{rev.content}&rdquo;
              </p>

              <div className="pt-2 border-t border-[#e5e2dc]/60 text-[11px] font-mono text-[#444748] flex items-center gap-3">
                <span>Size purchased: {rev.sizePurchased}</span>
                <span>•</span>
                <span>Height: {rev.height}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE STICKY BOTTOM PURCHASE BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#e5e2dc] p-3 px-4 flex items-center justify-between gap-3 lg:hidden shadow-2xl pb-safe">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#444748] block">TOTAL</span>
          <span className="font-heading font-black text-[18px] text-black">
            ₹{(product.price * quantity).toLocaleString('en-IN')}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-1 max-w-[260px]">
          <button
            onClick={() => {
              onAddToCart(product, selectedColor, selectedSize, quantity);
              onShowToast(`${product.title} added to bag`);
            }}
            className="flex-1 h-11 rounded-full bg-[#f0eee8] text-black font-heading text-[11px] font-bold uppercase tracking-wider border border-[#e5e2dc] active:scale-95"
          >
            ADD TO CART
          </button>
          <button
            onClick={handleInstantBuy}
            className="flex-1 h-11 rounded-full bg-black text-white font-heading text-[11px] font-black uppercase tracking-wider shadow-md active:scale-95"
          >
            BUY NOW
          </button>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
          >
            <span className="material-symbols-outlined text-[28px]">close</span>
          </button>
          <img
            src={images[selectedImageIdx]}
            alt={product.title}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* WRITE REVIEW MODAL */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#e5e2dc]">
              <h3 className="font-heading font-black text-[16px] uppercase tracking-wider text-black">
                Write Verified Collector Review
              </h3>
              <button onClick={() => setShowReviewModal(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-[12px] text-[#444748]">
              Share your insights regarding silhouette drape, fabric density, and sizing fidelity.
            </p>
            <textarea
              rows={4}
              placeholder="e.g. The wool drape holds shape flawlessly..."
              className="w-full p-3 rounded-xl bg-[#f6f3ed] border border-[#e5e2dc] text-[13px] focus:outline-none focus:border-black"
            />
            <button
              onClick={() => {
                setShowReviewModal(false);
                onShowToast('Review submitted for verification by ATELIER Archive.');
              }}
              className="w-full h-11 rounded-full bg-black text-white font-heading text-[12px] font-bold uppercase tracking-wider"
            >
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
