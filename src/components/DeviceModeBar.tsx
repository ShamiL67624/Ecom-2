import React from 'react';
import { ScreenType } from '../types';

export type ViewMode = 'responsive' | 'mobile-frame' | 'desktop-view';

interface DeviceModeBarProps {
  viewMode: ViewMode;
  onSetViewMode: (mode: ViewMode) => void;
  currentScreen: ScreenType;
  onSetScreen: (screen: ScreenType) => void;
}

export const DeviceModeBar: React.FC<DeviceModeBarProps> = ({
  viewMode,
  onSetViewMode,
  currentScreen,
  onSetScreen,
}) => {
  return (
    <aside aria-label="Screen and Device View Switcher" className="bg-[#1c1c18] text-[#fcf9f3] text-[11px] py-1 px-4 border-b border-black flex items-center justify-between flex-wrap gap-2 z-50">
      {/* Screen Quick Switcher */}
      <div className="flex items-center gap-2">
        <span className="text-[#e3c193] font-mono uppercase font-bold tracking-widest text-[10px]">
          SCREEN:
        </span>
        <div className="flex items-center bg-black/60 rounded-md p-0.5">
          <button
            onClick={() => onSetScreen('home')}
            className={`px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase transition-all ${
              currentScreen === 'home' ? 'bg-[#745a34] text-white shadow-sm' : 'text-[#cac6c3] hover:text-white'
            }`}
          >
            1. Home Editorial
          </button>
          <button
            onClick={() => onSetScreen('catalog')}
            className={`px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase transition-all ${
              currentScreen === 'catalog' ? 'bg-[#745a34] text-white shadow-sm' : 'text-[#cac6c3] hover:text-white'
            }`}
          >
            2. Menswear Catalog
          </button>
          <button
            onClick={() => onSetScreen('product')}
            className={`px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase transition-all ${
              currentScreen === 'product' ? 'bg-[#745a34] text-white shadow-sm' : 'text-[#cac6c3] hover:text-white'
            }`}
          >
            3. Product Detail
          </button>
        </div>
      </div>

      {/* Viewport Frame Mode Toggle */}
      <div className="flex items-center gap-2">
        <span className="text-[#cac6c3] font-mono text-[10px] uppercase hidden sm:inline">
          VIEWPORT:
        </span>
        <div className="flex items-center bg-black/60 rounded-md p-0.5">
          <button
            onClick={() => onSetViewMode('responsive')}
            title="Fluid Responsive view"
            className={`px-2 py-1 rounded text-[10px] font-mono uppercase transition-all ${
              viewMode === 'responsive' ? 'bg-white/20 text-white font-bold' : 'text-[#cac6c3] hover:text-white'
            }`}
          >
            ⚡ Auto Fluid
          </button>
          <button
            onClick={() => onSetViewMode('mobile-frame')}
            title="Mobile iPhone view (Screens 4, 6, 8)"
            className={`px-2 py-1 rounded text-[10px] font-mono uppercase transition-all ${
              viewMode === 'mobile-frame' ? 'bg-[#745a34] text-white font-bold' : 'text-[#cac6c3] hover:text-white'
            }`}
          >
            📱 Mobile Frame
          </button>
          <button
            onClick={() => onSetViewMode('desktop-view')}
            title="Desktop Wide view (Screens 12, 14, 16)"
            className={`px-2 py-1 rounded text-[10px] font-mono uppercase transition-all ${
              viewMode === 'desktop-view' ? 'bg-[#745a34] text-white font-bold' : 'text-[#cac6c3] hover:text-white'
            }`}
          >
            🖥️ Desktop Wide
          </button>
        </div>
      </div>
    </aside>
  );
};
