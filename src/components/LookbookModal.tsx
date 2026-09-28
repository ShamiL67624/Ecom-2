import React from 'react';

interface LookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreCatalog: () => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  isOpen,
  onClose,
  onExploreCatalog,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-[#111110] text-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl z-10 border border-white/10">
        {/* Top Header */}
        <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ffddb1] animate-ping" />
            <span className="font-heading font-black text-[16px] uppercase tracking-wider text-white">
              FW/25 EDITORIAL LOOKBOOK // DROP IX
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Video / Editorial Visual Area */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4aqRpk1ZTvAeAKC3eVz2Lqy2DDC8HN1ejKxdMQu66BES8eNx19-2Bol5sF4zCyRBfsaKcTV9eaIqnaWDGdQHqbfgViwC1TJHB7vD9tF3LTqX7J9C_ieKcdNrKsVfrR_kYoW08BG1_i01nw4CpgedOFy9QTiPU9d7mZf0B2npiO3W2-w8J6kkZ0OmbxhCZ4FqggrD-23c_YgNDAYHDrJlizrGTGhUck0uXh9P69mOwjwlqCO51CTYW5g"
            alt="Editorial Film"
            className="w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase">
                DIRECTED BETWEEN TOKYO &amp; MILAN
              </span>
              <span className="text-[11px] font-mono text-[#ffddb1]">03:42 • 4K CINEMA</span>
            </div>
            <h3 className="font-heading font-black text-[24px] md:text-[36px] uppercase tracking-tight text-white max-w-xl">
              Architectural Layering: The Form of Permanent Movement
            </h3>
            <p className="text-[13px] text-white/70 max-w-lg mt-1 hidden sm:block">
              An intimate visual study capturing the tension between heavy virgin melton wools, custom loopback fleece, and brutalist geometric spaces.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 md:p-6 bg-[#1c1b1b] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[12px] font-mono text-white/70">
            <span>SOUNDTRACK: AMBIENT MONOLITH NO. 9</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">STARRING: ARJUN VARDHAN</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onExploreCatalog();
            }}
            className="h-11 px-7 rounded-full bg-white text-black font-heading text-[11px] font-extrabold uppercase tracking-widest hover:bg-[#ffddb1] transition-all shadow-md active:scale-95"
          >
            SHOP CAPSULE PIECES
          </button>
        </div>
      </div>
    </div>
  );
};
