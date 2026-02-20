'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function InstructionsModal({ isOpen, onClose, title = "Important Instructions" }: InstructionsModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-[rgb(235,107,38)]/30 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10 bg-[rgb(235,107,38)]/10 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="text-[rgb(235,107,38)]">⚠️</span> {title}
              </h3>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="space-y-4 text-sm md:text-base text-gray-300">
                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[rgb(235,107,38)]/20 text-[rgb(235,107,38)] flex items-center justify-center font-bold text-xs mt-0.5">1</div>
                  <p><strong className="text-white">Team Leader Payment Only:</strong> Only the Team Leader needs to make the payment. You can add your teammates after the payment is complete.</p>
                </div>

                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[rgb(235,107,38)]/20 text-[rgb(235,107,38)] flex items-center justify-center font-bold text-xs mt-0.5">2</div>
                  <p><strong className="text-white">No Refunds:</strong> Once the payment is made, there will be <span className="text-red-400 font-bold">NO REFUNDS</span> under any circumstances.</p>
                </div>

                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[rgb(235,107,38)]/20 text-[rgb(235,107,38)] flex items-center justify-center font-bold text-xs mt-0.5">3</div>
                  <p><strong className="text-white">Matching Details:</strong> Ensure that the details (Name and Phone Number) entered on the payment portal <span className="text-[rgb(235,107,38)] font-bold">EXACTLY MATCH</span> the details used for login on this website. Any discrepancy will lead to immediate <span className="text-red-400 font-bold">DISQUALIFICATION</span>.</p>
                </div>

                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[rgb(235,107,38)]/20 text-[rgb(235,107,38)] flex items-center justify-center font-bold text-xs mt-0.5">4</div>
                  <p><strong className="text-white">Order ID:</strong> After payment, the confirmation page will show an <span className="font-mono text-[rgb(235,107,38)]">Order ID</span>. You <span className="underline decoration-[rgb(235,107,38)] decoration-2">MUST COPY</span> this immediately. Entering a wrong Order ID will result in disqualification.</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-white/[0.02] border-t border-white/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[rgb(235,107,38)] hover:bg-[rgb(215,90,25)] text-white font-bold text-sm uppercase tracking-widest rounded-lg transition-all duration-300 shadow-lg hover:shadow-[rgb(235,107,38)]/20"
              >
                I Understand & Agree
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
