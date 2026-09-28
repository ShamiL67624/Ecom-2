import React, { useState } from 'react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');

  if (!isOpen) return null;

  const data = unit === 'cm' ? [
    { size: 'S', chest: '118 cm', shoulder: '54 cm', length: '116 cm', sleeve: '62 cm' },
    { size: 'M', chest: '124 cm', shoulder: '56 cm', length: '119 cm', sleeve: '63.5 cm' },
    { size: 'L', chest: '130 cm', shoulder: '58 cm', length: '122 cm', sleeve: '65 cm' },
    { size: 'XL', chest: '136 cm', shoulder: '60 cm', length: '125 cm', sleeve: '66.5 cm' },
    { size: 'XXL', chest: '142 cm', shoulder: '62 cm', length: '128 cm', sleeve: '68 cm' },
  ] : [
    { size: 'S', chest: '46.5 in', shoulder: '21.2 in', length: '45.6 in', sleeve: '24.4 in' },
    { size: 'M', chest: '48.8 in', shoulder: '22.0 in', length: '46.8 in', sleeve: '25.0 in' },
    { size: 'L', chest: '51.1 in', shoulder: '22.8 in', length: '48.0 in', sleeve: '25.6 in' },
    { size: 'XL', chest: '53.5 in', shoulder: '23.6 in', length: '49.2 in', sleeve: '26.2 in' },
    { size: 'XXL', chest: '55.9 in', shoulder: '24.4 in', length: '50.4 in', sleeve: '26.8 in' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl z-10 border border-[#e5e2dc]">
        <div className="flex items-center justify-between pb-4 border-b border-[#e5e2dc]">
          <div>
            <h3 className="font-heading font-black text-[18px] uppercase tracking-wider text-black">
              Archival Sizing Guide
            </h3>
            <span className="text-[11px] font-mono text-[#745a34]">OVERSIZED EDITORIAL PROPORTIONS</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f0eee8] flex items-center justify-center text-black"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Unit Toggle */}
        <div className="flex items-center justify-between py-4">
          <span className="text-[12px] text-[#444748]">
            Measurements taken flat across garment.
          </span>
          <div className="flex items-center bg-[#f0eee8] p-1 rounded-lg text-[11px] font-bold">
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 rounded-md transition-all ${
                unit === 'cm' ? 'bg-black text-white shadow-sm' : 'text-[#444748]'
              }`}
            >
              CM
            </button>
            <button
              onClick={() => setUnit('in')}
              className={`px-3 py-1 rounded-md transition-all ${
                unit === 'in' ? 'bg-black text-white shadow-sm' : 'text-[#444748]'
              }`}
            >
              INCHES
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#e5e2dc] text-[#745a34] font-mono uppercase text-[10px]">
                <th className="py-2">Size</th>
                <th className="py-2">Chest</th>
                <th className="py-2">Shoulder</th>
                <th className="py-2">Length</th>
                <th className="py-2">Sleeve</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0eee8]">
              {data.map((row) => (
                <tr key={row.size} className="hover:bg-[#fcf9f3]">
                  <td className="py-2.5 font-bold font-heading text-black">{row.size}</td>
                  <td className="py-2.5 font-mono text-[#444748]">{row.chest}</td>
                  <td className="py-2.5 font-mono text-[#444748]">{row.shoulder}</td>
                  <td className="py-2.5 font-mono text-[#444748]">{row.length}</td>
                  <td className="py-2.5 font-mono text-[#444748]">{row.sleeve}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 p-3 rounded-xl bg-[#f0eee8] text-[11px] text-[#444748] leading-relaxed">
          <span className="font-bold text-black">Stylist Advice:</span> This coat features an intentional 6-inch drop shoulder drape. We advise selecting your standard size for the intended runway drape, or one size down for a conventional fitted silhouette.
        </div>
      </div>
    </div>
  );
};
