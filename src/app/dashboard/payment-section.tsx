'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import PaymentInstructions from '@/components/ui/PaymentInstructions';

const PAYMENT_URL =
  'https://conference.manipal.edu/Registration/Registration?workshop=F1vbHYgLrd9Y4WLG7Wx6w3qnH7EU%2fDbgx0kHtMu8VPI%3d';

export default function PaymentSection({ userId }: { userId: string }) {
  const supabase = createClient();
  const router = useRouter();

  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const trimmed = orderId.trim();

    if (!trimmed) {
      setError('Please enter your Order ID.');
      setLoading(false);
      return;
    }

    if (!trimmed.startsWith('O_PTMITBR0061_') && !trimmed.startsWith('O_ATMITBR0061_')) {
      setError('Order ID must start with O_PTMITBR0061_ or O_ATMITBR0061_');
      setLoading(false);
      return;
    }

    const { error: updateError } = await supabase
      .from('profiles')
      .update({ order_id: trimmed })
      .eq('id', userId);

    if (updateError) {
      if (updateError.message.includes('duplicate') || updateError.message.includes('unique')) {
        setError('This Order ID is already registered by another user.');
      } else {
        setError(updateError.message);
      }
      setLoading(false);
      return;
    }

    router.refresh();
  };

  return (
    <div className="flex flex-col gap-5">
      <PaymentInstructions />

      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-full bg-[rgb(235,107,38)] flex items-center justify-center text-black text-xs font-bold">
          2
        </div>
        <h2 className="text-lg font-bold text-white">Complete Payment</h2>
      </div>

      {/* Payment link */}
      <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5">
        <p className="text-sm text-gray-400 mb-4">
          Click below to proceed to the payment portal.{' '}
          <span className="text-[rgb(235,107,38)] font-medium">
            Use the same phone number you registered with on this website.
          </span>
        </p>
        <a
          href={PAYMENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 text-center bg-[rgb(235,107,38)] hover:bg-[rgb(215,90,25)] text-white font-bold text-sm uppercase tracking-widest rounded-xl transition-all duration-300"
        >
          Pay Now ↗
        </a>
      </div>

      {/* Order ID form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
            Order ID
          </label>
          <p className="text-xs text-gray-500 mb-3">
            After payment, enter the Order ID from your confirmation (starts with{' '}
            <span className="text-gray-300 font-mono">O_PTMITBR0061_</span> or{' '}
            <span className="text-gray-300 font-mono">O_ATMITBR0061_</span>)
          </p>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="O_PTMITBR0061_XXXXXX"
            className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[rgb(235,107,38)]/50 transition-colors placeholder:text-gray-600 font-mono"
            required
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-white hover:bg-gray-100 text-black font-bold text-sm uppercase tracking-widest rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? 'Submitting...' : 'Submit Order ID'}
        </button>
      </form>
    </div>
  );
}
