'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import PaymentInstructions from '@/components/ui/PaymentInstructions';

const TRACKS = [
  { value: 'robotics', label: 'Robotics' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'ai and computer vision', label: 'AI and Computer Vision' }
];

const CAMPUSES = [
  { value: 'MANIPAL', label: 'Manipal' },
  { value: 'BLR', label: 'Bengaluru' },
  { value: 'JAIPUR', label: 'Jaipur' },
];

export default function CompleteProfilePage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isMahe, setIsMahe] = useState<boolean | null>(null);
  const [campus, setCampus] = useState('');
  const [regNum, setRegNum] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [track, setTrack] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email) {
        setEmail(user.email);
      }
      if (user?.user_metadata?.full_name) {
        setName(user.user_metadata.full_name);
      }

    };
    getUser();
  }, [supabase]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate common fields
    if (!name || !mobileNumber || !track || isMahe === null) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    // Validate MAHE specific fields
    if (isMahe) {
      if (!campus) {
        setError('Please select your campus.');
        setLoading(false);
        return;
      }
    } else {
      // Validate Non-MAHE specific fields
      if (!collegeName) {
        setError('Please enter your college name.');
        setLoading(false);
        return;
      }
    }

    if (!regNum) {
      setError('Please enter your registration number / ID card number.');
      setLoading(false);
      return;
    }

    if (!/^\d{10}$/.test(mobileNumber)) {
      setError('Please enter a valid 10-digit mobile number.');
      setLoading(false);
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError('Authentication error. Please sign in again.');
      setLoading(false);
      return;
    }

    const finalCollegeName = isMahe ? `MAHE-${campus}` : collegeName;
    const finalRegNum = regNum ? parseInt(regNum) : null;

    const { error: upsertError } = await supabase.from('profiles').upsert({
      id: user.id,
      email: email,
      name: name,
      college_name: finalCollegeName,
      mobile_number: parseInt(mobileNumber),
      track: track,
      is_mahe: isMahe,
      reg_num: finalRegNum,
    });

    if (upsertError) {
      if (upsertError.message.includes('mobile_number')) {
        setError('This mobile number is already registered.');
      } else {
        setError(upsertError.message);
      }
      setLoading(false);
      return;
    }

    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 pt-28 pb-12">
      <div className="w-full max-w-lg">

        {/* Instructions */}
        <PaymentInstructions className="mb-6" />

        {/* Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
          <h1
            className="text-2xl font-bold text-white text-center mb-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Complete Your Profile
          </h1>
          <p
            className="text-sm text-gray-400 text-center mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Fill in your details to complete your registration
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email (read-only) */}
            <div>
              <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                value={email}
                readOnly
                className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-gray-300 text-sm outline-none cursor-not-allowed opacity-60"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[rgb(235,107,38)]/50 transition-colors placeholder:text-gray-600"
                required
              />
            </div>



            {/* Is MAHE Student? */}
            <div>
              <label className="block text-xs text-gray-400 uppercase tracking-widest mb-3 font-medium">
                Are you a MAHE Student?
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsMahe(true)}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 border ${isMahe === true
                    ? 'bg-white text-black border-white'
                    : 'bg-white/[0.02] text-gray-400 border-white/10 hover:bg-white/[0.05]'
                    }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setIsMahe(false)}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 border ${isMahe === false
                    ? 'bg-white text-black border-white'
                    : 'bg-white/[0.02] text-gray-400 border-white/10 hover:bg-white/[0.05]'
                    }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Conditional Fields */}
            {isMahe === true && (
              <>
                {/* Campus Selection */}
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                    Campus
                  </label>
                  <select
                    value={campus}
                    onChange={(e) => setCampus(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[rgb(235,107,38)]/50 transition-colors appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>
                      Select Campus
                    </option>
                    {CAMPUSES.map((c) => (
                      <option key={c.value} value={c.value} className="bg-[#0a0a0a]">
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

              </>
            )}

            {isMahe === false && (
              /* College Name */
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                  College Name
                </label>
                <input
                  type="text"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  placeholder="e.g. MIT"
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[rgb(235,107,38)]/50 transition-colors placeholder:text-gray-600"
                  required
                />
              </div>
            )}

            {/* Registration Number (Always Visible if isMahe is selected) */}
            {isMahe !== null && (
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                  {isMahe
                    ? 'Registration Number'
                    : 'College Registration Number / ID Card Number'}
                </label>
                <input
                  type="number"
                  value={regNum}
                  onChange={(e) => setRegNum(e.target.value)}
                  placeholder="Enter Number"
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[rgb(235,107,38)]/50 transition-colors placeholder:text-gray-600"
                  required
                />
              </div>
            )}

            {/* Mobile Number */}
            <div>
              <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                Mobile Number
              </label>
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="10-digit mobile number"
                className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[rgb(235,107,38)]/50 transition-colors placeholder:text-gray-600"
                required
              />
            </div>

            {/* Track */}
            <div>
              <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">
                Track
              </label>
              <select
                value={track}
                onChange={(e) => setTrack(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white text-sm outline-none focus:border-[rgb(235,107,38)]/50 transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="" disabled>
                  Select a track
                </option>
                {TRACKS.map((t) => (
                  <option key={t.value} value={t.value} className="bg-[#0a0a0a]">
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-white hover:bg-gray-100 text-black font-bold text-sm uppercase tracking-widest rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-2"
            >
              {loading ? 'Submitting...' : 'Complete Registration'}
            </button>
          </form>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
}
