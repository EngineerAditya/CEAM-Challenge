'use client';

export default function PaymentInstructions({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-[rgb(235,107,38)]/5 border border-[rgb(235,107,38)]/20 rounded-xl p-6 ${className}`}>
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-[rgb(235,107,38)]">⚠️</span> Important Instructions
      </h3>

      <div className="space-y-4 text-sm text-gray-300">
        <div className="flex gap-3">
          <div className="shrink-0 w-5 h-5 rounded-full bg-[rgb(235,107,38)]/20 text-[rgb(235,107,38)] flex items-center justify-center font-bold text-xs mt-0.5">1</div>
          <p><strong className="text-white">Team Leader Payment Only:</strong> Only the Team Leader needs to make the payment. You can add your teammates after the payment is complete.</p>
        </div>

        <div className="flex gap-3">
          <div className="shrink-0 w-5 h-5 rounded-full bg-[rgb(235,107,38)]/20 text-[rgb(235,107,38)] flex items-center justify-center font-bold text-xs mt-0.5">2</div>
          <p><strong className="text-white">No Refunds:</strong> Once the payment is made, there will be <span className="text-red-400 font-bold">NO REFUNDS</span> under any circumstances.</p>
        </div>

        <div className="flex gap-3">
          <div className="shrink-0 w-5 h-5 rounded-full bg-[rgb(235,107,38)]/20 text-[rgb(235,107,38)] flex items-center justify-center font-bold text-xs mt-0.5">3</div>
          <p><strong className="text-white">Matching Details:</strong> Ensure that the details (Name and Phone Number) entered on the payment portal <span className="text-[rgb(235,107,38)] font-bold">EXACTLY MATCH</span> the details used for login on this website. Any discrepancy will lead to immediate <span className="text-red-400 font-bold">DISQUALIFICATION</span>.</p>
        </div>

        <div className="flex gap-3">
          <div className="shrink-0 w-5 h-5 rounded-full bg-[rgb(235,107,38)]/20 text-[rgb(235,107,38)] flex items-center justify-center font-bold text-xs mt-0.5">4</div>
          <p><strong className="text-white">Order ID:</strong> After payment, the confirmation page will show an <span className="font-mono text-[rgb(235,107,38)]">Order ID</span>. You <span className="underline decoration-[rgb(235,107,38)] decoration-2">MUST COPY</span> this immediately. Entering a wrong Order ID will result in disqualification.</p>
        </div>
      </div>
    </div>
  );
}
