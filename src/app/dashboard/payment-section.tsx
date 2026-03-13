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
      setError('Please enter your Registration Number.');
      setLoading(false);
      return;
    }

    if (!trimmed.startsWith('RMITBR0061_')) {
      setError('Registration Number must start with RMITBR0061_');
      setLoading(false);
      return;
    }

    // Verify registration number exists in payments table with successful status
    const { data: payment, error: paymentError } = await supabase
      .from('payments')
      .select('"Reg Id", "Payment Status", "Email", "Mobile"')
      .eq('Reg Id', trimmed)
      .single();

    if (paymentError || !payment) {
      setError('This Registration Number was not found in our records. Payments are verified every 12 hours — if you just paid, please try again later. For help, contact coeam.mitblr@manipal.edu');
      setLoading(false);
      return;
    }

    if (payment["Payment Status"] !== 'Transaction Success') {
      setError(`Payment status: "${payment["Payment Status"]}". Only successful transactions are accepted. For help, contact coeam.mitblr@manipal.edu`);
      setLoading(false);
      return;
    }

    // Cross-check: user's email or mobile must match the payment record
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('email, mobile_number')
      .eq('id', userId)
      .single();

    if (profileError || !profile) {
      setError('Could not fetch your profile. Please try again.');
      setLoading(false);
      return;
    }

    const emailMatch = profile.email.toLowerCase() === (payment["Email"] as string).toLowerCase();
    const mobileMatch = profile.mobile_number === payment["Mobile"];

    if (!emailMatch && !mobileMatch) {
      setError('Your email or mobile number does not match this payment record. The details you registered with must match the ones used on the payment portal. For help, contact coeam.mitblr@manipal.edu');
      setLoading(false);
      return;
    }

    const { error: updateError } = await supabase
      .from('profiles')
      .update({ order_id: trimmed })
      .eq('id', userId);

    if (updateError) {
      if (updateError.message.includes('duplicate') || updateError.message.includes('unique')) {
        setError('This Registration Number is already registered by another user. For help, contact coeam.mitblr@manipal.edu');
      } else {
        setError(`Something went wrong: ${updateError.message}. For help, contact coeam.mitblr@manipal.edu`);
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

      {/* Mobile number warning */}
      <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/25 rounded-xl px-4 py-3 mb-1">
        <span className="text-red-400 text-base mt-0.5">⚠</span>
        <p className="text-xs text-gray-300 leading-relaxed">
          <span className="text-red-400 font-semibold">Important:</span> The mobile number you used to register on this website <span className="text-white font-semibold">must match</span> the mobile number you enter on the payment portal. If they don&apos;t match, team creation will fail. For issues, contact{' '}
          <a href="mailto:coeam.mitblr@manipal.edu" className="text-[rgb(235,107,38)] underline">coeam.mitblr@manipal.edu</a>
        </p>
      </div>

      {/* Payment link */}
      <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5">
        <p className="text-sm text-gray-400 mb-4">
          Click below to proceed to the payment portal.
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

      {/* Receipt Number form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
            Registration Number
          </label>
          <p className="text-xs text-gray-500 mb-3">
            Enter the registration number sent via email — last row of the table (starts with{' '}
            <span className="text-gray-300 font-mono">RMITBR0061_</span>)
          </p>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="RMITBR0061_000XXX"
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
          {loading ? 'Submitting...' : 'Submit Registration Number'}
        </button>
      </form>
    </div>
  );
}
