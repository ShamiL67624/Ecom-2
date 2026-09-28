/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Product, CartItem, ScreenType } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { CatalogScreen } from './components/CatalogScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { LookbookModal } from './components/LookbookModal';
import { CheckoutModal } from './components/CheckoutModal';
import { AccountModal } from './components/AccountModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { DeviceModeBar, ViewMode } from './components/DeviceModeBar';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [viewMode, setViewMode] = useState<ViewMode>('responsive');

  // Initial cart items (3 pieces to match the badge in the mockups)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Wool Coat
      selectedColor: 'Camel Melange',
      selectedSize: 'M',
      quantity: 1,
    },
    {
      product: PRODUCTS[1], // French Terry Hoodie
      selectedColor: 'Bone White',
      selectedSize: 'L',
      quantity: 1,
    },
    {
      product: PRODUCTS[2], // Relaxed Pleated Trousers
      selectedColor: 'Charcoal',
      selectedSize: 'M',
      quantity: 1,
    },
  ]);

  // Initial wishlist items (2 pieces to match the badge in the mockups)
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(
    new Set([PRODUCTS[3].id, PRODUCTS[4].id])
  );

  // Modal / Drawer States
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [lookbookOpen, setLookbookOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 2800);
  };

  // Handlers
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToCatalog = (category: string = 'all') => {
    setSelectedCategory(category);
    setCurrentScreen('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (
    product: Product,
    color: string = product.colors[0]?.name || 'Standard',
    size: string = 'M',
    quantity: number = 1
  ) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === color &&
          item.selectedSize === size
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      }
      return [...prev, { product, selectedColor: color, selectedSize: size, quantity }];
    });
  };

  const handleUpdateCartQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems((prev) => {
      const next = [...prev];
      next[index].quantity = quantity;
      return next;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    showToast('Item removed from shopping bag');
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        showToast(`${product.title} removed from archive`);
      } else {
        next.add(product.id);
        showToast(`${product.title} saved to archive`);
      }
      return next;
    });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // App Content Component
  const appContent = (
    <div className="min-h-screen flex flex-col bg-[#fcf9f3] text-[#1c1c18] relative">
      {/* Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={(screen, cat) => {
          if (screen === 'catalog') {
            handleNavigateToCatalog(cat || 'all');
          } else {
            setCurrentScreen(screen);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.size}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onSelectCategoryFilter={(cat) => setSelectedCategory(cat)}
      />

      {/* Main Screen Body */}
      <main className="flex-1 pb-16 md:pb-0">
        {currentScreen === 'home' && (
          <HomeScreen
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onNavigateToCatalog={handleNavigateToCatalog}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onShowToast={showToast}
            onOpenLookbook={() => setLookbookOpen(true)}
          />
        )}

        {currentScreen === 'catalog' && (
          <CatalogScreen
            products={PRODUCTS}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onShowToast={showToast}
            onOpenLookbook={() => setLookbookOpen(true)}
          />
        )}

        {currentScreen === 'product' && (
          <ProductDetailScreen
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={wishlistIds.has(selectedProduct.id)}
            onBack={() => setCurrentScreen('catalog')}
            onShowToast={showToast}
            onOpenSizeGuide={() => setSizeGuideOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNewsletterSuccess={() => showToast('Subscribed to private priority drop list')} />

      {/* Mobile Bottom Navigation Bar (Screens 4 & 6) */}
      <MobileBottomNav
        currentScreen={currentScreen}
        onNavigate={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenAccount={() => setAccountOpen(true)}
        wishlistCount={wishlistIds.size}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
        onShowToast={showToast}
      />

      {/* Slide-out Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistIds={wishlistIds}
        allProducts={PRODUCTS}
        onSelectProduct={handleSelectProduct}
        onAddToCart={handleAddToCart}
        onRemoveFromWishlist={handleToggleWishlist}
        onShowToast={showToast}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      {/* Lookbook Film Modal */}
      <LookbookModal
        isOpen={lookbookOpen}
        onClose={() => setLookbookOpen(false)}
        onExploreCatalog={() => handleNavigateToCatalog('all')}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cartItems}
        onClearCart={() => setCartItems([])}
        onShowToast={showToast}
      />

      {/* Account Modal */}
      <AccountModal
        isOpen={accountOpen}
        onClose={() => setAccountOpen(false)}
        onNavigateToCatalog={() => handleNavigateToCatalog('all')}
      />

      {/* Floating Micro Toast */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-[#000000] text-white text-[12px] font-heading font-bold shadow-2xl flex items-center gap-2 border border-white/20 animate-bounce">
          <span className="material-symbols-outlined text-[18px] text-[#ffddb1]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#111110]">
      {/* Top Device & Screen Mode Controller */}
      <DeviceModeBar
        viewMode={viewMode}
        onSetViewMode={setViewMode}
        currentScreen={currentScreen}
        onSetScreen={(s) => {
          setCurrentScreen(s);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Viewport Frame Renderer */}
      {viewMode === 'mobile-frame' ? (
        <div className="py-6 px-4 flex items-center justify-center min-h-[calc(100vh-42px)] bg-[#1c1c18]/80">
          <div className="w-[412px] h-[860px] bg-black rounded-[50px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border-4 border-[#333330] relative overflow-hidden flex flex-col">
            {/* Dynamic Island Speaker Pill */}
            <div className="w-28 h-6 bg-black rounded-full absolute top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-end px-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1c1b1b] border border-[#333]" />
            </div>

            {/* Inner Mobile Screen */}
            <div className="w-full h-full rounded-[42px] overflow-y-auto no-scrollbar bg-[#fcf9f3] relative">
              {appContent}
            </div>
          </div>
        </div>
      ) : viewMode === 'desktop-view' ? (
        <div className="w-full bg-[#fcf9f3] overflow-x-auto">
          <div className="min-w-[1240px] max-w-[1600px] mx-auto shadow-2xl">
            {appContent}
          </div>
        </div>
      ) : (
        /* Responsive View */
        appContent
      )}
    </div>
  );
}
