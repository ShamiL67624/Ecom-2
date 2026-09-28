import React from 'react';
import { PROFILE_AVATAR_URL } from '../data/products';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToCatalog: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  onNavigateToCatalog,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl z-10 border border-[#e5e2dc]">
        <div className="flex items-center justify-between pb-4 border-b border-[#e5e2dc]">
          <div className="flex items-center gap-3">
            <img
              src={PROFILE_AVATAR_URL}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border border-[#e5e2dc]"
            />
            <div>
              <h3 className="font-heading font-black text-[16px] text-black">Elena Rostova</h3>
              <span className="text-[11px] font-mono text-[#745a34] font-bold">
                • VERIFIED TIER 2 COLLECTOR
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f0eee8] flex items-center justify-center text-black"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="py-4 space-y-3 text-[13px]">
          <div className="bg-[#fcf9f3] p-3 rounded-xl border border-[#e5e2dc]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#745a34] font-bold">
              VAULT ACCESS PERMISSION
            </div>
            <div className="font-bold text-black mt-0.5">Priority Capsule Dispatch (Level 2)</div>
            <p className="text-[11px] text-[#444748] mt-1">
              You receive drop links 15 minutes before public inventory is posted.
            </p>
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between py-2 border-b border-[#f0eee8]">
              <span className="text-[#444748]">Collector ID</span>
              <span className="font-mono font-bold">#IX-98421-MUM</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#f0eee8]">
              <span className="text-[#444748]">Default Fit Profile</span>
              <span className="font-bold">Size M (Chest 124cm)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#f0eee8]">
              <span className="text-[#444748]">Acquired Drops</span>
              <span className="font-bold">4 Archival Pieces</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[#444748]">Private Concierge</span>
              <span className="font-mono text-[#745a34] font-bold">ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              onClose();
              onNavigateToCatalog();
            }}
            className="w-full h-11 rounded-full bg-black text-white font-heading text-[11px] font-bold uppercase tracking-wider hover:bg-[#745a34] transition-all"
          >
            Browse Archival Vault
          </button>
        </div>
      </div>
    </div>
  );
};
